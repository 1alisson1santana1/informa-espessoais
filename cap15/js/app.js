document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formInscricao");
    const inputs = {
        nome: document.getElementById("nome"),
        email: document.getElementById("email"),
        telefone: document.getElementById("telefone"),
        dataNascimento: document.getElementById("dataNascimento"),
        curso: document.getElementById("curso"),
        senha: document.getElementById("senha"),
        confirmarSenha: document.getElementById("confirmarSenha"),
        mensagem: document.getElementById("mensagem"),
        termos: document.getElementById("termos"),
        foto: document.getElementById("foto")
    };

    
    inputs.telefone.addEventListener("input", (e) => {
        e.target.value = aplicarMascaraTelefone(e.target.value);
        validarCampo('telefone');
    });

   
    inputs.mensagem.addEventListener("input", () => {
        document.getElementById("charCount").textContent = inputs.mensagem.value.length;
        validarCampo('mensagem');
    });

   
    document.getElementById("toggleSenha").addEventListener("click", function() {
        const tipo = inputs.senha.type === "password" ? "text" : "password";
        inputs.senha.type = tipo;
        this.textContent = tipo === "password" ? "👁️" : "🙈";
    });

    
    function salvarDadosCampos() {
        const dados = {
            nome: inputs.nome.value,
            email: inputs.email.value,
            telefone: inputs.telefone.value,
            dataNascimento: inputs.dataNascimento.value,
            curso: inputs.curso.value,
            mensagem: inputs.mensagem.value
        };
        localStorage.setItem("inscricao_rascunho", JSON.stringify(dados));
    }

    function restaurarDadosCampos() {
        const dadosSalvos = localStorage.getItem("inscricao_rascunho");
        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);
            inputs.nome.value = dados.nome || "";
            inputs.email.value = dados.email || "";
            inputs.telefone.value = dados.telefone || "";
            inputs.dataNascimento.value = dados.dataNascimento || "";
            inputs.curso.value = dados.curso || "";
            inputs.mensagem.value = dados.mensagem || "";
            if (inputs.mensagem.value) {
                document.getElementById("charCount").textContent = inputs.mensagem.value.length;
            }
        }
    }
    restaurarDadosCampos();

   

    function exibirErro(idCampo, mensagem, inputElement) {
        const erroSpan = document.getElementById(`error-${idCampo}`);
        if (erroSpan) erroSpan.textContent = mensagem;
        if (inputElement) gerenciarClassesValidacao(inputElement, false);
    }

    function limparErro(idCampo, inputElement) {
        const erroSpan = document.getElementById(`error-${idCampo}`);
        if (erroSpan) erroSpan.textContent = "";
        if (inputElement) gerenciarClassesValidacao(inputElement, true);
    }

    function validarCampo(nomeCampo) {
        salvarDadosCampos(); 
        
        switch (nomeCampo) {
            case 'nome':
                if (!Validacoes.nome(inputs.nome.value)) {
                    exibirErro('nome', 'O nome deve ter no mínimo 3 caracteres.', inputs.nome);
                    return false;
                }
                limparErro('nome', inputs.nome);
                return true;

            case 'email':
                if (!Validacoes.email(inputs.email.value)) {
                    exibirErro('email', 'Insira um e-mail válido.', inputs.email);
                    return false;
                }
                limparErro('email', inputs.email);
                return true;

            case 'telefone':
                if (!Validacoes.telefone(inputs.telefone.value)) {
                    exibirErro('telefone', 'Formato obrigatório: (82) 99999-9999.', inputs.telefone);
                    return false;
                }
                limparErro('telefone', inputs.telefone);
                return true;

            case 'dataNascimento':
                if (!Validacoes.idade(inputs.dataNascimento.value)) {
                    exibirErro('dataNascimento', 'Inscrição permitida apenas para maiores de 16 anos.', inputs.dataNascimento);
                    return false;
                }
                limparErro('dataNascimento', inputs.dataNascimento);
                return true;

            case 'curso':
                if (!inputs.curso.value) {
                    exibirErro('curso', 'Selecione um curso técnico.', inputs.curso);
                    return false;
                }
                limparErro('curso', inputs.curso);
                return true;

            case 'senha':
                if (!Validacoes.senha(inputs.senha.value)) {
                    exibirErro('senha', 'A senha deve conter: 8+ dígitos, uma letra maiúscula e um número.', inputs.senha);
                    return false;
                }
                limparErro('senha', inputs.senha);
                return true;

            case 'confirmarSenha':
                if (!Validacoes.confirmarSenha(inputs.senha.value, inputs.confirmarSenha.value)) {
                    exibirErro('confirmarSenha', 'As senhas não coincidem.', inputs.confirmarSenha);
                    return false;
                }
                limparErro('confirmarSenha', inputs.confirmarSenha);
                return true;

            case 'mensagem':
                if (!Validacoes.mensagem(inputs.mensagem.value)) {
                    exibirErro('mensagem', 'A mensagem deve conter entre 50 e 500 caracteres.', inputs.mensagem);
                    return false;
                }
                limparErro('mensagem', inputs.mensagem);
                return true;

            case 'foto':
                if (!Validacoes.foto(inputs.foto)) {
                    exibirErro('foto', 'Apenas arquivos JPG ou PNG de até 2MB.', inputs.foto);
                    return false;
                }
                limparErro('foto', inputs.foto);
                return true;

            case 'termos':
                if (!inputs.termos.checked) {
                    exibirErro('termos', 'Você precisa aceitar os termos.');
                    return false;
                }
                limparErro('termos');
                return true;
        }
    }

   
    inputs.nome.addEventListener("input", () => validarCampo('nome'));
    inputs.email.addEventListener("input", () => validarCampo('email'));
    inputs.dataNascimento.addEventListener("change", () => validarCampo('dataNascimento'));
    inputs.curso.addEventListener("change", () => validarCampo('curso'));
    inputs.senha.addEventListener("input", () => {
        validarCampo('senha');
        if (inputs.confirmarSenha.value) validarCampo('confirmarSenha');
    });
    inputs.confirmarSenha.addEventListener("input", () => validarCampo('confirmarSenha'));
    inputs.foto.addEventListener("change", () => validarCampo('foto'));
    inputs.termos.addEventListener("change", () => validarCampo('termos'));

  
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        
        const campos = ['nome', 'email', 'telefone', 'dataNascimento', 'curso', 'senha', 'confirmarSenha', 'mensagem', 'foto', 'termos'];
        let formValido = true;

        campos.forEach(campo => {
            if (!validarCampo(campo)) formValido = false;
        });

        const turnoSelecionado = document.querySelector('input[name="turno"]:checked');
        if (!turnoSelecionado) {
            exibirErro('turno', 'Escolha um turno de aulas.');
            formValido = false;
        } else {
            limparErro('turno');
        }

        
        const areasMarcadas = document.querySelectorAll('input[name="areas"]:checked');
        if (areasMarcadas.length < 2) {
            exibirErro('areas', 'Selecione pelo menos 2 áreas de interesse.');
            formValido = false;
        } else {
            limparErro('areas');
        }

        if (formValido) {
            alert("Cadastro realizado com sucesso!");
            localStorage.removeItem("inscricao_rascunho"); 
            form.reset();
            document.getElementById("charCount").textContent = 0;
            
            
            document.querySelectorAll('.valid, .invalid').forEach(el => {
                el.classList.remove('valid', 'invalid');
            });
        } else {
            alert("Por favor, corrija os erros no formulário antes de enviar.");
        }
    });

    
    form.addEventListener("reset", () => {
        localStorage.removeItem("inscricao_rascunho");
        document.querySelectorAll('.error-message').forEach(el => el.textContent = "");
        document.querySelectorAll('.valid, .invalid').forEach(el => el.classList.remove('valid', 'invalid'));
        document.getElementById("charCount").textContent = 0;
    });
});
