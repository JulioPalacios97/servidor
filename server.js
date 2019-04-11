const express = require('express')
const app= express();
const bodyParser=require('body-parser')
const indexRouter=require("./rutas/routes");
const companyRouter=require("./rutas/companies");
app.use(bodyParser());
app.use("/public",express.static(__dirname+'/public/'));

app.use("/",indexRouter);
app.use("/",companyRouter);

/*
app.use("/*",(req,res)=>{
	res.sendFile(__dirname+"/public/index.html");
})*/
app.listen(3000,()=>console.log("Listening on http://localhost:3000"));