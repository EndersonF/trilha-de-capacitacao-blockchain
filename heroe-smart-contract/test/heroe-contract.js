/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { HeroeContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logger = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('HeroeContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new HeroeContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"heroe 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"heroe 1002 value"}'));
    });

    describe('#heroeExists', () => {

        it('should return true for a heroe', async () => {
            await contract.heroeExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a heroe that does not exist', async () => {
            await contract.heroeExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createHeroe', () => {

        it('should create a heroe', async () => {
            await contract.createHeroe(ctx, '1003', 'heroe 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"heroe 1003 value"}'));
        });

        it('should throw an error for a heroe that already exists', async () => {
            await contract.createHeroe(ctx, '1001', 'myvalue').should.be.rejectedWith(/The heroe 1001 already exists/);
        });

    });

    describe('#readHeroe', () => {

        it('should return a heroe', async () => {
            await contract.readHeroe(ctx, '1001').should.eventually.deep.equal({ value: 'heroe 1001 value' });
        });

        it('should throw an error for a heroe that does not exist', async () => {
            await contract.readHeroe(ctx, '1003').should.be.rejectedWith(/The heroe 1003 does not exist/);
        });

    });

    describe('#updateHeroe', () => {

        it('should update a heroe', async () => {
            await contract.updateHeroe(ctx, '1001', 'heroe 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"heroe 1001 new value"}'));
        });

        it('should throw an error for a heroe that does not exist', async () => {
            await contract.updateHeroe(ctx, '1003', 'heroe 1003 new value').should.be.rejectedWith(/The heroe 1003 does not exist/);
        });

    });

    describe('#deleteHeroe', () => {

        it('should delete a heroe', async () => {
            await contract.deleteHeroe(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a heroe that does not exist', async () => {
            await contract.deleteHeroe(ctx, '1003').should.be.rejectedWith(/The heroe 1003 does not exist/);
        });

    });

});
