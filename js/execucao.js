function scrollDireita(){
    $('.abrir-tela').addClass('moverEsquerda');
    setTimeout(function() {
    $('.pagina').html('<div id="conteudo-quemsoueu" class="moverEsquerda container-conteudo"><div class="botao-voltar"><button id="voltar-cima" onclick="voltarMenu()">Menu</button></div><h1>Paulo D. S. Lima</h1>    <p>Sou desenvolvedor Web buscando a primeira oportunidade de emprego. Iniciei na área de TI com o curso de Técnico em Informática para Internet e atualmente atuo como analista de suporte. Tenho competência com as tecnologias PHP, Bootstrap, JavaScript, SQL, jQuery, entre outras, que uso para fazer sites e sistemas web. Me considero focado e adaptável, além de ter minhas bases como programador bem firmadas, tendo assim competência para aprender novas tecnologias com rapidez e capacidade para superar desafios.</p></div><script src="js/execucao.js"></script>')}
    , 710);
}

function scrollEsquerda(){
    $('.abrir-tela').addClass('moverDireita');
    setTimeout(function() {
    $('.pagina').html('<div id="conteudo-projetos" class="moverDireita container-conteudo"><div class="botao-voltar"><button id="voltar-cima" onclick="voltarMenu()">Menu</button></div><a href="https://paulodslima.github.io/sites/" class="container-projetos" target="_blank"><span>Sites</span></a><a class="container-projetos" target="_blank"><span>Sistemas Web</span></a></div><script src="js/execucao.js"></script>')}
    , 710);
}

function scrollCima(){
    $('.abrir-tela').addClass('moverCima');
    setTimeout(function() {
    $('.pagina').html('<div id="conteudo-contato" class="container-conteudo"><div class="botao-voltar"><button onclick="voltarMenu()">Menu</button></div><ul><li><a href="https://github.com/paulodslima" target="_blank"><img src="img/github.png" alt=""></a><br><span>Github</span></li><li><a href="https://www.linkedin.com/in/paulodslima/" target="_blank"><img src="img/linkedin.png" alt=""></a><br><span>Linkedin</span></li></ul></div><script src="js/execucao.js"></script>')}
    , 400);
}

function voltarMenu(){
    $('.pagina').addClass('fechar-tela');
    setTimeout(function() {
        $('.pagina').removeClass('fechar-tela'),
        $('.pagina').html('<div class="abrir-tela"> <ul><li><button type="button" id="quemsoueu" onclick="scrollDireita()">Quem sou eu?</button></li><li><button id="projetos" onclick="scrollEsquerda()">Projetos</button></li><li><button id="contato" onclick="scrollCima()">Contato</button></li></ul></div><script src="js/execucao.js"></script>')}
        , 1000);
}