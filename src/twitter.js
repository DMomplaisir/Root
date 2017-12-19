var Twitter = require('twitter');



var twitterKeys = {
  consumer_key: "Zhi4LTUmPhw1ym0tJZ6HD4l28",
  consumer_secret:"Dx4Nsjf1vt3lbjcBVwQwhndgsgAks7Uyt8YxNATJTURT7u3PrH",
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAAI%2FL3gAAAAAAa4X6mNvaOrcpBL29w9NqI9p5irk%3DNy8aFSUwV4MjDXyEeUCs9YY8RJnyNp8wAqW6vYvl35fWA7JLe8'
}

export default function important(){
  var client = new Twitter({
    consumer_key: 'Zhi4LTUmPhw1ym0tJZ6HD4l28',
    consumer_secret: 'Dx4Nsjf1vt3lbjcBVwQwhndgsgAks7Uyt8YxNATJTURT7u3PrH',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAI%2FL3gAAAAAAa4X6mNvaOrcpBL29w9NqI9p5irk%3DNy8aFSUwV4MjDXyEeUCs9YY8RJnyNp8wAqW6vYvl35fWA7JLe8'

  });

  client.stream('statuses/filter', {track: 'twitter'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});



}

  // Twitter.stream('statuses/firehouse', {
  //   track: 'javascript'
  // });
  //
  // Twitter.pipe(fs.createWriteStream('tweets.json'));
