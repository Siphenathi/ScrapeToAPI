const router = require('express').Router();
const cheerio = require('cheerio');
const request = require('request');

let beerurl = 'https://www.game.co.za/game-za/en/All-Game-Categories/Liquor/Beers-%26-Ciders/Beers/c/G010017?q=%3Arelevance&page=';
let spiriturl ='https://www.game.co.za/game-za/en/All-Game-Categories/Liquor/Spirits/c/G0086?q=%3Arelevance&page=';
let wineurl ='https://www.game.co.za/game-za/en/All-Game-Categories/Liquor/Wine/c/G0087?q=%3Arelevance&page=';


router.get('/wine/:id',(req,res)=>{

    var items =[];

    request(`${wineurl}+${req.params.id}`,(err,response,html)=>{
        if(!err && response.statusCode==200){
            const $ = cheerio.load(html);

            $('.product-item').each((i,elem)=>{

                const brand = $(elem).find('.brand').text().replace("\n\t\t\t\t\t\t",'');
                const name = $(elem).find('.name').text().replace("\n\t\t\t\t\t\t",'');
                const price = $(elem).find('.finalPrice').text();
                const img = $(elem).find('img').prop('src');
                const imgUrl =`https://www.game.co.za${img}`;

                var item={
                    "brand":brand,
                    "name":name,
                    "price":price,
                    "imageURL":imgUrl
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

                const brand = $(elem).find('.brand').text().replace("\n\t\t\t\t\t\t",'');
                const name = $(elem).find('.name').text().replace("\n\t\t\t\t\t\t",'');
                const price = $(elem).find('.finalPrice').text();
                const img = $(elem).find('img').prop('src');
                const imgUrl =`https://www.game.co.za${img}`;

                var item={
                    "brand":brand,
                    "name":name,
                    "price":price,
                    "imageURL":imgUrl
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

                const brand = $(elem).find('.brand').text().replace("\n\t\t\t\t\t\t",'');
                const name = $(elem).find('.name').text().replace("\n\t\t\t\t\t\t",'');
                const price = $(elem).find('.finalPrice').text();
                const img = $(elem).find('img').prop('src');
                const imgUrl =`https://www.game.co.za${img}`;

                var item={
                    "brand":brand,
                    "name":name,
                    "price":price,
                    "imageURL":imgUrl
                };
                items.push(item);
                

            });
        }
        res.json(items);

    });
    
    

});



module.exports = router;