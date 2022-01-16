const database = require("../models");

class NotaController {
  static async todasAsNotas(req, res) {
    //Busca as Notas
    try {
      const todasAsNotas = await database.Notas.findAll({include:"owner"});
      return res.status(200).json(todasAsNotas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async buscaNotasId(req, res) {
    const { id } = req.params;
    try {
      const buscaNotasId = await database.Notas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(buscaNotasId);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criarNotas(req, res) {
    const novaNota = req.body;
    try {
      const notaCriada = await database.Notas.create(novaNota);
      return res.status(201).json(notaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizaNotas(req, res) {
    const {id} = req.params;
    const atualizaNota = req.body;
    try {
      await database.Notas.update(atualizaNota, { where: { id: Number(id) } });
      const notaAtualizada = database.Notas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(notaAtualizada);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
  static async apagaNotas(req, res){
      const {id} = req.params
      try {
          await database.Notas.destroy({ where: { id: Number(id) } });
          res.status(204).json({mensagem:'NOTA APAGADA!!!!'})
      } catch (error) {
          return res.status(404).json(error.message)
          
      }
  }

  //-------------------------------------------------------//

  static async criarTask (req, res) { //add task
      const {id} = req.params
      const novaTask ={ ...req.body, nota_id: Number(id)}
      try {
          const criarTask = await database.Notas.findOne({where: {id: Number(id)}})
          if  (criarTask) {
              const attTask = await database.Tasks.create(novaTask)
                // novaTask,{where:{nota_id:Number(id)}}) //{...infoTask, nota_id}
              return res.status(201).json(attTask)
          }else{
              return res.status(400).json({message :"nota nao foi encontrada!"})
          }
      } catch (error) {
          return res.status(500).json(error.message)
      }
  } 




  static async attsTask (req,res){ //att task
    const {taskId, noteId} = req.params
    const upTask = req.body
    try {
      // if (attsTask){
        await database.Tasks.update(upTask,
          {where:
            {id:Number(taskId),
            nota_id:Number(noteId)}})
        const taskAtualizada = await database.Tasks.findOne({where:{id:taskId}})
        return res.status(200).json(taskAtualizada)
    } catch (error) {
        return res.status(500).json(error.message)
      
    }
  }
  static async apagaTaskId(req, res){
    const {taskId, noteId} = req.params
    try {
      const task = await database.Tasks.destroy({
        where:
          {id:Number(taskId),
          nota_id:Number(noteId)}})
          return res.status(200).json({message:'tarefa apagada'})
    } catch (error) {
      return res.status(500).json(error.message)
      
    }
  }
}
module.exports = NotaController;