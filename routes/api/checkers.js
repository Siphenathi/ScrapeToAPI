const router = require('express').Router();
const cheerio = require('cheerio');
const request = require('request');

let wineurl = 'https://liquorshop.checkers.co.za/liquorshop/en/Wines/c/300?q=%3Aprice-asc%3AprodAvailableStores%3ACheckers+LiquorShop+6th+Avenue&page=';

app.get('/wine/:id',(req,res)=>{

    var items =[];

    request(`${wineurl}+${req.params.id}`,(err,response,html)=>{
        if(!err && response.statusCode==200){
            const $ = cheerio.load(html);

            $('.product-item').each((i,elem)=>{
                const name = $(elem).find('.name').text().replace("\n\t\t\t\t\t\t",'');
                const price = $(elem).find('.finalPrice').text();
                

                var item={
                    "name":name,
                    "price":price
                };
                items.push(item);
                

            });
        }
        res.json(items);

    });
});

module.exports=router;