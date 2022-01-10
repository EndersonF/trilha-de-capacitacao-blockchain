const fs = require('fs') //Pacote file system//

 const path = require('path')


module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => 
{
    const tiposValidos = ['jpg','png','jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoEhValido){
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}` 
    
    fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(false, novoCaminho))
    }else{
        const erro = 'Tipo é inválido'
        console.log('Error! Tipo inválido')
        callbackImagemCriada(erro)
    }
}


// fs.readFile('./assets/salsisha.jpg',(erro, buffer)=>{
//     console.log('imagem foi bufferizada')
//     fs.writeFile('./assets/salsicha2.jpg',buffer, erro =>{
//         console.log('imagem foi escrita')
//     })
// })