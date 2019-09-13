const router = require('express').Router();
const cheerio = require('cheerio');
const request = require('request');

beerURL ='https://www.pnp.co.za/pnpstorefront/pnp/en/All-Products/Wine-%26-Liquor/Beer/c/beer1498227286?q=%3Arelevance&pageSize=18&page=';
ciderURL = 'https://www.pnp.co.za/pnpstorefront/pnp/en/All-Products/Wine-%26-Liquor/Ciders-%26-Coolers/c/ciders-and-coolers1498227286?q=%3Arelevance&pageSize=18&page=';
spiritURL = 'https://www.pnp.co.za/pnpstorefront/pnp/en/All-Products/Wine-%26-Liquor/Spirits/c/spirits1498227286?q=%3Arelevance&pageSize=18&page=';
redwineURL = 'https://www.pnp.co.za/pnpstorefront/pnp/en/All-Products/Wine-%26-Liquor/Red-Wine/c/red-wine1498227286?q=%3Arelevance&pageSize=18&page=';
whitewineURL ='https://www.pnp.co.za/pnpstorefront/pnp/en/All-Products/Wine-%26-Liquor/White-Wine/c/white-wine1498227286?q=%3Arelevance&pageSize=18&page=';
rosewineURL = 'https://www.pnp.co.za/pnpstorefront/pnp/en/All-Products/Wine-%26-Liquor/Rose-Wine/c/rose-wine1498227286?q=%3Arelevance&pageSize=18&page=';

router.get('/beer/:id',(req,res)=>{

    var beers = [];
     request(`${beerURL}`+req.params.id,(err,response,html)=>{
         if(!err && response.statusCode==200){
             const $ = cheerio.load(html);
             $('.productCarouselItem').each((index,elem)=>{
                 const name = $(elem).find('.item-name').text();
                 const price = $(elem).find('.currentPrice').text().replace('\n\t\t\t','');
                 const cents = price.substr(price.length-2);
                 const rands= price.substr(0,price.length-2);
                 const finalPrice = `${rands}.${cents}`;

                 var beer ={'name':name,'price':finalPrice};
                 beers.push(beer);
             });
         }
         res.json(beers);
     });
});

router.get('/redwine/:id',(req,res)=>{

    var wines = [];
     request(`${redwineURL}`+req.params.id,(err,response,html)=>{
         if(!err && response.statusCode==200){
             const $ = cheerio.load(html);
             $('.productCarouselItem').each((index,elem)=>{
                 const name = $(elem).find('.item-name').text();
                 const price = $(elem).find('.currentPrice').text().replace('\n\t\t\t','');
                 const cents = price.substr(price.length-2);
                 const rands= price.substr(0,price.length-2);
                 const finalPrice = `${rands}.${cents}`;

                 var wine ={'name':name,'price':finalPrice};
                 wines.push(wine);
             });
         }
         res.json(wines);
     });
});

router.get('/rose/:id',(req,res)=>{

    var wines = [];
     request(`${rosewineURL}`+req.params.id,(err,response,html)=>{
         if(!err && response.statusCode==200){
             const $ = cheerio.load(html);
             $('.productCarouselItem').each((index,elem)=>{
                 const name = $(elem).find('.item-name').text();
                 const price = $(elem).find('.currentPrice').text().replace('\n\t\t\t','');
                 const cents = price.substr(price.length-2);
                 const rands= price.substr(0,price.length-2);
                 const finalPrice = `${rands}.${cents}`;

                 var wine ={'name':name,'price':finalPrice};
                 wines.push(wine);
             });
         }
         res.json(wines);
     });
});

router.get('/whitewine/:id',(req,res)=>{

    var wines = [];
     request(`${whitewineURL}`+req.params.id,(err,response,html)=>{
         if(!err && response.statusCode==200){
             const $ = cheerio.load(html);
             $('.productCarouselItem').each((index,elem)=>{
                 const name = $(elem).find('.item-name').text();
                 const price = $(elem).find('.currentPrice').text().replace('\n\t\t\t','');
                 const cents = price.substr(price.length-2);
                 const rands= price.substr(0,price.length-2);
                 const finalPrice = `${rands}.${cents}`;

                 var wine ={'name':name,'price':finalPrice};
                 wines.push(wine);
             });
         }
         res.json(wines);
     });
});

router.get('/cider/:id',(req,res)=>{

    var ciders = [];
     request(`${ciderURL}`+req.params.id,(err,response,html)=>{
         if(!err && response.statusCode==200){
             const $ = cheerio.load(html);
             $('.productCarouselItem').each((index,elem)=>{
                 const name = $(elem).find('.item-name').text();
                 const price = $(elem).find('.currentPrice').text().replace('\n\t\t\t','');
                 const cents = price.substr(price.length-2);
                 const rands= price.substr(0,price.length-2);
                 const finalPrice = `${rands}.${cents}`;

                 var cider ={'name':name,'price':finalPrice};
                 ciders.push(cider);
             });
         }
         res.json(ciders);
     });
});

router.get('/spirit/:id',(req,res)=>{

    var spirits = [];
     request(`${spiritURL}`+req.params.id,(err,response,html)=>{
         if(!err && response.statusCode==200){
             const $ = cheerio.load(html);
             $('.productCarouselItem').each((index,elem)=>{
                 const name = $(elem).find('.item-name').text();
                 const price = $(elem).find('.currentPrice').text().replace('\n\t\t\t','');
                 const cents = price.substr(price.length-2);
                 const rands= price.substr(0,price.length-2);
                 const finalPrice = `${rands}.${cents}`;

                 var spirit ={'name':name,'price':finalPrice};
                 spirits.push(spirit);
             });
         }
         res.json(spirits);
     });
});



module.exports=router;