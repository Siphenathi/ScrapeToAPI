const router = require('express').Router();

router.get('/',(req,res)=>{

    res.send("Game");

});

module.exports = router;