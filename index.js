const users = [{
     name : "john" , kidney : [
        {healthy : false},{healthy : true}]
}];
const express = require("express");
const app = express();
app.use(express.json());
app.get("/",function(req,res)
{
    const johnkidney = users[0].kidney;
    const numberofkidney = johnkidney.length;
    let healthykidney = 0 ;
    for(let i =0;i<numberofkidney;i++)
    {
        if(johnkidney[i].healthy)
            {
                healthykidney = healthykidney+1;
            }
    }
    const unhealthykidney = numberofkidney-healthykidney;
    res.json({
        johnkidney,numberofkidney,healthykidney,unhealthykidney
    }

    )

}
)
app.post("/",function(req,res){
    const newkidney = req.body.newkidney;
    users[0].kidney.push(
        {
            healthy : newkidney
        }
    )
    res.json({msg:"work done"});
})
app.put("/",function(req,res)
{
    if(aouk())
    {
        for(let i = 0;i<users[0].kidney.length;i++)
            {
                users[0].kidney[i].healthy = true
            }
            res.json({msg:"made all the kidneys safe"});
    }
    else{
        res.status(411).json({msg:"no kidney to make safe"});
    }
})
app.delete("/", function(req,res) {
    const healthyones  = [];
    if(aouk())
    {
        for(let i = 0;i<users[0].kidney.length;i++)
            {   
                if(users[0].kidney[i].healthy)
                {
                    healthyones.push(users[0].kidney[i]);
                }
        
            }
            users[0].kidney = healthyones;
            res.json({msg:"all the unhealthy kidneys are deleted"});
    }
    else{
        res.status(411).json({msg:"there are no unhealthy kidneys to delete"});
    }
   
})
function aouk(){
    let luk = false;
    for(let i = 0;i<users[0].kidney.length;i++)
    {
        if(!users[0].kidney[i].healthy)
        {
            luk = true;
        }
    }
    return luk;
}
app.listen(3000);