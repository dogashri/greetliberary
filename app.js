var g=G$('john','doe')
g.greet().setLang('es').greet(true).log()
$('#login').click(function(){
    var logingrtr=G$('john','doe');
    $('#logindiv').hide()
    logingrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log()
})