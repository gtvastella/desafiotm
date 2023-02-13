
// valor em estrelas que o usuário clicou (inicialmente 0)
var valorAtual = 0;

// checagem de quando o usuário clica em qualquer estrela (que inicia com o id st-)
$('[id^="st-"]').click(function () {

   //estrela clicada
    var clicado = parseInt(this.id.split("-")[1]);
    if (clicado == valorAtual)
        return;

    valorAtual = clicado;

    //printando o valor de estrelas no terminal
    console.log(valorAtual + " estrela(s)");

     //remove opção de clicar novamente
    $(this).removeAttr('href');

     //atualiza preenchimento das estrelas subsequentes
    for (var estrelas = 1; estrelas <= 5; estrelas++){

        if (estrelas <= clicado) {
            $(("#st-" + estrelas)).html("<img src='./estrela_cheia.svg' class='estrela'>");
            $(("#st-" + estrelas)).animate({ opacity: 0.6 }, 300);
            $(("#st-" + estrelas)).animate({ opacity: 1 }, 300);
        } else {
            $(("#st-" + estrelas)).html("<img src='./estrela_vazia.svg' class='estrela'>");
        }

        //adiciona opção de clicar novamente
        if (estrelas != clicado)
            document.getElementById("st-" + estrelas).setAttribute("href", "#");
    }

    // muda cor do botão confirmar (ativa ele)
    $('.confirmar').css("box-shadow", "-4px 12px 25px -10px #2EAFB9");
    $('.confirmar').css("background", "#2EAFB9");
    
    return false; 
});

