const router = require('express').Router();
const db = require('../db_server');

router.get('/list/',(req,res)=>{
    const id = req.query.agent;
    console.log(id);
    const sql = `SELECT * FROM items WHERE agent_id = ${id} order by due_date`;
    db.query(sql,(err,results)=>{
        if(err) throw err;
        return res.json(results);
    })
});

router.post('/',(req,res)=>{
    const id = req.query.agent;
    const {title,description,category,due_date} = req.body;
    const sql = `INSERT INTO items (agent_id,title,description,category,due_date) values ("${id}","${title}","${description}","${category}","${due_date}")`; 
    db.query(sql,(err,result)=>{
        if(err) throw err;
        return res.json({"status" : "success", "status_code" : 200});
    });
});
module.exports = router;