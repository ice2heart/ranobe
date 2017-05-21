const request = require('request');
const cheerio = require('cheerio');
const debug = require('debug')('crawler');

const getPage = function (page) {
  return new Promise(function (resolve, reject) {
    request({
      url: page,
      encoding: 'binary',
      timeout: 120000,
      pool: {
        maxSockets: Infinity
      }
    }, function (error, response, html) {
      if (!error) {
        //resolve(cheerio.load(iconv.encode(iconv.decode(new Buffer(html, 'binary'), 'cp1251'), 'utf8')));
        //debug(html);
        resolve(cheerio.load(new Buffer(html, 'binary')));
      } else {
        console.log(error);
        reject(error);
      }
    });
  });

};

getPage('http://darklate.ru/sbd').then(($)=>{
  //debug($(this).find($('div.su-spoiler-content.su-clearfix > p > em')).text());
  //#post-5 > div > div:nth-child(13) > div.su-spoiler-content.su-clearfix > p > em:nth-child(1) > a
  //debug($('#post-5 > div').find('p').eq(7).text());
  debug($('#post-5 > div').find('div .su-spoiler-content').find('a').length);
});
