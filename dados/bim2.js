/* ==================== BIMESTRE 2 — WINDOWS & ARQUIVOS ==================== */
const DADOS_BIM2 = {
  numero: 2, nome: '2º Bimestre', titulo: 'Windows & Arquivos', emoji: '🗂️', cor: '#4CAF50',
  aulas: [
    /* ---------- AULA 1 ---------- */
    { numero: 1, titulo: 'Área de Trabalho e Ícones', emoji: '🖥️', dif: 1,
      explicacao: [
        { emoji: '🗔', subtitulo: 'O que é a Área de Trabalho?', img: 'img/b2-area-trabalho.jpeg',
          texto: 'É a tela principal do Windows, o ponto de partida para tudo que fazemos no computador. Nela ficam os ÍCONES — pequenas figuras que representam programas e arquivos.' },
        { emoji: '🚀', subtitulo: 'Botão Iniciar',
          texto: 'Dá acesso a TODOS os programas instalados no seu computador. É por ele que abrimos a Calculadora, o Paint e muito mais.' },
        { emoji: '🗑️', subtitulo: 'Lixeira',
          texto: 'É onde ficam guardados os arquivos que você excluiu. Se apagar algo por engano, pode recuperar ali! Para apagar DEFINITIVAMENTE, clique no arquivo e tecle DELETE.' },
        { emoji: '📊', subtitulo: 'Barra de Tarefas', img: 'img/b2-barra-tarefas.jpeg',
          texto: 'Fica embaixo da tela e mostra os programas abertos. Do lado direito fica a Área de Notificações, com relógio, calendário e ícones de status.' },
        { emoji: '💻', subtitulo: 'Ícone "Meu Computador"',
          texto: 'Permite a visualização de todas as unidades de disco do seu computador (HD, pendrives, CDs...) e os arquivos que existem em cada uma delas.' },
        { emoji: '🖱️', subtitulo: 'Tipos de clique',
          texto: 'Clique simples (botão esquerdo) seleciona um item. Duplo clique abre o item. Clique com o botão direito mostra um menu de opções extras.' },
        { emoji: '🔗', subtitulo: 'Ícones de Atalho',
          texto: 'São ícones que dão acesso rápido a um programa ou arquivo sem precisar procurar onde ele está guardado. Para criar: clique com o botão direito no item → Criar atalho.' },
        { emoji: '🔤', subtitulo: 'Organizando os ícones',
          texto: 'Clique com o botão direito em um espaço vazio da área de trabalho → Organizar ícones, e escolha: por Nome, Tamanho, Tipo ou Data de Modificação.' },
      ],
      quiz: { perguntas: [
        {p:'Qual é a tela principal do Windows, o "ponto de partida" de tudo?', o:['A Lixeira','A Área de Trabalho','A Calculadora','O Paint'], c:1},
        {p:'Onde ficam guardados os arquivos que você excluiu (e pode recuperar)?', o:['No Botão Iniciar','Na Barra de Tarefas','Na Lixeira','No Zoom'], c:2},
        {p:'Qual botão dá acesso a TODOS os programas instalados?', o:['Botão Iniciar','Botão Salvar','Botão Fechar','Botão Zoom'], c:0},
        {p:'O que fica na Área de Notificações (lado direito da barra de tarefas)?', o:['Só jogos','Relógio, calendário e ícones de status','Apenas fotos','A Lixeira'], c:1},
        {p:'Qual ícone permite ver todas as unidades de disco do computador?', o:['Lixeira','Meu Computador','Calculadora','Bloco de Notas'], c:1},
        {p:'Para que serve um ícone de Atalho?', o:['Para excluir um arquivo','Para dar acesso rápido a um programa ou arquivo','Para desligar o computador','Para imprimir documentos'], c:1},
        {p:'Você pode organizar os ícones da área de trabalho por:', o:['Nome, Tamanho, Tipo ou Data','Apenas por cor','Só é possível organizar por nome','Não é possível organizar ícones'], c:0},
      ]}},

    /* ---------- AULA 2 ---------- */
    { numero: 2, titulo: 'Trabalhando com Janelas', emoji: '🪟', dif: 2,
      explicacao: [
        { emoji: '🪟', subtitulo: 'O que é uma Janela?', img: 'img/b2-janela.png',
          texto: 'É qualquer tela que se abre no Windows para mostrar um programa, arquivo ou pasta. Toda janela tem uma Barra de Título com o nome do que está aberto.' },
        { emoji: '🔽', subtitulo: 'Minimizar, Maximizar e Fechar',
          texto: 'Minimizar esconde a janela (ela continua aberta na barra de tarefas). Maximizar faz ela ocupar a tela inteira. Fechar encerra o programa.' },
        { emoji: '↔️', subtitulo: 'Movendo e Redimensionando',
          texto: 'Para mover uma janela, arraste pela Barra de Título. Para mudar o tamanho, arraste pela borda ou canto — mas não é possível redimensionar uma janela maximizada!' },
        { emoji: '⌨️', subtitulo: 'Atalho ALT + TAB',
          texto: 'Quando você tem várias janelas abertas, pode alternar rapidamente entre elas segurando ALT e apertando TAB.' },
      ],
      quiz: { perguntas: [
        {p:'O que acontece quando você clica em "Minimizar" uma janela?', o:['Ela fecha para sempre','Ela é escondida, mas continua aberta na barra de tarefas','Ela ocupa a tela toda','Ela é apagada'], c:1},
        {p:'Por onde você arrasta o mouse para MOVER uma janela de lugar?', o:['Pela Barra de Título','Pelo botão Fechar','Pelo canto inferior','Pela Lixeira'], c:0},
        {p:'Qual atalho de teclado permite alternar rapidamente entre janelas abertas?', o:['CTRL + C','ALT + TAB','SHIFT + Z','ALT + F4'], c:1},
        {p:'É possível redimensionar (mudar o tamanho) de uma janela que está MAXIMIZADA?', o:['Sim, sempre','Não, é preciso restaurar o tamanho primeiro','Só usando o mouse','Só com o teclado'], c:1},
      ]}},

    /* ---------- AULA 3 (LIGAR) ---------- */
    { numero: 3, titulo: 'Acessórios do Windows', emoji: '🧰', dif: 1, tipo: 'ligar',
      explicacao: [
        { emoji: '🧮', subtitulo: 'Calculadora', img: 'img/b2-calculadora.png',
          texto: 'Vem em dois formatos: Padrão e Científica. Serve para fazer contas rapidamente sem precisar de papel.' },
        { emoji: '📝', subtitulo: 'Bloco de Notas', img: 'img/b2-bloco-notas.png',
          texto: 'Um editor de textos bem simples, sem opções de formatação. Ótimo para anotações rápidas.' },
        { emoji: '📄', subtitulo: 'WordPad', img: 'img/b2-wordpad.png',
          texto: 'Um editor de textos um pouco mais completo que o Bloco de Notas, com alguns recursos de formatação.' },
        { emoji: '🎨', subtitulo: 'Paint', img: 'img/b2-paint.png',
          texto: 'Um editor de imagens simples: dá para colorir, criar formas, desenhar e mexer em fotos.' },
        { emoji: '⌨️', subtitulo: 'Teclado Virtual', img: 'img/b2-teclado-virtual.png',
          texto: 'Mostra um teclado na tela do computador, útil quando o teclado físico não está disponível.' },
      ],
      dados: { pares: [
        {e:'Calculadora', d:'Fazer contas e cálculos'},
        {e:'Bloco de Notas', d:'Editor de texto bem simples'},
        {e:'WordPad', d:'Editor de texto com formatação básica'},
        {e:'Paint', d:'Desenhar e editar imagens'},
        {e:'Teclado Virtual', d:'Teclado exibido na tela'},
      ]}},

    /* ---------- AULA 4 ---------- */
    { numero: 4, titulo: 'Arquivos e Extensões', emoji: '📄', dif: 2,
      explicacao: [
        { emoji: '📁', subtitulo: 'O que é um Arquivo?', img: 'img/b2-arquivos-pastas.png',
          texto: 'É um item que guarda informações: texto, imagens, música... No computador, cada arquivo é representado por um ícone.' },
        { emoji: '🏷️', subtitulo: 'Extensão (tipo) de arquivo',
          texto: 'É o "sobrenome" do arquivo, depois do ponto, que diz que tipo de arquivo é. Exemplos: DOCX (Word), PPTX (PowerPoint), XLSX (Excel), JPG (imagem), EXE (programa), WMV (vídeo), HTM/HTML (páginas de internet).' },
        { emoji: '📂', subtitulo: 'O que é uma Pasta?', img: 'img/b2-pasta.png',
          texto: 'É um "contêiner" para guardar e organizar arquivos — como uma gaveta! Uma pasta dentro de outra pasta se chama SUBPASTA.' },
        { emoji: '🖼️', subtitulo: 'Modos de exibição de uma pasta',
          texto: 'Dentro de uma pasta, você pode mudar como os arquivos aparecem: ícones grandes, lista, detalhes... Basta clicar no botão "Modos de Exibição" e escolher o formato desejado.' },
      ],
      quiz: { perguntas: [
        {p:'Qual extensão de arquivo pertence ao Microsoft Word?', o:['XLSX','PPTX','DOCX','JPG'], c:2},
        {p:'O que é a "extensão" de um arquivo?', o:['O tamanho do arquivo','O nome da pessoa que criou','O que diz o tipo do arquivo (depois do ponto)','A cor do ícone'], c:2},
        {p:'Como se chama uma pasta que fica DENTRO de outra pasta?', o:['Superpasta','Subpasta','Extrapasta','Micropasta'], c:1},
        {p:'Qual extensão representa um arquivo de vídeo?', o:['DOCX','JPG','WMV','XLSX'], c:2},
        {p:'O botão "Modos de Exibição" dentro de uma pasta serve para:', o:['Excluir arquivos','Mudar como os arquivos aparecem (ícones, lista, detalhes)','Criar uma nova pasta','Renomear arquivos'], c:1},
      ]}},

    /* ---------- AULA 5 ---------- */
    { numero: 5, titulo: 'Criar, Copiar e Mover', emoji: '✂️', dif: 2,
      explicacao: [
        { emoji: '➕', subtitulo: 'Criando uma nova pasta', img: 'img/b2-nova-pasta.png',
          texto: 'Clique com o botão direito em um espaço vazio → Novo → Pasta. Depois é só digitar o nome desejado!' },
        { emoji: '📋', subtitulo: 'Copiar e Colar',
          texto: 'Copiar mantém o arquivo original no lugar e cria uma cópia em outro local. Use o botão direito → Copiar, depois → Colar no destino.' },
        { emoji: '✂️', subtitulo: 'Recortar (Mover)',
          texto: 'Recortar RETIRA o arquivo do lugar original e o coloca em outro local. Diferente de copiar, ele não fica duplicado — só muda de lugar!' },
        { emoji: '🖱️', subtitulo: 'Selecionando vários arquivos de uma vez',
          texto: 'Para selecionar arquivos SEGUIDOS: clique no primeiro, segure SHIFT e clique no último. Para selecionar arquivos SEPARADOS: segure CTRL e clique em cada um. Para selecionar TODOS de uma vez: aperte CTRL + A.' },
      ],
      quiz: { perguntas: [
        {p:'Qual é a diferença entre COPIAR e RECORTAR um arquivo?', o:['Não há diferença','Copiar mantém o original; recortar move o arquivo','Recortar apaga o arquivo','Copiar só funciona com pastas'], c:1},
        {p:'Para criar uma nova pasta, clicamos com o botão direito e escolhemos:', o:['Excluir','Novo → Pasta','Renomear','Propriedades'], c:1},
        {p:'Se você COPIAR um arquivo e colar em outro lugar, o que acontece com o original?', o:['Ele é apagado','Ele continua no lugar de origem','Ele fica invisível','Ele vira uma pasta'], c:1},
        {p:'Qual tecla você segura para selecionar arquivos SEGUIDOS, clicando no primeiro e no último?', o:['ALT','SHIFT','TAB','ESC'], c:1},
        {p:'Qual atalho seleciona TODOS os arquivos de uma pasta de uma vez?', o:['CTRL + A','CTRL + C','CTRL + Z','CTRL + S'], c:0},
      ]}},

    /* ---------- AULA 6 ---------- */
    { numero: 6, titulo: 'Excluindo Arquivos e a Lixeira', emoji: '🗑️', dif: 1,
      explicacao: [
        { emoji: '🗑️', subtitulo: 'Excluindo um arquivo',
          texto: 'Selecione o arquivo, clique com o botão direito e escolha "Excluir". Ele vai para a Lixeira, e não é apagado de vez ainda!' },
        { emoji: '♻️', subtitulo: 'Restaurando arquivos',
          texto: 'Abra a Lixeira, clique no arquivo com o botão direito e escolha "Restaurar" — ele volta para o lugar de onde saiu!' },
        { emoji: '❌', subtitulo: 'Excluindo para sempre',
          texto: 'Para apagar em definitivo, clique no arquivo dentro da Lixeira e tecle DELETE, ou clique em "Esvaziar Lixeira" para remover tudo de uma vez.' },
      ],
      quiz: { perguntas: [
        {p:'Quando você exclui um arquivo normalmente, para onde ele vai primeiro?', o:['Ele some para sempre','Para a Lixeira','Para a Barra de Tarefas','Para o Bloco de Notas'], c:1},
        {p:'Como você recupera um arquivo que está na Lixeira?', o:['Não é possível recuperar','Clicando com o botão direito e escolhendo Restaurar','Reiniciando o computador','Criando uma nova pasta'], c:1},
        {p:'O que a opção "Esvaziar Lixeira" faz?', o:['Restaura todos os arquivos','Apaga todos os arquivos definitivamente','Cria uma nova lixeira','Move os arquivos para a área de trabalho'], c:1},
      ]}},

    /* ---------- AULA 7 ---------- */
    { numero: 7, titulo: 'Cuidados, Desligar e Personalizar', emoji: '🖱️', dif: 2,
      explicacao: [
        { emoji: '🖱️', subtitulo: 'Cuidados com o mouse',
          texto: 'Não devemos balançar o mouse, bater com ele na mesa, forçar os botões ou o fio, nem usá-lo com o computador desligado. O ideal é sempre usar um mouse pad!' },
        { emoji: '🔌', subtitulo: 'Como desligar corretamente', img: 'img/b2-desligar.jpeg',
          texto: 'Nunca desligue direto na tomada! O certo é: clique no botão Iniciar → Desligar o computador. Desligar errado pode corromper arquivos e danificar o sistema.' },
        { emoji: '🖼️', subtitulo: 'Plano de Fundo e Aparência',
          texto: 'Para mudar o papel de parede: clique com o botão direito na área de trabalho → Propriedades → Plano de Fundo. Para mudar cores e estilo: → Propriedades → Aparência.' },
        { emoji: '🕐', subtitulo: 'Data, Hora e Proteção de Tela',
          texto: 'Para ajustar data e hora: Botão Iniciar → Painel de Controle → Data e Hora. A Proteção de Tela protege o monitor quando o computador fica muito tempo sem uso.' },
      ],
      quiz: { perguntas: [
        {p:'Qual é a forma CORRETA de desligar o computador?', o:['Puxando o cabo da tomada','Botão Iniciar → Desligar o computador','Batendo no gabinete','Segurando o mouse'], c:1},
        {p:'O que NÃO devemos fazer com o mouse?', o:['Usar sobre o mouse pad','Balançar e bater com ele na mesa','Clicar com cuidado','Usá-lo com o PC ligado'], c:1},
        {p:'Para mudar o papel de parede (Plano de Fundo), clicamos com o botão direito na área de trabalho e escolhemos:', o:['Propriedades → Plano de Fundo','Excluir','Novo → Pasta','Renomear'], c:0},
        {p:'Para que serve a Proteção de Tela do Windows?', o:['Para deixar o PC mais rápido','Para proteger o monitor quando o PC fica muito tempo sem uso','Para aumentar o brilho','Para abrir programas sozinho'], c:1},
        {p:'Onde alteramos a Data e a Hora do computador?', o:['Na Lixeira','No Painel de Controle','No Paint','Na Calculadora'], c:1},
      ]}},

    /* ---------- AULA 8: REVISÃO ---------- */
    { numero: 8, titulo: 'Revisão do 2º Bimestre', emoji: '🏆', dif: 3, revisao: true,
      quiz: { perguntas: [
        {p:'Qual é a tela principal do Windows, o ponto de partida de tudo?', o:['A Área de Trabalho','A Lixeira','O Paint','A Calculadora'], c:0},
        {p:'Onde ficam guardados os arquivos excluídos (e podem ser recuperados)?', o:['No Botão Iniciar','Na Lixeira','No Bloco de Notas','Na Barra de Título'], c:1},
        {p:'Qual ícone permite ver todas as unidades de disco do computador?', o:['Meu Computador','Lixeira','Bloco de Notas','Calculadora'], c:0},
        {p:'Qual acessório do Windows serve para desenhar e editar imagens?', o:['Bloco de Notas','Calculadora','Paint','WordPad'], c:2},
        {p:'A extensão DOCX pertence a qual programa?', o:['PowerPoint','Word','Excel','Paint'], c:1},
        {p:'Uma pasta dentro de outra pasta é chamada de:', o:['Superpasta','Subpasta','Micropasta','Extrapasta'], c:1},
        {p:'Qual é a forma CORRETA de desligar o computador?', o:['Direto na tomada','Botão Iniciar → Desligar','Batendo no gabinete','Puxando o cabo do monitor'], c:1},
        {p:'Para mudar o papel de parede do Windows, vamos em:', o:['Propriedades → Plano de Fundo','Lixeira → Restaurar','Paint → Salvar','Calculadora → Opções'], c:0},
        {p:'Para que serve a Proteção de Tela?', o:['Proteger o monitor quando o PC fica parado','Imprimir documentos','Fazer cálculos','Criar pastas'], c:0},
        {p:'O que a opção "Esvaziar Lixeira" faz com os arquivos?', o:['Restaura todos','Apaga definitivamente','Copia para outra pasta','Nada acontece'], c:1},
        {p:'Você quer ver o que dá pra fazer duplo clique num ícone. O que acontece?', o:['O item é excluído','O item é aberto/executado','O item é copiado para a lixeira','Nada acontece'], c:1},
        {p:'Qual destas extensões NÃO é de um programa do pacote Office?', o:['DOCX','PPTX','XLSX','JPG'], c:3},
        {p:'Se você quer que um arquivo SAIA do lugar original e vá para outro, sem deixar cópia, deve usar:', o:['Copiar e Colar','Recortar e Colar','Excluir','Renomear'], c:1},
        {p:'Qual atalho de teclado seleciona TODOS os arquivos de uma pasta de uma vez?', o:['CTRL + A','CTRL + Z','CTRL + P','CTRL + N'], c:0},
        {p:'Para que serve um ícone de Atalho na área de trabalho?', o:['Acesso rápido a um programa ou arquivo','Guardar arquivos excluídos','Fazer contas','Imprimir textos'], c:0},
        {p:'Qual extensão representa uma página de internet?', o:['DOCX','HTM/HTML','XLSX','EXE'], c:1},
      ]}},
  ]
};
