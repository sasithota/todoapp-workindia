const db = require('../db_server');
const Cryptr = require('cryptr');
const router = require('express').Router();

router.post('/app/agent/auth',(req,res,next)=>{
    const {agent_id,password} = req.body;
    const cryptr = new Cryptr(process.env.ENCRYPTION_PASSWORD);
    const sql = `SELECT * from agents WHERE id = ${agent_id}`;
    db.query(sql,(err,results)=>{
        if(err || results.length===0){
            console.log(results.length);
            return res.json({"status" : "failure", "status_code" : 401});
        }else{
            const d_password = cryptr.decrypt(results[0].password);
            if(password!=d_password) return res.json({"status" : "failure", "status_code" : 401});
            return res.json({"status" : "success" , "agent_id" : agent_id, "status_code" : 200});
        }
    })
})

module.exports = router;