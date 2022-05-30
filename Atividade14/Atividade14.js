function validar(form) {
    
    if(document.formulario.elements[0].value.length < 10){
        alert("Nome precisa ter ao menos 10 caracteres.")
        return false;
    }

    if(document.formulario.elements[1].value.indexOf('@') < 0 && document.formulario.elements[1].value.indexOf('.') < 0){
        alert("E-Mail inválido.");
        return false;
    }

    if(document.formulario.elements[2].value.length < 20){
        alert("Comentário precisa ter ao menos 20 caracteres.")
        return false;
    }

    if(document.getElementById('visitaNao').checked == true){
        alert("Que bom que você voltou a visitar esta página!");
    } else if(document.getElementById('visitaSim').checked == true){
        alert("Volte sempre à esta página!");
        return true;
    } else {
        alert("Selecione uma das opções.");
        return false;
    }

}