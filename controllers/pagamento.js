const query = require('../models/query')
const Express = require('express')
class Pagamento {
    criarPagamento = async (req, res) => {
        /*let id = {id: req.body.idCredor}

        if(id){
            console.log("teste")
        } */
        try {
            const values = req.body
            const sql = 'INSERT INTO Pagamento SET ?'

            await query(sql, values);
            return res.json(values)
        }catch(err){
            console.log(err)
            return res.json({message: err})
        }
    }
    listarPagamento = async (req,res) => {
        const sql = 'SELECT * FROM Pagamento;'
        return res.send(await query(sql))
    }

}
module.exports = new Pagamento()