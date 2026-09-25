/* ============================================================
   INFORMÁTICA 601 – Motor do App
   ============================================================ */

const DADOS = [null, DADOS_BIM1, DADOS_BIM2, DADOS_BIM3, DADOS_BIM4];

/* ---------- Estado global ---------- */
let estado = {
  aluno: '',
  bim: null, aulaSel: null,
  expIdx: 0,
  quizIdx: 0, quizAcertos: 0,
  quizCombo: 0, quizComboMax: 0,
  ligarSel: null, ligarAcertos: 0, ligarTotal: 0, ligarErros: 0,
  telaAtual: 'tela-login',
  inicioMs: 0,
  progresso: {},
  somLigado: JSON.parse(localStorage.getItem('inf601-som') ?? 'true'),
};

/* ============================================================ LOGIN POR ALUNO
   Progresso fica em sessionStorage (namespaced pelo nome do aluno): some
   automaticamente quando o navegador/aba é fechado, e cada nome novo começa
   zerado — sem precisar fechar o programa entre um aluno e outro. */
function chaveProgresso(nome) { return 'inf601-progresso::' + nome.toLowerCase(); }
function carregarProgresso(nome) {
  try { return JSON.parse(sessionStorage.getItem(chaveProgresso(nome)) || '{}'); }
  catch (e) { return {}; }
}
function salvarProgresso() {
  sessionStorage.setItem(chaveProgresso(estado.aluno), JSON.stringify(estado.progresso));
}
function listaNomesRecentes() {
  try { return JSON.parse(sessionStorage.getItem('inf601-nomes') || '[]'); }
  catch (e) { return []; }
}
function registrarNomeRecente(nome) {
  let l = listaNomesRecentes().filter(n => n.toLowerCase() !== nome.toLowerCase());
  l.unshift(nome);
  l = l.slice(0, 6);
  sessionStorage.setItem('inf601-nomes', JSON.stringify(l));
}
function renderNomesRecentes() {
  const cont = document.getElementById('nomes-recentes');
  cont.innerHTML = '';
  listaNomesRecentes().forEach(nome => {
    const btn = document.createElement('button');
    btn.className = 'chip-nome';
    btn.textContent = '👤 ' + nome;
    btn.addEventListener('click', () => fazerLogin(nome));
    cont.appendChild(btn);
  });
}
function fazerLogin(nome) {
  nome = (nome || '').trim().slice(0, 24) || 'Aluno';
  estado.aluno = nome;
  estado.progresso = carregarProgresso(nome);
  registrarNomeRecente(nome);
  document.getElementById('nome-aluno-label').textContent = nome;
  atualizarProgressoGeral();
  document.getElementById('input-nome').value = '';
  irPara('tela-inicio');
}
function atualizarProgressoGeral() {
  let total = 0, concluidas = 0;
  for (let b = 1; b <= 4; b++) {
    DADOS[b].aulas.forEach(a => {
      total++;
      if (estado.progresso[`${b}-${a.numero}`]) concluidas++;
    });
  }
  const el = document.getElementById('progresso-geral');
  el.textContent = concluidas > 0 ? `📊 Seu progresso: ${concluidas} / ${total} atividades concluídas` : '';
}
document.getElementById('btn-entrar').addEventListener('click', () => fazerLogin(document.getElementById('input-nome').value));
document.getElementById('input-nome').addEventListener('keydown', (e) => { if (e.key === 'Enter') fazerLogin(e.target.value); });
document.getElementById('btn-trocar-aluno').addEventListener('click', () => {
  renderNomesRecentes();
  irPara('tela-login');
});
renderNomesRecentes();

/* ============================================================ SOM (Web Audio, sem arquivos) */
let audioCtx = null;
function ctx() {
  if (!estado.somLigado) return null;
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  return audioCtx;
}
function tom(freq, inicio, dur, tipo = 'sine', vol = .18) {
  const c = ctx();
  if (!c) return;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = tipo;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(vol, c.currentTime + inicio);
  gain.gain.exponentialRampToValueAtTime(.001, c.currentTime + inicio + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(c.currentTime + inicio);
  osc.stop(c.currentTime + inicio + dur);
}
function somClique()  { tom(520, 0, .08, 'square', .08); }
function somAcerto()  { tom(660, 0, .12); tom(880, .1, .16); }
function somErro()    { tom(200, 0, .18, 'sawtooth', .12); tom(140, .12, .2, 'sawtooth', .1); }
function somVitoria()  { [523,659,784,1047].forEach((f,i)=>tom(f, i*.13, .22)); }
function somConquista(){ [784,988,1175].forEach((f,i)=>tom(f, i*.09, .28)); }
function somVirar()    { tom(440, 0, .07, 'triangle', .09); }

document.getElementById('btn-som').addEventListener('click', function () {
  estado.somLigado = !estado.somLigado;
  localStorage.setItem('inf601-som', JSON.stringify(estado.somLigado));
  this.textContent = estado.somLigado ? '🔊' : '🔇';
  if (estado.somLigado) somClique();
});
document.getElementById('btn-som').textContent = estado.somLigado ? '🔊' : '🔇';

/* ============================================================ FUNDO FLUTUANTE (decoração) */
function gerarFlutuantes(id) {
  const area = document.getElementById(id);
  if (!area) return;
  const itens = ['💻','🖱️','⌨️','📊','📝','🔌','💾','🖨️'];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('span');
    s.className = 'flut-item';
    s.textContent = itens[Math.floor(Math.random() * itens.length)];
    s.style.left = Math.random() * 100 + '%';
    s.style.fontSize = (1 + Math.random() * 1.8) + 'rem';
    s.style.animationDuration = (10 + Math.random() * 14) + 's';
    s.style.animationDelay = (Math.random() * 10) + 's';
    s.style.opacity = .25 + Math.random() * .35;
    area.appendChild(s);
  }
}
gerarFlutuantes('flutuantes-login');
gerarFlutuantes('flutuantes');

/* ============================================================ MASCOTE */
function setMascote(estadoFace) {
  const m = document.getElementById('mascote');
  if (!m) return;
  const faces = { neutro:'🙂', feliz:'😄', empolgado:'🤩', triste:'😅', pensando:'🤔' };
  m.textContent = faces[estadoFace] || faces.neutro;
  m.classList.remove('mascote-bounce');
  void m.offsetWidth;
  m.classList.add('mascote-bounce');
}

/* ============================================================ CLIQUE GLOBAL (som em qualquer botão) */
document.addEventListener('click', (e) => {
  if (e.target.closest('button') && e.target.id !== 'btn-som') somClique();
});

/* ============================================================ NAVEGAÇÃO */
function irPara(id) {
  const atual = document.getElementById(estado.telaAtual);
  const prox  = document.getElementById(id);
  if (!prox || !atual || id === estado.telaAtual) return;
  atual.classList.remove('ativa');
  atual.classList.add('saindo');
  setTimeout(() => atual.classList.remove('saindo'), 400);
  prox.classList.add('ativa');
  estado.telaAtual = id;
}

/* ============================================================ TELA BIMESTRE */
document.querySelectorAll('.btn-bim').forEach(btn => {
  btn.addEventListener('click', () => {
    estado.bim = +btn.dataset.bim;
    document.querySelectorAll('.tela').forEach(t => {
      t.className = t.className.replace(/\bbim-\d\b/, '');
      t.classList.add('bim-' + estado.bim);
    });
    renderAulas();
    document.getElementById('aulas-titulo-hdr').textContent =
      DADOS[estado.bim].emoji + ' ' + DADOS[estado.bim].titulo;
    irPara('tela-aulas');
  });
});

/* ============================================================ TELA AULAS */
function renderAulas() {
  const grid = document.getElementById('aulas-grid');
  grid.innerHTML = '';
  const bimData = DADOS[estado.bim];
  let concluidas = 0;
  bimData.aulas.forEach((aula, i) => {
    const chave = `${estado.bim}-${aula.numero}`;
    const concluida = estado.progresso[chave];
    if (concluida) concluidas++;
    const btn = document.createElement('button');
    btn.className = `btn-aula${aula.revisao ? ' aula-revisao' : ''}${concluida ? ' concluida' : ''}`;
    btn.style.animationDelay = (i * 0.05) + 's';
    btn.innerHTML = `
      <div class="aula-num" style="background:${bimData.cor}">${aula.emoji}</div>
      <div class="aula-info">
        <span class="aula-mat">${aula.revisao ? '⭐ REVISÃO' : 'TÓPICO ' + aula.numero}</span>
        <span class="aula-titulo">${aula.titulo}</span>
        <span class="aula-dif">${'⭐'.repeat(aula.dif)}</span>
      </div>
      <span class="aula-check">${concluida ? '✅' : ''}</span>`;
    btn.addEventListener('click', () => iniciarAula(aula));
    grid.appendChild(btn);
  });
  const total = bimData.aulas.length;
  document.getElementById('aulas-placar-bim').textContent = `${concluidas} / ${total} ✅`;
  document.getElementById('aulas-progresso-fill').style.width = (total ? (concluidas / total) * 100 : 0) + '%';
}

/* ============================================================ INICIAR AULA */
function iniciarAula(aula) {
  estado.aulaSel = aula;
  if (aula.explicacao && aula.explicacao.length) {
    iniciarExplicacao(aula);
  } else {
    iniciarPratica(aula);
  }
}

function iniciarPratica(aula) {
  if (aula.tipo === 'ligar') iniciarLigar(aula);
  else iniciarQuiz(aula);
}

/* ============================================================ EXPLICAÇÃO */
function iniciarExplicacao(aula) {
  estado.expIdx = 0;
  document.getElementById('explicacao-titulo-hdr').textContent = aula.emoji + ' ' + aula.titulo;
  renderExplicacao();
  irPara('tela-explicacao');
}

function renderExplicacao() {
  const cards = estado.aulaSel.explicacao;
  const idx = estado.expIdx;
  const c = cards[idx];
  const total = cards.length;

  document.getElementById('explicacao-prog-fill').style.width = ((idx + 1) / total * 100) + '%';
  document.getElementById('explicacao-prog-txt').textContent = (idx + 1) + ' / ' + total;
  document.getElementById('explicacao-emoji').textContent = c.emoji || '💡';
  document.getElementById('explicacao-subtitulo').textContent = c.subtitulo || '';
  document.getElementById('explicacao-texto').textContent = c.texto || '';

  const imgWrap = document.getElementById('explicacao-img-wrap');
  imgWrap.innerHTML = '';
  if (c.img) {
    const img = document.createElement('img');
    img.src = c.img;
    img.alt = c.subtitulo || '';
    img.className = 'explicacao-img';
    imgWrap.appendChild(img);
  }

  const card = document.getElementById('explicacao-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';

  const btnAnt = document.getElementById('btn-explicacao-ant');
  const btnProx = document.getElementById('btn-explicacao-prox');
  btnAnt.style.visibility = idx === 0 ? 'hidden' : 'visible';
  btnProx.textContent = (idx === total - 1) ? '▶ Vamos praticar!' : 'Próximo ▶';
}

document.getElementById('btn-explicacao-prox').addEventListener('click', () => {
  const cards = estado.aulaSel.explicacao;
  somVirar();
  if (estado.expIdx < cards.length - 1) {
    estado.expIdx++;
    renderExplicacao();
  } else {
    iniciarPratica(estado.aulaSel);
  }
});
document.getElementById('btn-explicacao-ant').addEventListener('click', () => {
  if (estado.expIdx > 0) {
    somVirar();
    estado.expIdx--;
    renderExplicacao();
  }
});

/* ============================================================ QUIZ */
function iniciarQuiz(aula) {
  estado.quizIdx = 0;
  estado.quizAcertos = 0;
  estado.quizCombo = 0;
  estado.quizComboMax = 0;
  estado.inicioMs = Date.now();
  document.getElementById('quiz-titulo-hdr').textContent = aula.emoji + ' ' + aula.titulo;
  document.getElementById('quiz-placar').textContent = '0 pts';
  atualizarCombo();
  setMascote('neutro');
  renderPergunta();
  irPara('tela-quiz');
}

function atualizarCombo() {
  const badge = document.getElementById('combo-badge');
  badge.textContent = '🔥 x' + estado.quizCombo;
  badge.classList.toggle('combo-ativo', estado.quizCombo >= 3);
}

function renderPergunta() {
  const qs   = estado.aulaSel.quiz.perguntas;
  const total = qs.length;
  const idx   = estado.quizIdx;
  const q     = qs[idx];

  const pct = (idx / total) * 100;
  document.getElementById('quiz-prog-fill').style.width = pct + '%';
  document.getElementById('quiz-prog-txt').textContent = (idx + 1) + ' / ' + total;

  document.getElementById('quiz-pergunta').textContent = q.p;
  document.getElementById('quiz-card').style.animation = 'none';
  setTimeout(() => document.getElementById('quiz-card').style.animation = '', 10);

  const imgWrap = document.getElementById('quiz-img-wrap');
  imgWrap.innerHTML = '';
  if (q.img) {
    const img = document.createElement('img');
    img.src = q.img;
    img.className = 'quiz-img';
    imgWrap.appendChild(img);
  }

  const cont = document.getElementById('quiz-opcoes');
  cont.innerHTML = '';
  const letras = ['A','B','C','D','E'];
  const ordem = embaralhar(q.o.map((op, i) => ({ op, orig: i })));
  const corretaPos = ordem.findIndex(item => item.orig === q.c);
  ordem.forEach((item, pos) => {
    const btn = document.createElement('button');
    btn.className = 'btn-opcao';
    btn.textContent = letras[pos] + ')  ' + item.op;
    btn.addEventListener('click', () => responderQuiz(pos, corretaPos, btn));
    cont.appendChild(btn);
  });

  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-fb').className = 'quiz-fb';
}

function responderQuiz(escolhido, correto, btnClicado) {
  const todos = document.querySelectorAll('.btn-opcao');
  todos.forEach(b => b.disabled = true);
  const fb = document.getElementById('quiz-fb');
  if (escolhido === correto) {
    btnClicado.classList.add('correta');
    estado.quizAcertos++;
    estado.quizCombo++;
    estado.quizComboMax = Math.max(estado.quizComboMax, estado.quizCombo);
    document.getElementById('quiz-placar').textContent = estado.quizAcertos + ' pts';
    somAcerto();
    if (estado.quizCombo >= 3) {
      fb.textContent = `🔥 Sequência incrível! Correto!`;
      setMascote('empolgado');
    } else {
      fb.textContent = '✅ Correto! Muito bem!';
      setMascote('feliz');
    }
    fb.className = 'quiz-fb ok';
    atualizarCombo();
  } else {
    btnClicado.classList.add('errada');
    todos[correto].classList.add('correta');
    fb.textContent = '❌ Resposta correta: ' + String.fromCharCode(65 + correto) + ')';
    fb.className = 'quiz-fb err';
    estado.quizCombo = 0;
    somErro();
    setMascote('triste');
    atualizarCombo();
    document.getElementById('app').classList.add('tremer');
    setTimeout(() => document.getElementById('app').classList.remove('tremer'), 350);
  }
  setTimeout(() => {
    estado.quizIdx++;
    if (estado.quizIdx < estado.aulaSel.quiz.perguntas.length) {
      renderPergunta();
    } else {
      mostrarResultado(estado.quizAcertos, estado.aulaSel.quiz.perguntas.length);
    }
  }, 1600);
}

/* ============================================================ LIGAR */
function iniciarLigar(aula) {
  estado.ligarSel = null;
  estado.ligarAcertos = 0;
  estado.ligarErros = 0;
  estado.ligarTotal = aula.dados.pares.length;
  estado.inicioMs = Date.now();
  document.getElementById('ligar-titulo-hdr').textContent = aula.emoji + ' ' + aula.titulo;
  document.getElementById('ligar-placar').textContent = '0 / ' + estado.ligarTotal;
  renderLigar(aula);
  irPara('tela-ligar');
}

function renderLigar(aula) {
  const pares  = aula.dados.pares;
  const shuffE = [...pares].map((p, i) => ({ txt: p.e, idx: i }));
  const shuffD = [...pares].map((p, i) => ({ txt: p.d, idx: i }));
  embaralhar(shuffD);

  const esq = document.getElementById('ligar-esq');
  const dir = document.getElementById('ligar-dir');
  esq.innerHTML = ''; dir.innerHTML = '';

  shuffE.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'btn-ligar';
    btn.textContent = item.txt;
    btn.dataset.idx = item.idx;
    btn.dataset.lado = 'e';
    btn.addEventListener('click', () => clicarLigar(btn));
    esq.appendChild(btn);
  });
  shuffD.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'btn-ligar';
    btn.textContent = item.txt;
    btn.dataset.idx = item.idx;
    btn.dataset.lado = 'd';
    btn.addEventListener('click', () => clicarLigar(btn));
    dir.appendChild(btn);
  });
  document.getElementById('ligar-fb').textContent = '';
}

function clicarLigar(btn) {
  if (btn.disabled || btn.classList.contains('correto')) return;
  const fb = document.getElementById('ligar-fb');

  if (!estado.ligarSel) {
    document.querySelectorAll('.btn-ligar.selecionado').forEach(b => b.classList.remove('selecionado'));
    btn.classList.add('selecionado');
    estado.ligarSel = btn;
    fb.textContent = 'Agora escolha o par na outra coluna!';
    fb.className = 'ligar-fb';
  } else {
    const sel = estado.ligarSel;
    if (sel === btn) { sel.classList.remove('selecionado'); estado.ligarSel = null; fb.textContent = ''; return; }
    if (sel.dataset.lado === btn.dataset.lado) {
      sel.classList.remove('selecionado');
      btn.classList.add('selecionado');
      estado.ligarSel = btn;
      return;
    }
    if (sel.dataset.idx === btn.dataset.idx) {
      sel.classList.remove('selecionado');
      sel.classList.add('correto'); sel.disabled = true;
      btn.classList.add('correto'); btn.disabled = true;
      estado.ligarAcertos++;
      document.getElementById('ligar-placar').textContent = estado.ligarAcertos + ' / ' + estado.ligarTotal;
      fb.textContent = '✅ Par correto! '; fb.className = 'ligar-fb ok';
      somAcerto();
      estado.ligarSel = null;
      if (estado.ligarAcertos === estado.ligarTotal) {
        setTimeout(() => {
          mostrarResultado(estado.ligarTotal, estado.ligarTotal);
        }, 800);
      }
    } else {
      sel.classList.add('errado'); btn.classList.add('errado');
      fb.textContent = '❌ Par incorreto, tente de novo!'; fb.className = 'ligar-fb err';
      estado.ligarErros++;
      somErro();
      document.getElementById('app').classList.add('tremer');
      setTimeout(() => document.getElementById('app').classList.remove('tremer'), 350);
      setTimeout(() => {
        sel.classList.remove('selecionado','errado');
        btn.classList.remove('errado');
        estado.ligarSel = null;
        fb.textContent = '';
      }, 900);
    }
  }
}

/* ============================================================ RESULTADO */
function mostrarResultado(acertos, total) {
  const pct = acertos / total;
  let emoji, titulo, estrelas;
  if (pct >= .8)      { emoji='🏆'; titulo='Excelente!';    estrelas='⭐⭐⭐'; somVitoria(); }
  else if (pct >= .6) { emoji='😊'; titulo='Muito bem!';    estrelas='⭐⭐'; somConquista(); }
  else                { emoji='💪'; titulo='Continue assim!'; estrelas='⭐'; somClique(); }

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-titulo').textContent = titulo;
  document.getElementById('res-pontos').textContent = `Você acertou ${acertos} de ${total}!`;
  document.getElementById('res-estrelas').textContent = estrelas;

  const segundos = Math.max(1, Math.round((Date.now() - estado.inicioMs) / 1000));
  const extras = [`⏱ ${segundos}s`];
  if (estado.aulaSel.tipo !== 'ligar' && estado.quizComboMax >= 2) {
    extras.push(`🔥 Sequência máxima: ${estado.quizComboMax}`);
  }
  if (estado.aulaSel.tipo === 'ligar') {
    extras.push(estado.ligarErros === 0 ? '✨ Sem erros!' : `↩️ ${estado.ligarErros} tentativa(s) extra`);
  }
  document.getElementById('res-extra').textContent = extras.join('   •   ');

  gerarConfetti();

  const chave = `${estado.bim}-${estado.aulaSel.numero}`;
  const jaConcluida = !!estado.progresso[chave];
  estado.progresso[chave] = true;
  salvarProgresso();
  atualizarProgressoGeral();

  if (!jaConcluida) {
    const aulasBim = DADOS[estado.bim].aulas;
    const todasConcluidas = aulasBim.every(a => estado.progresso[`${estado.bim}-${a.numero}`]);
    if (todasConcluidas) {
      setTimeout(() => {
        document.getElementById('res-extra').textContent += '   •   🎉 Bimestre completo!';
      }, 300);
    }
  }

  const aulas = DADOS[estado.bim].aulas;
  const proxIdx = aulas.findIndex(a => a.numero === estado.aulaSel.numero) + 1;
  const btnProx = document.getElementById('btn-proxima');
  if (proxIdx < aulas.length) {
    btnProx.style.display = '';
    btnProx.onclick = () => { renderAulas(); iniciarAula(aulas[proxIdx]); };
  } else {
    btnProx.style.display = 'none';
  }

  irPara('tela-resultado');
}

/* ============================================================ BOTÕES RESULTADO */
document.getElementById('btn-repetir').addEventListener('click', () => {
  iniciarAula(estado.aulaSel);
});
document.getElementById('btn-res-menu').addEventListener('click', () => {
  renderAulas();
  irPara('tela-aulas');
});

/* ============================================================ BOTÕES VOLTAR */
document.querySelectorAll('.btn-v').forEach(btn => {
  btn.addEventListener('click', () => {
    const para = btn.dataset.para;
    if (para === 'tela-aulas') renderAulas();
    irPara(para);
  });
});

/* ============================================================ CONFETTI */
function gerarConfetti() {
  const area = document.getElementById('confetti-area');
  area.innerHTML = '';
  const cores = ['#FFD700','#FF6B6B','#4ECDC4','#45B7D1','#96CEB4','#FFEAA7','#DDA0DD','#98D8C8'];
  const emojisFesta = ['🎉','✨','⭐'];
  for (let i = 0; i < 70; i++) {
    const p = document.createElement('div');
    const usaEmoji = Math.random() < .18;
    p.className = 'confetti-p' + (usaEmoji ? ' confetti-emoji' : '');
    if (usaEmoji) {
      p.textContent = emojisFesta[Math.floor(Math.random() * emojisFesta.length)];
      p.style.cssText = `
        left:${Math.random()*100}%;
        font-size:${14+Math.random()*14}px;
        animation-delay:${Math.random()*2}s;
        animation-duration:${2+Math.random()*2}s;
      `;
    } else {
      p.style.cssText = `
        left:${Math.random()*100}%;
        background:${cores[Math.floor(Math.random()*cores.length)]};
        width:${6+Math.random()*8}px; height:${6+Math.random()*8}px;
        animation-delay:${Math.random()*2}s;
        animation-duration:${2+Math.random()*2}s;
        border-radius:${Math.random()>.5?'50%':'2px'};
      `;
    }
    area.appendChild(p);
  }
}

/* ============================================================ UTILS */
function embaralhar(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ============================================================ INICIO */
document.getElementById('btn-comecar').addEventListener('click', () => irPara('tela-bimestre'));
