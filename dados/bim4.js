/* ==================== BIMESTRE 4 — MICROSOFT WORD ==================== */
const DADOS_BIM4 = {
  numero: 4, nome: '4º Bimestre', titulo: 'Microsoft Word', emoji: '📝', cor: '#9C27B0',
  aulas: [
    /* ---------- AULA 1 ---------- */
    { numero: 1, titulo: 'Conhecendo o Word', emoji: '📝', dif: 1,
      explicacao: [
        { emoji: '📖', subtitulo: 'O que é o Word?',
          texto: 'Word significa PALAVRA em inglês! É um programa para criar e editar textos, com recursos de revisão, correção ortográfica e comentários.' },
        { emoji: '🎀', subtitulo: 'Faixa de Opções', img: 'img/b4-faixa-opcoes.png',
          texto: 'É onde estão TODOS os recursos do Word, organizados em guias: Página Inicial, Inserir, Layout, Referências, Revisão...' },
        { emoji: '📁', subtitulo: 'Guia Arquivo', img: 'img/b4-guia-arquivo.png',
          texto: 'A principal guia do programa, no canto superior esquerdo, com os comandos Novo, Abrir, Salvar e Imprimir.' },
        { emoji: '🏷️', subtitulo: 'Barra de Título e Cursor', img: 'img/b4-barra-titulo.png',
          texto: 'A Barra de Título mostra o nome do documento. O Cursor é o ponteiro piscando na tela que indica onde o próximo texto será digitado.' },
      ],
      quiz: { perguntas: [
        {p:'O que a palavra "Word" significa em português?', o:['Texto','Palavra','Documento','Imagem'], c:1},
        {p:'Onde ficam TODOS os recursos do Word, organizados em guias?', o:['Na Lixeira','Na Faixa de Opções','No Zoom','Na Barra de Status'], c:1},
        {p:'O que é o Cursor no Word?', o:['Um tipo de fonte','O ponteiro piscando que indica onde vai digitar','Um botão de salvar','Uma cor de fundo'], c:1},
        {p:'Qual guia tem os comandos Novo, Abrir, Salvar e Imprimir?', o:['Guia Inserir','Guia Layout','Guia Arquivo','Guia Revisão'], c:2},
      ]}},

    /* ---------- AULA 2 ---------- */
    { numero: 2, titulo: 'Salvando Documentos', emoji: '💾', dif: 2,
      explicacao: [
        { emoji: '💾', subtitulo: 'Salvar x Salvar Como',
          texto: '"Salvar" grava o arquivo pela primeira vez ou atualiza as mudanças. "Salvar Como" cria um NOVO arquivo com outro nome, mantendo o original intacto.' },
        { emoji: '📄', subtitulo: 'Salvar como PDF',
          texto: 'Transforma seu texto em um arquivo PDF, que não permite que outras pessoas alterem o conteúdo facilmente.' },
        { emoji: '🔒', subtitulo: 'Criptografar',
          texto: 'Coloca uma senha de segurança no documento, para que ninguém sem autorização consiga abri-lo.' },
        { emoji: '📊', subtitulo: 'Barra de Status', img: 'img/b4-barra-status.png',
          texto: 'Mostra informações sobre a página que está sendo digitada, como o número da página e a quantidade de palavras.' },
        { emoji: '📏', subtitulo: 'Réguas',
          texto: 'Ajudam a alinhar o texto, imagens e outros elementos da página. Para exibir ou ocultar: Guia Exibição → grupo Mostrar → marque/desmarque a opção Régua.' },
        { emoji: '🖨️', subtitulo: 'Imprimir',
          texto: 'Para imprimir o documento digitado, vá até a Guia Arquivo → Imprimir. Lá você escolhe o número de cópias e a impressora.' },
      ],
      quiz: { perguntas: [
        {p:'Qual é a diferença entre "Salvar" e "Salvar Como"?', o:['São iguais','Salvar Como cria um novo arquivo, preservando o original','Salvar Como apaga o documento','Salvar só funciona uma vez'], c:1},
        {p:'Para que serve salvar um documento como PDF?', o:['Para deixar colorido','Para impedir alterações fáceis por outras pessoas','Para apagar o texto','Para aumentar a fonte'], c:1},
        {p:'O que a Barra de Status exibe?', o:['O nome do autor','Informações como número da página e quantidade de palavras','A cor do texto','O tipo de impressora'], c:1},
        {p:'Para exibir ou ocultar as réguas do Word, vamos em:', o:['Guia Exibição → grupo Mostrar → Régua','Guia Arquivo → Imprimir','Guia Inserir → Formas','Guia Design → Temas'], c:0},
        {p:'Para imprimir um documento no Word, vamos em:', o:['Guia Página Inicial → Fonte','Guia Arquivo → Imprimir','Guia Layout → Margens','Guia Revisão → Ortografia'], c:1},
      ]}},

    /* ---------- AULA 3 ---------- */
    { numero: 3, titulo: 'Formatando Fontes', emoji: '🔤', dif: 2,
      explicacao: [
        { emoji: '✏️', subtitulo: 'Negrito, Itálico, Sublinhado e Tachado',
          texto: 'Negrito dá destaque ao texto; Itálico deixa a letra "deitada" (usado em palavras de outro idioma); Sublinhado marca uma linha embaixo; Tachado risca o texto no meio.' },
        { emoji: '🔢', subtitulo: 'Subscrito e Sobrescrito',
          texto: 'Subscrito escreve pequeno embaixo da linha (ex: H₂O). Sobrescrito escreve pequeno acima da linha (ex: 1ª, M³).' },
        { emoji: '↔️', subtitulo: 'Espaçamento entre caracteres', img: 'img/b4-espacamento.png',
          texto: 'Pode deixar as letras mais afastadas (Expandido) ou mais próximas (Condensado) uma da outra.' },
        { emoji: '🔢', subtitulo: 'Contagem de Palavras',
          texto: 'Na guia Revisão, o botão "Contar Palavras" mostra quantas palavras, caracteres e linhas tem o seu texto.' },
      ],
      quiz: { perguntas: [
        {p:'Qual estilo de texto é normalmente usado para escrever palavras de outro idioma?', o:['Negrito','Itálico','Sublinhado','Tachado'], c:1},
        {p:'Em "1ª" e "M³", os números/letras pequenos e ACIMA da linha são exemplos de:', o:['Subscrito','Sobrescrito','Negrito','Tachado'], c:1},
        {p:'Onde encontramos a ferramenta para contar quantas palavras tem o texto?', o:['Guia Revisão','Guia Design','Guia Inserir','Guia Layout'], c:0},
        {p:'O espaçamento "Condensado" entre caracteres faz as letras ficarem:', o:['Mais afastadas','Mais próximas','Maiores','Coloridas'], c:1},
      ]}},

    /* ---------- AULA 4 (LIGAR) ---------- */
    { numero: 4, titulo: 'Alinhamento e Endentação', emoji: '📐', dif: 2, tipo: 'ligar',
      explicacao: [
        { emoji: '📐', subtitulo: 'Os 4 tipos de alinhamento', img: 'img/b4-alinhamento.png',
          texto: 'À Esquerda (padrão): o texto fica na margem esquerda. À Direita: fica na margem direita. Centralizado: fica no meio. Justificado: alinha nas DUAS margens.' },
        { emoji: '⇥', subtitulo: 'Endentação', img: 'img/b4-endentacao.png',
          texto: 'É o espaço antes da primeira linha de um parágrafo. Para aplicar, basta pressionar a tecla TAB do teclado.' },
      ],
      dados: { pares: [
        {e:'À Esquerda', d:'Texto alinhado na margem esquerda (padrão)'},
        {e:'À Direita', d:'Texto alinhado na margem direita'},
        {e:'Centralizado', d:'Texto no meio, entre as duas margens'},
        {e:'Justificado', d:'Texto alinhado nas duas margens'},
        {e:'Endentação', d:'Espaço antes da 1ª linha, feito com a tecla TAB'},
      ]}},

    /* ---------- AULA 5 ---------- */
    { numero: 5, titulo: 'Margens e Página', emoji: '📏', dif: 2,
      explicacao: [
        { emoji: '📏', subtitulo: 'Margens', img: 'img/b4-margens.png',
          texto: 'É o espaço entre a borda da folha e o texto. Você pode alterar o tamanho de cada margem (superior, inferior, esquerda, direita) na guia Layout da Página.' },
        { emoji: '📄', subtitulo: 'Tamanho do Papel', img: 'img/b4-tamanho-papel.png',
          texto: 'O Word usa o tamanho A4 como padrão, mas é possível mudar antes de criar o texto para combinar com o papel que você vai imprimir.' },
        { emoji: '🔄', subtitulo: 'Orientação: Retrato x Paisagem', img: 'img/b4-orientacao.png',
          texto: 'Retrato é a orientação vertical (mais alto que largo) — é o padrão. Paisagem é a orientação horizontal (mais largo que alto).' },
        { emoji: '📖', subtitulo: 'Medianiz',
          texto: 'É a distância entre as margens internas e externas da página. É um espaço extra usado quando o documento será encadernado com espiral, por exemplo.' },
        { emoji: '↕️', subtitulo: 'Espaçamento entre linhas',
          texto: 'Define a distância entre uma linha e outra do texto. O padrão do Word é 1,0 (simples), mas dá para aumentar para 1,5 ou 2,0 (duplo).' },
      ],
      quiz: { perguntas: [
        {p:'O que é a "margem" de uma página no Word?', o:['O tamanho da fonte','O espaço entre a borda da folha e o texto','A cor do papel','O nome do documento'], c:1},
        {p:'Qual é o tamanho de papel padrão do Word?', o:['A3','A4','Carta','Ofício'], c:1},
        {p:'A orientação "Paisagem" deixa a página:', o:['Vertical (mais alta que larga)','Horizontal (mais larga que alta)','Quadrada','Circular'], c:1},
        {p:'A Medianiz é usada principalmente para:', o:['Deixar o texto colorido','Um espaço extra quando o documento será encadernado','Aumentar a fonte','Corrigir a ortografia'], c:1},
        {p:'Qual é o espaçamento entre linhas PADRÃO do Word?', o:['2,0 (duplo)','1,5','1,0 (simples)','3,0'], c:2},
      ]}},

    /* ---------- AULA 6 ---------- */
    { numero: 6, titulo: 'Conhecendo o Teclado', emoji: '⌨️', dif: 2,
      explicacao: [
        { emoji: '🔤', subtitulo: 'Teclado Alfanumérico',
          texto: 'É a área mais utilizada, parecida com uma máquina de escrever: letras, números e sinais de pontuação.' },
        { emoji: '🔢', subtitulo: 'Teclado Numérico',
          texto: 'Fica do lado direito, com as mesmas teclas de uma calculadora — permite digitar números rapidamente (quando o NUM LOCK está ativado).' },
        { emoji: '🎯', subtitulo: 'Área de Direções e Teclas de Função',
          texto: 'A Área de Direções tem as SETAS (cima, baixo, esquerda, direita) para mover o cursor. As Teclas de Função (F1 a F12) ficam acima do teclado alfanumérico e têm funções especiais que mudam de programa para programa.' },
      ],
      quiz: { perguntas: [
        {p:'A área do teclado parecida com uma máquina de escrever, com letras e números, se chama:', o:['Teclado Numérico','Teclado Alfanumérico','Área de Direções','Teclas de Função'], c:1},
        {p:'O Teclado Numérico tem as mesmas teclas de qual aparelho?', o:['Um telefone','Uma calculadora','Um controle remoto','Um rádio'], c:1},
        {p:'As Teclas de Função vão de F1 até:', o:['F8','F10','F12','F15'], c:2},
        {p:'Quais teclas formam a "Área de Direções", usada para mover o cursor?', o:['CTRL, ALT, SHIFT, TAB','As setas (cima, baixo, esquerda, direita)','F1 a F12','ENTER e ESC'], c:1},
      ]}},

    /* ---------- AULA 7 ---------- */
    { numero: 7, titulo: 'Teclas Especiais', emoji: '⌨️', dif: 2,
      explicacao: [
        { emoji: '⏎', subtitulo: 'Enter',
          texto: 'Confirma um comando, um resultado ou uma resposta. Também é usada para mover o cursor para a linha seguinte (novo parágrafo).' },
        { emoji: '⇧', subtitulo: 'Shift e Caps Lock',
          texto: 'SHIFT, quando segurado, digita letras maiúsculas ou o símbolo de cima da tecla. CAPS LOCK trava o teclado em maiúsculas até você apertar de novo.' },
        { emoji: '⌃', subtitulo: 'Ctrl e Alt Gr',
          texto: 'CTRL é usado em comandos (como CTRL+C para copiar). ALT GR substitui a combinação das teclas CTRL e ALT, usada para digitar símbolos especiais como @ e #.' },
        { emoji: '⌫', subtitulo: 'Delete, Insert e Setas',
          texto: 'DELETE apaga o caractere à DIREITA do cursor. INSERT alterna entre inserir e sobrescrever texto. As SETAS movem o cursor pelo texto.' },
        { emoji: '🏠', subtitulo: 'Home, Page Up e Page Down',
          texto: 'HOME leva o cursor para o início da linha. PAGE UP e PAGE DOWN movem a tela para cima e para baixo, uma página de cada vez.' },
      ],
      quiz: { perguntas: [
        {p:'Qual é a função da tecla ENTER?', o:['Apagar o texto','Confirmar um comando e mover para a linha seguinte','Deixar tudo maiúsculo','Copiar o texto'], c:1},
        {p:'Qual tecla TRAVA o teclado em letras maiúsculas até você apertar de novo?', o:['SHIFT','CAPS LOCK','CTRL','TAB'], c:1},
        {p:'A tecla ALT GR substitui a combinação de quais duas teclas?', o:['SHIFT e TAB','CTRL e ALT','ENTER e ESC','HOME e END'], c:1},
        {p:'A tecla DELETE apaga o caractere:', o:['À esquerda do cursor','À direita do cursor','Acima do cursor','Toda a linha'], c:1},
        {p:'Qual tecla leva o cursor para o INÍCIO da linha?', o:['END','HOME','INSERT','DELETE'], c:1},
        {p:'CTRL + C é o comando de teclado para:', o:['Colar','Copiar','Recortar','Desfazer'], c:1},
      ]}},

    /* ---------- AULA 8: REVISÃO ---------- */
    { numero: 8, titulo: 'Revisão do 4º Bimestre', emoji: '🏆', dif: 3, revisao: true,
      quiz: { perguntas: [
        {p:'O que a palavra "Word" significa em português?', o:['Texto','Palavra','Documento','Página'], c:1},
        {p:'Onde ficam TODOS os recursos do Word, organizados em guias?', o:['Faixa de Opções','Lixeira','Área de Notificações','Barra de Rolagem'], c:0},
        {p:'"Salvar Como" serve para:', o:['Apagar o arquivo','Criar um novo arquivo, preservando o original','Fechar o Word','Imprimir o texto'], c:1},
        {p:'Para exibir ou ocultar as réguas, vamos em:', o:['Guia Exibição → Régua','Guia Arquivo → Salvar','Guia Layout → Margens','Guia Inserir → Tabela'], c:0},
        {p:'Qual alinhamento deixa o texto encostado nas DUAS margens?', o:['Centralizado','À Esquerda','Justificado','À Direita'], c:2},
        {p:'A endentação (espaço antes do parágrafo) é aplicada com a tecla:', o:['ENTER','TAB','SHIFT','CTRL'], c:1},
        {p:'Qual é a função da tecla ENTER?', o:['Apagar texto','Confirmar e mover para a linha seguinte','Aumentar a fonte','Abrir a impressora'], c:1},
        {p:'A tecla ALT GR substitui a combinação de quais teclas?', o:['SHIFT e TAB','CTRL e ALT','HOME e END','ENTER e ESC'], c:1},
        {p:'O Teclado Numérico tem as mesmas teclas de qual aparelho?', o:['Um telefone','Uma calculadora','Um rádio','Um controle remoto'], c:1},
        {p:'CTRL + C serve para:', o:['Colar','Recortar','Copiar','Desfazer'], c:2},
        {p:'Você digitou um texto todo errado, em maiúsculas onde não devia. Qual ferramenta corrige isso rapidamente sem reescrever tudo?', o:['Contagem de Palavras','MAIÚSCULAS/minúsculas','Réguas','Margens'], c:1},
        {p:'Qual destas NÃO é uma orientação de página no Word?', o:['Retrato','Paisagem','Diagonal','Nenhuma — só existem Retrato e Paisagem'], c:2},
        {p:'Para imprimir um documento que você acabou de digitar, vamos em:', o:['Guia Arquivo → Imprimir','Guia Página Inicial → Fonte','Guia Inserir → Imagem','Guia Revisão → Ortografia'], c:0},
        {p:'Para que serve a Medianiz na configuração de página?', o:['Colorir o texto','Um espaço extra para encadernação com espiral','Aumentar a fonte','Verificar a ortografia'], c:1},
        {p:'Qual é o espaçamento entre linhas PADRÃO do Word?', o:['2,0 (duplo)','1,5','1,0 (simples)','3,0'], c:2},
        {p:'A área do teclado parecida com uma calculadora, do lado direito, se chama:', o:['Teclado Alfanumérico','Teclado Numérico','Área de Direções','Teclas de Função'], c:1},
      ]}},
  ]
};
