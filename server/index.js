const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json())
const mysql=require('mysql')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'lunchdatabase'
});

app.post('/Login',(req,res)=>{
    var id=req.body.id;
    var pass=req.body.pass;
    db.query(
        "SELECT * FROM employee WHERE employeeid=? AND password=?",
        [id,pass],
        (err,result)=>{
            if(err){
                res.send({err:err});
            }
            if(result.length>0){
                if(req.body.id==='1111' && req.body.pass==='a'){
                    res.send({message:'admin'});
                }else{
                res.send({message:'correct'});
                }
            }else{
                res.send({message:'Wrong id/password!'});
            }

        }
    );
}); 

app.post('/Menu',(req,res)=>{
    var j;
    var qty=[req.body.qty1,req.body.qty2,req.body.qty3,req.body.qty4,req.body.qty5,req.body.qty6,req.body.qty7,req.body.qty8,req.body.qty9,req.body.qty10];
    for(var i=0,j=1;i<qty.length;i++,j++){
        if(qty[i]===''){
            qty[i]=0;
        }
        db.query(
            "UPDATE menu SET quantity=quantity+? WHERE SNo=?",[qty[i],j]);
    }
    res.send({message:'correct'});
});

app.post('/Admin',(req,res)=>{
    var qty=[req.body.qty1,req.body.qty2,req.body.qty3,req.body.qty4,req.body.qty5,req.body.qty6,req.body.qty7,req.body.qty8,req.body.qty9,req.body.qty10];
    var j;
    for(var i=0,j=1;i<qty.length;i++,j++){
        db.query(
            "UPDATE menu SET quantity=? WHERE SNo=?",[qty[i],j]); 
    }
    res.send({message:'correct'});
});

app.get('/Admin',(req,res)=>{
    db.query(
        "SELECT quantity from menu",(err,result)=>{
            if(err){
                res.send({err:err});
            }
            else{
                res.send(result);
                //console.log(result);
            }
        }
    ); 
});

/*app.get('/',(req,res)=>{
    res.send('Hello Page');
});*/

app.listen(3001,()=>{
    console.log("running on 3001");
});