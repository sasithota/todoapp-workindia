const db = require('../db_server');
const Cryptr = require('cryptr');
const router = require('express').Router();

router.post('/app/agent',async(req,res)=>{
    const {agent_id,password} = req.body;
    const cryptr = new Cryptr(process.env.ENCRYPTION_PASSWORD);
    const encrypted_password = cryptr.encrypt(password);
    const sql = `INSERT INTO agents (id,password) VALUES ("${agent_id}","${encrypted_password}")`;
    try{
       const response = await db.query(sql);
       return res.json({'status' : 'account created','status_code':200});
    }catch{
       return res.json({'status' : 'failure','status_code' : 401});
    }
    next();
})

module.exports = router;