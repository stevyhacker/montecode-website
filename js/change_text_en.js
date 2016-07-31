(function(){
    var words = [
        'web app',
        'android app',
        'website',
        'web design'
        ], i = 0;
    setInterval(function(){
        $('#change_text_en').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
        
})();