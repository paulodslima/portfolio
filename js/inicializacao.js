setTimeout(function() {
    $('p').removeClass('inicializacao-texto'); $('p').addClass('fechar-texto')}, 4000);

setTimeout(function() {
        $('p').html('')}, 6000);

setTimeout(function() {
    $('.pagina').html('<div id="tela" class="abrir-tela"> <ul><li><button type="button" id="quemsoueu" onclick="scrollDireita()">Quem sou eu?</button></li><li><button id="projetos" onclick="scrollEsquerda()">Projetos</button></li><li><button id="contato" onclick="scrollCima()">Contato</button></li></ul></div><script src="js/execucao.js"></script>')}
    , 7500);