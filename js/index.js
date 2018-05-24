$(document).ready(function () {
    $('#newQuote').click(function() {
        var url = "https://crossorig.in/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";
        $.getJSON(url, function(data){
            $('#idQuote').html(data.quoteText);
            $('#idAutor').html(data.quoteAuthor);
        });     
    });
    var contents = $('#idQuote');
    $('#tweetQuote').click(function () {
        window.open("https://twitter.com/intent/tweet?text=" + contents);
    });
});