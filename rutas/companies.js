const router=require("express").Router()
const controllers =require("../controlador/companyController")

router.get("/companias",controllers.get);
router.get("/companias/:id",controllers.get2);
router.post("/companias/",controllers.post);

module.exports=router;
