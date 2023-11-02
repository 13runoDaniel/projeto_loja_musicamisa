$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            telefone:{
                required: true
            },
            email:{
                email: true,
                required: true
            },
            mensagem:{
                required: true
            },
        },
        messages:{
            nome: 'Informe seu nome',
            telefone: 'Informe seu telefone',
            email: 'Informe seu e-mail',
            mensagem: 'Deixe sua mensagem'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validar){
            let camposIncorretos = validar.numberOfInvalids();
            if(validar){
                alert(`Preencher o(s) ${camposIncorretos} campo(s) pendente(s)`)
            }
        }
    });
});