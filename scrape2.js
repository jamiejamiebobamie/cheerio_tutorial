var request = require('request');
var cheerio = require('cheerio');
var url = 'https://medium.com/@jamiemccrory/the-blog-post-where-i-pitch-you-my-dating-fashion-political-sim-with-light-romance-elements-4778e973294'
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a'); //jquery get all hyperlinks
  $(links).each(function(i, link){
    console.log($(link).text() + ':\n  ' + $(link).attr('href'));
  });
});
