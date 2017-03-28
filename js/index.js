main();
// $('#tweet').on('click', tweet);
var post;
var currentQuote = '',
  currentAuthor = '';
$('#newQuote').on('click', main);

function main() {
  // e.preventDefault();
  $.ajaxSetup({
    cache: false
  });
  console.log('hey!');
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    var post = a;
    $('.quote-content').html(post[0].content);
    console.log(post);

    $('#quote-source').html(post[0].title);
    var color = 'rgb(' + Math.floor(Math.random() * 255) + ',' +
      Math.floor(Math.random() * 255) + ',' +
      Math.floor(Math.random() * 255) + ')';
    $('body').css('background-color', color);
    $('#newQuote').css('color', color);
    $('#tweet').css('color', color);
    currentQuote = post[0].content;
    currentAuthor = post[0].title;
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + $(currentQuote).text() + '" ' + currentAuthor));

  });
}

// function tweet()
// {

//   $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + post[0].content + '" ' + post[0].title))
// }