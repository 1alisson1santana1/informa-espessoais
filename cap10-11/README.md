# Projeto Recriação Responsiva

## Autor
Alisson Witor da Silva Santana 

## Site Escolhido
Spotify

## Link do Site Original
https://www.spotify.com

## Objetivo Visual do Projeto
O objetivo deste projeto foi aplicar os conceitos modernos de Web Design Responsivo criando uma reinterpretação autoral baseada na identidade visual da homepage do Spotify. A interface foca no minimalismo elegante, contrastes marcantes e legibilidade fluida em qualquer tamanho de janela.

## Tecnologias Utilizadas
- HTML5 Semântico
- CSS3 Custom Properties (Variáveis de ambiente)
- Flexbox (Navegação estrutural e Rodapé)
- CSS Grid Layout (Sessão de vantagens/cards)
- Tipografia Fluida através da função `clamp()`
- Media Queries baseadas na estratégia Mobile-First

## Estratégia Responsiva Utilizada
Adotou-se o fluxo de desenvolvimento Mobile-First. Os estilos estruturais globais foram escritos primariamente focando em smartphones de telas reduzidas. À medida que o viewport se expande, regras incrementais de layout entram em vigor via cláusulas `min-width`, garantindo que nenhuma quebra ocorra na transição de dispositivos.

## Breakpoints Implementados
- `768px` (Tablets): Transição do menu de barras para links diretos e duplicação da malha de cards.
- `1024px` (Desktops): Expansão total do grid para 4 colunas horizontais e ampliação do espaçamento vertical da Hero.
- `1440px` (Telas Grandes): Centralização em caixas limitadoras (`max-width`) para evitar estiramento excessivo de conteúdo.

## Principais Adaptações Realizadas
- O menu de navegação em telas menores foi ocultado por completo para simular o comportamento de um menu lateral recolhido simples sem o uso de Javascript.
- Substituição do carrossel/slider original da plataforma por um sistema limpo de Grid nativo, otimizando o carregamento e a consistência visual em telas de toque.

## Principais Dificuldades
Ajustar o balanço de contraste entre as cores institucionais e o texto de apoio para que o tema automático escuro (`prefers-color-scheme`) mantivesse a conformidade com as regras modernas de acessibilidade da web (WCAG).
