const router = require('express').Router();
const cheerio = require('cheerio');
const request = require('request');

let wineurl = 'https://liquorshop.checkers.co.za/liquorshop/en/Wines/c/300?q=%3Aprice-asc%3AprodAvailableStores%3ACheckers+LiquorShop+6th+Avenue&page=';
let beerurl ='https://liquorshop.checkers.co.za/liquorshop/en/Beer-%26-Ciders/c/100?q=%3Aprice-asc%3AprodAvailableStores%3ACheckers+LiquorShop+6th+Avenue&page=';
let spiriturl ='https://liquorshop.checkers.co.za/liquorshop/en/Liqueur-%26-Shooters/c/600?q=%3Aprice-asc%3AprodAvailableStores%3ACheckers+LiquorShop+6th+Avenue&page=';

router.get('/wine/:id',(req,res)=>{

    var items =[];

    request(`${wineurl}+${req.params.id}`,(err,response,html)=>{
        if(!err && response.statusCode==200){
            const $ = cheerio.load(html);

            $('.product-item').each((i,elem)=>{
                const name = $(elem).find('.name').text().replace('\n\t\t\t\t\t','').replace('\t\n\t\t\t\t\t\t','');
                const price = $(elem).find('.price').text().replace('\n\t\t','');
                

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

router.get('/spirit/:id',(req,res)=>{

    var items =[];

    request(`${spiriturl}+${req.params.id}`,(err,response,html)=>{
        if(!err && response.statusCode==200){
            const $ = cheerio.load(html);

            $('.product-item').each((i,elem)=>{
                const name = $(elem).find('.name').text().replace('\n\t\t\t\t\t','').replace('\t\n\t\t\t\t\t\t','');
                const price = $(elem).find('.price').text().replace('\n\t\t','');
                

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

router.get('/beer/:id',(req,res)=>{

    var items =[];

    request(`${beerurl}+${req.params.id}`,(err,response,html)=>{
        if(!err && response.statusCode==200){
            const $ = cheerio.load(html);

            $('.product-item').each((i,elem)=>{
                const name = $(elem).find('.name').text().replace('\n\t\t\t\t\t','').replace('\t\n\t\t\t\t\t\t','');
                const price = $(elem).find('.price').text().replace('\n\t\t','');
                

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