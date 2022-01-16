const {router, Router} = require('express')
const NotaController = require('../controllers/NotaController')


const routers = Router()

routers.get('/api/project',NotaController.todasAsNotas)
routers.get('/api/project/:id',NotaController.buscaNotasId)
routers.post('/api/project',NotaController.criarNotas)
routers.put('/api/project/:id',NotaController.atualizaNotas)
routers.delete('/api/project/:id',NotaController.apagaNotas)
routers.post('/api/project/:id/tasks',NotaController.criarTask)
routers.put('/api/project/:noteId/tasks/:taskId',NotaController.attsTask)
routers.delete('/api/project/:noteId/tasks/:taskId',NotaController.apagaTaskId)



module.exports = routers







