const Validacoes = {
    nome(valor) {
        return valor.trim().length >= 3;
    },

    email(valor) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(valor);
    },

    telefone(valor) {
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return regex.test(valor);
    },

    idade(valor) {
        if (!valor) return false;
        const hoje = new Date();
        const dataNasc = new Date(valor);
        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        const mes = hoje.getMonth() - dataNasc.getMonth();
        
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }
        return idade >= 16;
    },

    senha(valor) {
        const temOitoCaracteres = valor.length >= 8;
        const temMaiuscula = /[A-Z]/.test(valor);
        const temNumero = /[0-9]/.test(valor);
        return temOitoCaracteres && temMaiuscula && temNumero;
    },

    confirmarSenha(senha, confirmacao) {
        return senha === confirmacao && confirmacao.length > 0;
    },

    mensagem(valor) {
        const tam = valor.trim().length;
        return tam >= 50 && tam <= 500;
    },

    foto(inputElement) {
        if (!inputElement.files || inputElement.files.length === 0) return true;
        const arquivo = inputElement.files[0];
        const tiposValidos = ['image/jpeg', 'image/png'];
        const tamanhoMaximo = 2 * 1024 * 1024;

        return tiposValidos.includes(arquivo.type) && arquivo.size <= tamanhoMaximo;
    }
};
