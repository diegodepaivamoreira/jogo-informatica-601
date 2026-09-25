/* ==================== BIMESTRE 1 — CONHECENDO O COMPUTADOR ==================== */
const DADOS_BIM1 = {
  numero: 1, nome: '1º Bimestre', titulo: 'Conhecendo o Computador', emoji: '🖥️', cor: '#2196F3',
  aulas: [
    /* ---------- AULA 1 ---------- */
    { numero: 1, titulo: 'Peopleware, Software e Hardware', emoji: '⚙️', dif: 1,
      explicacao: [
        { emoji: '🧩', subtitulo: 'O que faz o computador funcionar?', img: 'img/b1-componentes-intro.jpeg',
          texto: 'O computador sozinho não faz nada! Ele precisa de 3 elementos trabalhando juntos: PEOPLEWARE (as pessoas que usam), SOFTWARE (os programas) e HARDWARE (as peças físicas que dá pra tocar).' },
        { emoji: '🧑‍💻', subtitulo: 'Peopleware',
          texto: 'É o nome dado às PESSOAS que utilizam o computador — como você! Sem alguém para operar, o computador não sabe o que fazer.' },
        { emoji: '💿', subtitulo: 'Software',
          texto: 'São os PROGRAMAS instalados no computador (Word, jogos, navegador de internet...). É a parte "invisível" — você não consegue tocar, só usar na tela.' },
        { emoji: '🖥️', subtitulo: 'Hardware',
          texto: 'São as PEÇAS FÍSICAS do computador: monitor, teclado, mouse, gabinete... Tudo que você pode tocar com a mão!' },
      ],
      quiz: { perguntas: [
        {p:'Quais são os 3 elementos necessários para o computador funcionar?', o:['Só o Hardware','Peopleware, Software e Hardware','Só o Software','Internet, Wi-Fi e Bluetooth'], c:1},
        {p:'Como se chama a parte do computador que você consegue TOCAR com a mão (monitor, teclado, mouse)?', o:['Software','Peopleware','Hardware','Internet'], c:2},
        {p:'Os PROGRAMAS instalados no computador (como o Word) são chamados de:', o:['Hardware','Software','Peopleware','Gabinete'], c:1},
        {p:'Quem são o "Peopleware" de um computador?', o:['As peças de dentro do gabinete','Os programas instalados','As pessoas que usam o computador','Os cabos de energia'], c:2},
      ]}},

    /* ---------- AULA 2 ---------- */
    { numero: 2, titulo: 'Componentes Internos', emoji: '🔧', dif: 2,
      explicacao: [
        { emoji: '📦', subtitulo: 'Gabinete', img: 'img/b1-gabinete.jpeg',
          texto: 'É a "caixa" do computador. Dentro dele ficam guardadas a placa-mãe, o processador, os cabos, as memórias e o HD — como se fosse o corpo que protege os órgãos internos.' },
        { emoji: '🧠', subtitulo: 'Placa-mãe', img: 'img/b1-placa-mae.jpeg',
          texto: 'É a principal placa do computador! Nela ficam encaixados o processador, as memórias e os slots de expansão — todo mundo se conecta nela.' },
        { emoji: '⚡', subtitulo: 'Processador (CPU)', img: 'img/b1-processador.jpeg',
          texto: 'É o "cérebro" do computador! CPU significa CENTRAL DE PROCESSAMENTO ÚNICO — é o chip que controla todas as operações e faz os cálculos.' },
        { emoji: '💿', subtitulo: 'Drives',
          texto: 'São os locais onde colocamos CDs, DVDs e Blu-Rays para serem lidos pelo computador. Nos computadores antigos também existiam drives de disquete.' },
        { emoji: '🧩', subtitulo: 'Slot',
          texto: 'É qualquer espaço vazio na placa-mãe feito especialmente para encaixar novas placas (como uma placa de vídeo extra), permitindo expandir o computador.' },
        { emoji: '🔌', subtitulo: 'Porta USB e HDMI', img: 'img/b1-porta-usb.jpeg',
          texto: 'A Porta USB é onde ligamos cabos de mouse, teclado e pendrives. A Porta HDMI transmite vídeo E áudio de alta qualidade em um único cabo, ligando o PC à TV ou monitor.' },
      ],
      quiz: { perguntas: [
        {p:'Qual peça é chamada de "cérebro do computador" porque controla todas as operações?', o:['Gabinete','Placa-mãe','Processador (CPU)','Porta USB'], c:2},
        {p:'O que significa a sigla CPU?', o:['Computador Pessoal Universal','Central de Processamento Único','Cabo de Ponte USB','Circuito Primário Único'], c:1},
        {p:'Qual é a "caixa" que protege e guarda as peças internas do computador?', o:['Monitor','Gabinete','Mouse','HDMI'], c:1},
        {p:'Onde colocamos CDs, DVDs e Blu-Rays para serem lidos pelo computador?', o:['Nos Drives','Na Placa-mãe','No Estabilizador','Na Porta HDMI'], c:0},
        {p:'O que é um Slot na placa-mãe?', o:['Um tipo de vírus','Um espaço vazio para encaixar novas placas','Um cabo de energia','Um programa do Windows'], c:1},
        {p:'Para que serve a Porta HDMI?', o:['Só para carregar o celular','Transmitir vídeo e áudio em um único cabo','Imprimir documentos','Ligar o mouse sem fio'], c:1},
      ]}},

    /* ---------- AULA 3 ---------- */
    { numero: 3, titulo: 'Memórias e Armazenamento', emoji: '💾', dif: 2,
      explicacao: [
        { emoji: '⚡', subtitulo: 'Memória RAM x Memória ROM',
          texto: 'RAM é a memória que o computador usa enquanto está ligado — quanto mais RAM, mais rápido ele fica! Mas ela apaga tudo quando desliga. Já a ROM vem de fábrica e guarda informações que nunca se apagam.' },
        { emoji: '💽', subtitulo: 'Memórias secundárias', img: 'img/b1-hd-externo.jpeg',
          texto: 'São onde guardamos nossos arquivos para sempre: HD, CD, DVD, Blu-Ray e memórias Flash (SSD, Pendrive, Cartão de Memória). O HD pode guardar até 30 TB em alguns servidores!' },
        { emoji: '👉', subtitulo: 'Pendrive', img: 'img/b1-pendrive.png',
          texto: 'É um tipo de memória Flash que substituiu os antigos disquetes (que só guardavam 1,44 MB). O pendrive é pequeno, portátil e guarda muito mais informação.' },
        { emoji: '🚀', subtitulo: 'SSD',
          texto: 'É um tipo de memória Flash usada como se fosse um HD — só que muito mais rápida! Por isso, computadores com SSD ligam e abrem programas bem mais depressa.' },
        { emoji: '💿', subtitulo: 'CD-ROM, CD-R e CD-RW',
          texto: 'CD-ROM vem gravado de fábrica e só pode ser LIDO. CD-R permite GRAVAR uma única vez. CD-RW permite gravar, apagar e regravar várias vezes.' },
        { emoji: '🔌', subtitulo: 'BOOT e BIOS',
          texto: 'BOOT é o processo de inicialização do computador — tudo que acontece desde apertar o botão de ligar até o sistema operacional abrir. A BIOS (Sistema Básico de Entrada e Saída) é a primeira coisa que o computador lê nesse processo.' },
        { emoji: '🔢', subtitulo: 'Bits e Bytes',
          texto: 'O computador só entende 0 e 1 — isso é o Sistema Binário! Cada 0 ou 1 é um BIT. Um grupo de 8 bits forma 1 BYTE, que é o espaço para guardar uma letra. 1024 Bytes = 1 KB, 1024 KB = 1 MB, 1024 MB = 1 GB!' },
      ],
      quiz: { perguntas: [
        {p:'Qual memória APAGA todas as informações quando o computador é desligado?', o:['ROM','RAM','HD','Pendrive'], c:1},
        {p:'Quantos bits formam 1 Byte?', o:['2 bits','4 bits','8 bits','16 bits'], c:2},
        {p:'O pendrive substituiu qual mídia antiga de pouca capacidade (1,44 MB)?', o:['O CD','O disquete','O HD','O DVD'], c:1},
        {p:'Qual tipo de CD permite gravar, apagar e regravar várias vezes?', o:['CD-ROM','CD-R','CD-RW','DVD'], c:2},
        {p:'Por que o SSD é considerado melhor que o HD tradicional para o desempenho do PC?', o:['Porque é mais barato','Porque é muito mais rápido','Porque é maior fisicamente','Porque não precisa de energia'], c:1},
        {p:'O que é o BOOT do computador?', o:['Um tipo de vírus','O processo de inicialização do computador','Um programa de desenho','Uma porta de conexão'], c:1},
      ]}},

    /* ---------- AULA 4 (LIGAR) ---------- */
    { numero: 4, titulo: 'Periféricos de Entrada e Saída', emoji: '🖱️', dif: 2, tipo: 'ligar',
      explicacao: [
        { emoji: '📥', subtitulo: 'Periféricos de Entrada', img: 'img/b1-teclado.jpeg',
          texto: 'São os equipamentos que enviam informação PARA o computador: teclado, mouse, microfone e scanner. É por eles que "conversamos" com a máquina.' },
        { emoji: '📤', subtitulo: 'Periféricos de Saída', img: 'img/b1-monitor.jpeg',
          texto: 'São os equipamentos que mostram o resultado DO computador para nós: monitor, impressora e caixa de som.' },
        { emoji: '🔁', subtitulo: 'Periféricos Híbridos (Entrada e Saída)',
          texto: 'Alguns equipamentos fazem as duas coisas ao mesmo tempo! O Modem e telas touch screen enviam E recebem informação.' },
      ],
      dados: { pares: [
        {e:'Teclado / Mouse / Scanner', d:'Periférico de ENTRADA'},
        {e:'Monitor / Impressora / Caixa de Som', d:'Periférico de SAÍDA'},
        {e:'Modem / Tela Touch Screen', d:'Periférico de ENTRADA e SAÍDA'},
        {e:'Impressora Laser', d:'Mais rápida e com melhor qualidade'},
        {e:'Impressora Matricial', d:'Mais barata e menos veloz'},
        {e:'Nobreak', d:'Protege o PC e dá tempo para salvar na falta de luz'},
      ]}},

    /* ---------- AULA 5 ---------- */
    { numero: 5, titulo: 'Tipos de Computador', emoji: '📱', dif: 1,
      explicacao: [
        { emoji: '🖥️', subtitulo: 'Desktop', img: 'img/b1-desktop.png',
          texto: 'É o computador de mesa, formado por gabinete, monitor, teclado e mouse separados. Costuma ter o melhor desempenho entre os tipos de computador.' },
        { emoji: '💻', subtitulo: 'Notebook', img: 'img/b1-notebook.png',
          texto: 'É um computador portátil, que cabe na mochila! Tem teclado, mouse (touchpad) e monitor tudo junto, além de bateria para funcionar longe da tomada.' },
        { emoji: '📱', subtitulo: 'Tablet e Smartphone', img: 'img/b1-tablet.png',
          texto: 'O Tablet tem tela sensível ao toque com teclado virtual. O Smartphone é ainda menor e reúne os recursos de vários equipamentos: câmera, telefone, internet e muito mais!' },
      ],
      quiz: { perguntas: [
        {p:'Qual tipo de computador é portátil, cabe na mochila e tem bateria própria?', o:['Desktop','Notebook','Impressora','Estabilizador'], c:1},
        {p:'O computador de mesa, com gabinete, monitor, teclado e mouse separados, se chama:', o:['Notebook','Tablet','Desktop','Smartphone'], c:2},
        {p:'O que o Tablet usa no lugar de um teclado físico?', o:['Um teclado virtual na tela sensível ao toque','Um mouse gigante','Uma impressora integrada','Um HD externo'], c:0},
      ]}},

    /* ---------- AULA 6 ---------- */
    { numero: 6, titulo: 'Estabilizador e Proteção Elétrica', emoji: '🔌', dif: 2,
      explicacao: [
        { emoji: '🔌', subtitulo: 'Estabilizador', img: 'img/b1-estabilizador.jpeg',
          texto: 'É o equipamento que evita que a oscilação (variação) da energia elétrica chegue até o computador, protegendo as peças internas contra danos.' },
        { emoji: '🔋', subtitulo: 'Nobreak', img: 'img/b1-nobreak.jpeg',
          texto: 'É parecido com o estabilizador, mas além de evitar a oscilação de energia, ele também mantém o computador ligado por um tempo quando falta luz — dando tempo para você salvar seu trabalho!' },
        { emoji: '⚠️', subtitulo: 'Por que isso importa?',
          texto: 'Uma queda ou pico de energia sem proteção pode danificar a placa-mãe, o processador e outras peças caras do computador.' },
      ],
      quiz: { perguntas: [
        {p:'Qual equipamento evita que a oscilação de energia elétrica chegue ao computador?', o:['Estabilizador','Scanner','Modem','Pendrive'], c:0},
        {p:'O que o Nobreak faz ALÉM de evitar oscilação de energia?', o:['Imprime documentos','Mantém o PC ligado por um tempo na falta de luz','Aumenta a memória RAM','Conecta à internet'], c:1},
        {p:'Por que é importante proteger o computador contra oscilações de energia?', o:['Para deixar mais bonito','Para não gastar espaço no HD','Para não danificar peças como a placa-mãe','Para a tela ficar mais colorida'], c:2},
      ]}},

    /* ---------- AULA 7: REVISÃO ---------- */
    { numero: 7, titulo: 'Revisão do 1º Bimestre', emoji: '🏆', dif: 3, revisao: true,
      quiz: { perguntas: [
        {p:'Quais são os 3 elementos necessários para o computador funcionar?', o:['Peopleware, Software e Hardware','Wi-Fi, Bluetooth e 4G','Monitor, Teclado e Mouse','Word, Excel e PowerPoint'], c:0},
        {p:'Qual peça é o "cérebro" do computador, responsável pelos cálculos?', o:['Placa-mãe','Processador (CPU)','Gabinete','HD'], c:1},
        {p:'Qual memória perde as informações quando o PC é desligado?', o:['ROM','RAM','HD','Pendrive'], c:1},
        {p:'Quantos bits formam 1 Byte?', o:['4','8','16','32'], c:1},
        {p:'Teclado e Mouse são periféricos de:', o:['Saída','Processamento','Entrada','Armazenamento'], c:2},
        {p:'Monitor e Impressora são periféricos de:', o:['Entrada','Saída','Híbrido','Nenhuma das opções'], c:1},
        {p:'Qual tipo de computador é portátil e tem bateria própria?', o:['Desktop','Notebook','Estabilizador','Nobreak'], c:1},
        {p:'O que significa a sigla CPU?', o:['Central de Processamento Único','Computador Pessoal Universal','Cabo Principal Único','Circuito Primário Universal'], c:0},
        {p:'A porta que transmite vídeo e áudio em um único cabo se chama:', o:['USB','HDMI','P2','RCA'], c:1},
        {p:'Qual equipamento evita que a oscilação de energia elétrica chegue ao computador?', o:['Scanner','Estabilizador','Pendrive','Modem'], c:1},
        {p:'Qual destes NÃO é um exemplo de Hardware?', o:['Mouse','Teclado','Navegador de Internet (programa)','Monitor'], c:2},
        {p:'Imagine que a luz caiu enquanto você usava o computador. Qual equipamento poderia mantê-lo ligado por mais alguns minutos para você salvar o trabalho?', o:['Estabilizador','Nobreak','Scanner','Modem'], c:1},
        {p:'Colocando em ordem, do MENOR para o MAIOR: Bit, Byte, Kilobyte — qual sequência está correta?', o:['Byte, Bit, Kilobyte','Bit, Byte, Kilobyte','Kilobyte, Byte, Bit','Bit, Kilobyte, Byte'], c:1},
        {p:'Qual tipo de CD só pode ser LIDO, pois já vem gravado de fábrica?', o:['CD-R','CD-RW','CD-ROM','DVD'], c:2},
        {p:'O que é o BOOT do computador?', o:['Um antivírus','O processo de inicialização, desde ligar até o sistema abrir','Um tipo de mouse','Uma extensão de arquivo'], c:1},
        {p:'Um Slot na placa-mãe serve para:', o:['Guardar arquivos excluídos','Encaixar novas placas de expansão','Imprimir documentos','Proteger contra oscilação de energia'], c:1},
        {p:'Por que o SSD deixa o computador mais rápido que um HD comum?', o:['Porque é mais colorido','Porque é um tipo de memória muito mais veloz','Porque tem mais botões','Porque conecta na porta HDMI'], c:1},
      ]}},
  ]
};
