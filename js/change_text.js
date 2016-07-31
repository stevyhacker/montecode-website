(function(){
    var words = [
        'android app',
        'igricu',
        'logo',
        'portal',
        'blog',
        'web sajt'
        ], i = 0;
    setInterval(function(){
        $('#change_text').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 2300);
        
})();