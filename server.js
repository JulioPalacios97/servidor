const express = require('express')
let port =  process.env.PORT || 3000;
const app= express();
const bodyParser=require('body-parser')
const indexRouter=require("./rutas/routes");
const companyRouter=require("./rutas/companies");
app.use(bodyParser());
app.use("/public",express.static(__dirname+'/public/'));

app.use("/rutas",indexRouter);
app.use("/companias",companyRouter);
app.use("/*",express.static(__dirname+'/public/index.html'));

/*
app.use("/*",(req,res)=>{
	res.sendFile(__dirname+"/public/index.html");
})*/
app.listen(port,()=>console.log("listening"));