/* criando as variáveis necessárias para o funcionamento do formulário de contato */

const form = document.querySelector('#box-form')
const inputs = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi


/* Adicionando um evento */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    phoneValidate();
    passwordValidade();
    comparePassword();
})

/* criando as funções de validação */
// Essas funções são responsáveis por validar os campos do formulário, verificando se os valores atendem   

function setError(index){
    inputs[index].style.border = '1px solid  #ff0266';
    spans [index].style.display = 'block';
}

function removeError(index){
    inputs[index].style.border = '';
    spans [index].style.display = 'none';
}

function nameValidate(){
    if(inputs[0].value.length < 3){
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(inputs[1].value)){
        setError(1);
    }
    else {
        removeError(1);
    }
}

function phoneValidate(){
    if(inputs[2].value.length < 8){
        setError(2);
    }
    else {
        removeError(2);
    }
}

function passwordValidade(){
    if(inputs[3].value.length < 8){
        setError(3);
    }
    else {
        removeError(3);
        comparePassword();
    }
}

function comparePassword(){
    if(inputs[3].value == inputs[4].value && inputs[4].value.legth >= 8){
        removeError(4);
    }
    else {
        setError(4);
    }
}


// Tentativa de colocar 2 JQuery - não vi nenhuma diferença

$(document).ready(function () {
  $('.main-middle-article').hover(
    function () {
      $(this).css('background-color', '#f0f8ff');
      $(this).animate({ marginLeft: '10px' }, 200);
    },
    function () {
      $(this).css('background-color', '');
      $(this).animate({ marginLeft: '0px' }, 200);
    }
  );
});


// Garante que o jQuery só execute após a página carregar
$(document).ready(function () {
  
  // Quando o usuário digita no campo de texto
  $('#campoTexto').on('keyup', function () {
    let texto = $(this).val(); // pega o valor digitado

    if (texto.trim() !== "") {
      $('#saida').text('Você digitou: ' + texto).fadeIn();
    } else {
      $('#saida').fadeOut(); // esconde o parágrafo se estiver vazio
    }
  });

  // Quando o usuário dá um duplo clique no campo de texto
  $('#campoTexto').on('dblclick', function () {
    $(this).val('');         // limpa o campo
    $('#saida').fadeOut();   // esconde a mensagem
  });

});