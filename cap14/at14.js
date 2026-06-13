// ==========================================================================
// Seleção de Elementos do DOM
// ==========================================================================

// Elementos do Perfil
const perfilCard = document.getElementById('perfil');
const fotoPerfil = document.getElementById('fotoPerfil');
const nomePerfil = document.getElementById('nomePerfil');
const cursoPerfil = document.getElementById('cursoPerfil');
const biografiaPerfil = document.getElementById('biografiaPerfil');

// Elementos de Preferências Visuais
const temaSelect = document.getElementById('temaSelect');
const fonteRange = document.getElementById('fonteRange');
const valorFonte = document.getElementById('valorFonte');
const mostrarBioCheckbox = document.getElementById('mostrarBio');

// Elementos de Contato
const emailInput = document.getElementById('emailInput');
const telefoneInput = document.getElementById('telefoneInput');
const btnAtualizarContato = document.getElementById('btnAtualizarContato');
const emailExibido = document.getElementById('emailExibido');
const telefoneExibido = document.getElementById('telefoneExibido');

// Elementos de Estatísticas
const contadorAcoes = document.getElementById('contadorAcoes');
const ultimaAcao = document.getElementById('ultimaAcao');

// Botões de Ações
const btnAlterarNome = document.getElementById('btnAlterarNome');
const btnAlterarCurso = document.getElementById('btnAlterarCurso');
const btnAlterarFoto = document.getElementById('btnAlterarFoto');
const btnDestacarPerfil = document.getElementById('btnDestacarPerfil');
const btnRestaurar = document.getElementById('btnRestaurar');

// Estado Original para Restauração (Valores Iniciais)
const estadoOriginal = {
    nome: "João Silva",
    curso: "Curso: Técnico em Informática",
    foto: "imagens/perfil1.jpg",
    tema: "claro",
    fonte: "16",
    bioVisivel: true
};

// Contador global de interações
let totalAcoes = 0;

// ==========================================================================
// Funções Auxiliares (Boas Práticas e Organização)
// ==========================================================================

/**
 * Atualiza o painel de estatísticas a cada interação do usuário.
 * @param {string} nomeAcao - Descrição da ação que acabou de ocorrer.
 */
function registrarAcao(nomeAcao) {
    totalAcoes++;
    contadorAcoes.textContent = totalAcoes;
    ultimaAcao.textContent = nomeAcao;
}

// ==========================================================================
// Implementação das Funcionalidades (Eventos)
// ==========================================================================

// Funcionalidade 1 - Alterar Nome
btnAlterarNome.addEventListener('click', () => {
    nomePerfil.textContent = "Maria Oliveira";
    registrarAcao("Alteração de nome");
});

// Funcionalidade 2 - Alterar Curso
btnAlterarCurso.addEventListener('click', () => {
    cursoPerfil.textContent = "Curso: Análise e Desenvolvimento de Sistemas";
    registrarAcao("Alteração de curso");
});

// Funcionalidade 3 - Alterar Foto
btnAlterarFoto.addEventListener('click', () => {
    // Alterna dinamicamente para uma foto auxiliar da pasta de imagens
    fotoPerfil.src = "imagens/perfil2.jpg"; 
    registrarAcao("Alteração de foto");
});

// Funcionalidade 4 - Destacar Perfil
btnDestacarPerfil.addEventListener('click', () => {
    perfilCard.classList.add('destacado');
    registrarAcao("Destaque de perfil aplicado");
});

// Funcionalidade 5 - Restaurar Perfil
btnRestaurar.addEventListener('click', () => {
    // Restaura dados de texto e imagem
    nomePerfil.textContent = estadoOriginal.nome;
    cursoPerfil.textContent = estadoOriginal.curso;
    fotoPerfil.src = estadoOriginal.foto;
    
    // Remove os destaques visuais aplicados por classe CSS
    perfilCard.classList.remove('destacado');
    
    // Reseta o tema e o formulário de preferências para o padrão
    document.body.className = '';
    temaSelect.value = estadoOriginal.tema;
    
    fonteRange.value = estadoOriginal.fonte;
    valorFonte.textContent = `${estadoOriginal.fonte}px`;
    biografiaPerfil.style.fontSize = `${estadoOriginal.fonte}px`;
    
    mostrarBioCheckbox.checked = estadoOriginal.bioVisivel;
    biografiaPerfil.style.display = 'block';

    // Limpa também os dados inseridos nos inputs e resumos de contato
    emailInput.value = '';
    telefoneInput.value = '';
    emailExibido.textContent = "E-mail: não informado";
    telefoneExibido.textContent = "Telefone: não informado";

    registrarAcao("Restauração do perfil");
});

// Funcionalidade 6 - Alterar Tema da Página
temaSelect.addEventListener('change', (e) => {
    const temaSelecionado = e.target.value;
    
    // Limpa classes anteriores do body
    document.body.className = '';
    
    // Aplica a nova classe se não for o tema padrão 'claro'
    if (temaSelecionado !== 'claro') {
        document.body.classList.add(temaSelecionado);
    }
    
    registrarAcao(`Mudança de tema para: ${temaSelecionado}`);
});

// Funcionalidade 7 - Controle de Tamanho da Fonte
fonteRange.addEventListener('input', (e) => {
    const tamanho = e.target.value;
    valorFonte.textContent = `${tamanho}px`;
    biografiaPerfil.style.fontSize = `${tamanho}px`;
    registrarAcao("Ajuste de tamanho da fonte");
});

// Funcionalidade 8 - Exibir ou Ocultar Biografia
mostrarBioCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        biografiaPerfil.style.display = 'block';
        registrarAcao("Biografia exibida");
    } else {
        biografiaPerfil.style.display = 'none';
        registrarAcao("Biografia ocultada");
    }
});

// Funcionalidade 9 - Atualizar Informações de Contato
btnAtualizarContato.addEventListener('click', () => {
    const emailVal = emailInput.value.trim();
    const telefoneVal = telefoneInput.value.trim();
    
    emailExibido.textContent = `E-mail: ${emailVal || "não informado"}`;
    telefoneExibido.textContent = `Telefone: ${telefoneVal || "não informado"}`;
    
    registrarAcao("Atualização de contato");
});
