/* ==================== BIMESTRE 3 — MICROSOFT POWERPOINT ==================== */
const DADOS_BIM3 = {
  numero: 3, nome: '3º Bimestre', titulo: 'Microsoft PowerPoint', emoji: '📊', cor: '#FF6D00',
  aulas: [
    /* ---------- AULA 1 ---------- */
    { numero: 1, titulo: 'O que é o PowerPoint?', emoji: '🎬', dif: 1,
      explicacao: [
        { emoji: '📽️', subtitulo: 'Para que serve o PowerPoint?', img: 'img/b3-apresentar-pc.jpeg',
          texto: 'É um programa para criar apresentações com SLIDES, cheias de texto, imagens e efeitos! Serve para trabalhos escolares, aulas, álbuns de fotos e muito mais.' },
        { emoji: '📺', subtitulo: 'Formas de apresentar', img: 'img/b3-datashow.jpeg',
          texto: 'Uma apresentação pode ser exibida de várias formas: direto no computador, em um Tablet/Smartphone, ou através de um Datashow — um aparelho que projeta os slides em uma tela grande.' },
        { emoji: '💡', subtitulo: 'Dicas para uma boa apresentação',
          texto: 'Pesquise bem o assunto, use poucos textos (prefira tópicos!), tenha começo-meio-fim, escolha cores que chamem atenção e insira figuras e gráficos.' },
      ],
      quiz: { perguntas: [
        {p:'Para que serve o Microsoft PowerPoint?', o:['Para fazer cálculos','Para criar apresentações com slides','Para desenhar imagens','Para navegar na internet'], c:1},
        {p:'Qual aparelho projeta a apresentação de slides em uma tela grande?', o:['Modem','Datashow','Scanner','Estabilizador'], c:1},
        {p:'Segundo as dicas de apresentação, o que é melhor usar nos slides?', o:['Textos longos e sem imagens','Poucos textos, com tópicos e figuras','Apenas uma cor de fundo','Nenhuma imagem'], c:1},
      ]}},

    /* ---------- AULA 2 ---------- */
    { numero: 2, titulo: 'Elementos da Tela', emoji: '🖼️', dif: 2,
      explicacao: [
        { emoji: '📁', subtitulo: 'Guia Arquivo', img: 'img/b3-guia-arquivo.png',
          texto: 'É a principal guia do programa, no canto superior esquerdo. Nela estão os comandos: Novo, Abrir, Salvar, Salvar Como e Imprimir.' },
        { emoji: '🏷️', subtitulo: 'Barra de Título', img: 'img/b3-barra-titulo.png',
          texto: 'Mostra o nome do programa e o nome da apresentação que está aberta.' },
        { emoji: '🎀', subtitulo: 'Faixa de Opções', img: 'img/b3-faixa-opcoes.png',
          texto: 'É onde ficam TODOS os comandos, organizados em guias (Página Inicial, Inserir, Design...) e agrupados por tipo de tarefa.' },
        { emoji: '🔍', subtitulo: 'Zoom',
          texto: 'Para aproximar ou afastar a visualização do slide, use a Guia Exibição → botão Zoom, e escolha a porcentagem desejada (por exemplo, 200%).' },
      ],
      quiz: { perguntas: [
        {p:'Qual guia contém os comandos Novo, Abrir, Salvar e Imprimir?', o:['Guia Design','Guia Arquivo','Guia Inserir','Guia Revisão'], c:1},
        {p:'O que a Barra de Título exibe?', o:['O relógio do sistema','O nome do programa e da apresentação','Os slides em miniatura','A cor de fundo'], c:1},
        {p:'Onde ficam TODOS os comandos do PowerPoint, organizados por guias?', o:['Na Lixeira','Na Faixa de Opções','No Zoom','Na Barra de Status'], c:1},
        {p:'Em qual guia alteramos o Zoom da apresentação?', o:['Guia Arquivo','Guia Exibição','Guia Design','Guia Revisão'], c:1},
      ]}},

    /* ---------- AULA 3 ---------- */
    { numero: 3, titulo: 'Formatando Textos', emoji: '🔤', dif: 2,
      explicacao: [
        { emoji: '✏️', subtitulo: 'Estilos de texto', img: 'img/b3-botoes-fonte.png',
          texto: 'Negrito deixa o texto mais forte; Itálico deixa a letra "deitada"; Sublinhado coloca uma linha embaixo; Tachado risca o texto no meio (ex: CANCELADO).' },
        { emoji: '🔠', subtitulo: 'Maiúsculas e Minúsculas',
          texto: 'O botão "MAIÚSCULAS/minúsculas" transforma o texto selecionado em TUDO MAIÚSCULO, tudo minúsculo, ou deixa Cada Palavra Com A Primeira Letra Maiúscula.' },
        { emoji: '🔢', subtitulo: 'Subscrito e Sobrescrito',
          texto: 'Subscrito escreve pequeno embaixo da linha (H₂O). Sobrescrito escreve pequeno acima da linha (M³, 1ª).' },
      ],
      quiz: { perguntas: [
        {p:'Qual estilo de texto deixa a letra levemente "deitada"?', o:['Negrito','Itálico','Sublinhado','Tachado'], c:1},
        {p:'O que o efeito Tachado faz ao texto?', o:['Deixa em negrito','Risca uma linha no meio do texto','Sublinha o texto','Aumenta a fonte'], c:1},
        {p:'Em "H₂O", o número 2 pequeno embaixo é um exemplo de:', o:['Sobrescrito','Negrito','Subscrito','Itálico'], c:2},
        {p:'Em "M³", o número 3 pequeno em cima é um exemplo de:', o:['Subscrito','Sobrescrito','Sublinhado','Tachado'], c:1},
      ]}},

    /* ---------- AULA 4 (LIGAR) ---------- */
    { numero: 4, titulo: 'Slides: Layout e Organização', emoji: '🗂️', dif: 2, tipo: 'ligar',
      explicacao: [
        { emoji: '🆕', subtitulo: 'Novo Slide', img: 'img/b3-layout.png',
          texto: 'Para inserir um novo slide, vá na guia Página Inicial e clique em "Novo Slide", depois escolha o layout desejado.' },
        { emoji: '🎯', subtitulo: 'Marcadores e Alinhamento',
          texto: 'Marcadores enumeram itens da sua apresentação. O alinhamento organiza o texto: à esquerda, à direita, centralizado ou justificado.' },
        { emoji: '👁️', subtitulo: 'Modos de Exibição', img: 'img/b3-modos-exibicao.png',
          texto: 'Normal (edição completa), Classificação de Slides (organizar a ordem), Leitura (como um livro) e Apresentação de Slides (tela cheia, para o público).' },
      ],
      dados: { pares: [
        {e:'Layout', d:'A estrutura/mapa de um slide'},
        {e:'Marcadores', d:'Enumeram itens da apresentação'},
        {e:'Modo Normal', d:'Edição completa do slide'},
        {e:'Modo Classificação de Slides', d:'Organizar a ordem dos slides'},
        {e:'Modo Apresentação de Slides', d:'Tela cheia, para mostrar ao público'},
        {e:'Alinhamento Justificado', d:'Texto alinhado nas duas margens'},
      ]}},

    /* ---------- AULA 5 ---------- */
    { numero: 5, titulo: 'Imagens, Formas e WordArt', emoji: '🎨', dif: 2,
      explicacao: [
        { emoji: '🖼️', subtitulo: 'Clip-art e Imagens', img: 'img/b3-inserir-imagem.png',
          texto: 'Clip-arts são figuras prontas disponíveis no PowerPoint para decorar. Também é possível inserir suas próprias imagens pela guia Inserir.' },
        { emoji: '🔤', subtitulo: 'WordArt',
          texto: 'São textos com efeitos artísticos especiais, ótimos para dar destaque a títulos e chamar atenção.' },
        { emoji: '⬛', subtitulo: 'Formas', img: 'img/b3-formas.png',
          texto: 'Linhas, retângulos, círculos e outras formas geométricas podem ser inseridas e personalizadas com cor, contorno e efeitos.' },
        { emoji: '🔄', subtitulo: 'Ordem dos objetos',
          texto: 'Quando há vários elementos sobrepostos, você pode "Trazer para frente" ou "Enviar para trás" um objeto, clicando com o botão direito nele.' },
        { emoji: '🔃', subtitulo: 'Rotacionar imagens',
          texto: 'Selecione a imagem e clique na bolinha verde no topo dela (ou seta giratória) para girá-la. Para mais precisão, clique com o botão direito → Tamanho e Posição → ajuste os graus.' },
        { emoji: '📋', subtitulo: 'Copiar, Recortar, Colar e Duplicar',
          texto: 'Selecione a imagem, forma ou slide e use: CTRL+C (copiar), CTRL+X (recortar), CTRL+V (colar), CTRL+D (duplicar). E se errar algo, CTRL+Z desfaz a última ação!' },
      ],
      quiz: { perguntas: [
        {p:'O que são Clip-arts?', o:['Vídeos do PowerPoint','Figuras prontas para decorar a apresentação','Sons de transição','Tipos de fonte'], c:1},
        {p:'O que é um WordArt?', o:['Uma forma geométrica','Um texto com efeitos artísticos','Uma cor de fundo','Um tipo de gráfico'], c:1},
        {p:'Se dois objetos estão sobrepostos, o que fazemos para colocar um deles na frente?', o:['Excluir o outro objeto','Usar "Trazer para frente"','Mudar de slide','Aumentar o zoom'], c:1},
        {p:'Qual atalho de teclado DUPLICA um objeto selecionado?', o:['CTRL + C','CTRL + D','CTRL + Z','CTRL + X'], c:1},
        {p:'Se você errou algo e quer desfazer a última ação, use:', o:['CTRL + Z','CTRL + V','CTRL + D','CTRL + C'], c:0},
      ]}},

    /* ---------- AULA 6 ---------- */
    { numero: 6, titulo: 'Salvando, Transições e Impressão', emoji: '💾', dif: 2,
      explicacao: [
        { emoji: '💾', subtitulo: 'Salvar e Salvar Como',
          texto: '"Salvar" grava o arquivo ou atualiza o que já existe. "Salvar Como" cria um NOVO arquivo com outro nome, preservando o original.' },
        { emoji: '🔒', subtitulo: 'Criptografar',
          texto: 'É colocar uma senha de segurança na apresentação, para que ninguém sem autorização consiga abrir o arquivo.' },
        { emoji: '🎞️', subtitulo: 'Transição de Slides', img: 'img/b3-impressao.jpeg',
          texto: 'É a forma como um slide troca para o outro. Dá para escolher efeitos, sons e a duração da transição na guia Transições.' },
      ],
      quiz: { perguntas: [
        {p:'Qual é a diferença entre "Salvar" e "Salvar Como"?', o:['São iguais','Salvar Como cria um novo arquivo; Salvar atualiza o mesmo','Salvar Como apaga o arquivo','Salvar só funciona uma vez'], c:1},
        {p:'Para que serve "Criptografar" uma apresentação?', o:['Para deixar mais colorida','Para colocar uma senha de segurança','Para apagar slides','Para mudar a fonte'], c:1},
        {p:'O que é a "Transição de Slides"?', o:['A cor do fundo','A forma como um slide troca para o outro','O tamanho da fonte','O nome do arquivo'], c:1},
      ]}},

    /* ---------- AULA 7: REVISÃO ---------- */
    { numero: 7, titulo: 'Revisão do 3º Bimestre', emoji: '🏆', dif: 3, revisao: true,
      quiz: { perguntas: [
        {p:'Para que serve o Microsoft PowerPoint?', o:['Para criar apresentações com slides','Para editar fotos','Para fazer planilhas','Para navegar na internet'], c:0},
        {p:'Qual aparelho projeta a apresentação em uma tela grande?', o:['Scanner','Datashow','Modem','Nobreak'], c:1},
        {p:'Onde ficam TODOS os comandos do PowerPoint, organizados por guias?', o:['Barra de Status','Faixa de Opções','Lixeira','Zoom'], c:1},
        {p:'Qual estilo deixa a letra "deitada"?', o:['Negrito','Itálico','Sublinhado','Tachado'], c:1},
        {p:'Em "H₂O", o número pequeno embaixo é:', o:['Sobrescrito','Subscrito','Negrito','Itálico'], c:1},
        {p:'Qual modo de exibição mostra os slides em tela cheia para o público?', o:['Normal','Classificação de Slides','Apresentação de Slides','Leitura'], c:2},
        {p:'O que são Clip-arts?', o:['Efeitos de som','Figuras prontas para decorar','Tipos de letra','Cores de fundo'], c:1},
        {p:'O que é WordArt?', o:['Um texto com efeitos artísticos','Uma forma geométrica','Um gráfico','Uma tabela'], c:0},
        {p:'"Salvar Como" serve para:', o:['Atualizar o mesmo arquivo','Criar um novo arquivo, preservando o original','Apagar a apresentação','Fechar o programa'], c:1},
        {p:'A Transição de Slides é:', o:['A forma como um slide troca para o outro','O tamanho da fonte','A cor do texto','O nome do arquivo'], c:0},
        {p:'Qual destas NÃO é uma forma de apresentar um trabalho estudada nesse bimestre?', o:['Datashow','Retroprojetor','Impressora Matricial','Pelo próprio computador'], c:2},
        {p:'Você quer que ninguém abra sua apresentação sem senha. Qual recurso usar?', o:['Criptografar','WordArt','Transição','Zoom'], c:0},
        {p:'Qual guia você usa para aumentar o Zoom da apresentação para 200%?', o:['Guia Exibição','Guia Design','Guia Arquivo','Guia Animações'], c:0},
        {p:'Qual atalho de teclado DUPLICA um objeto (imagem, forma ou slide) selecionado?', o:['CTRL + D','CTRL + Z','CTRL + V','CTRL + S'], c:0},
        {p:'Você girou uma imagem sem querer. Qual atalho desfaz essa última ação?', o:['CTRL + C','CTRL + Z','CTRL + X','CTRL + D'], c:1},
        {p:'Para girar uma imagem selecionada, você clica e arrasta:', o:['A bolinha verde de rotação','O botão Novo Slide','A guia Arquivo','O botão de Impressão'], c:0},
      ]}},
  ]
};
