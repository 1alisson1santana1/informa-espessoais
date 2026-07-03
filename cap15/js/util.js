
function aplicarMascaraTelefone(valor) {
    valor = valor.replace(/\D/g, ""); // Remove tudo que não é número
    if (valor.length > 11) valor = valor.slice(0, 11);
    
    if (valor.length > 7) {
        return `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    } else if (valor.length > 2) {
        return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else if (valor.length > 0) {
        return `(${valor.slice(0, 2)}`;
    }
    return valor;
}


function gerenciarClassesValidacao(input, eValido) {
    if (eValido) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}
