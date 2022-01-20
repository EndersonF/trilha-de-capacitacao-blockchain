/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class HeroeContract extends Contract {

    async heroeExists(ctx, heroeId) {
        const buffer = await ctx.stub.getState(heroeId);
        return (!!buffer && buffer.length > 0);
    }

    async createHeroe(ctx, heroeId, value) {
        const exists = await this.heroeExists(ctx, heroeId);
        if (exists) {
            throw new Error(`The heroe ${heroeId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(heroeId, buffer);
    }

    async readHeroe(ctx, heroeId) {
        const exists = await this.heroeExists(ctx, heroeId);
        if (!exists) {
            throw new Error(`The heroe ${heroeId} does not exist`);
        }
        const buffer = await ctx.stub.getState(heroeId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateHeroe(ctx, heroeId, newValue) {
        const exists = await this.heroeExists(ctx, heroeId);
        if (!exists) {
            throw new Error(`The heroe ${heroeId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(heroeId, buffer);
    }

    async deleteHeroe(ctx, heroeId) {
        const exists = await this.heroeExists(ctx, heroeId);
        if (!exists) {
            throw new Error(`The heroe ${heroeId} does not exist`);
        }
        await ctx.stub.deleteState(heroeId);
    }

}

module.exports = HeroeContract;
