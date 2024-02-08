const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação de alto nível",
      "Um estilo de folha de estilo",
    ],
    correta: 1,
  },
  {
    pergunta: 'Qual é a principal função do operador "===" em JavaScript?',
    respostas: [
      "Comparação de igualdade estrita (valor e tipo)",
      "Atribuição de valor",
      "Comparação de igualdade solta (apenas valor)",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é uma variável em JavaScript?",
    respostas: [
      "Um valor fixo que não pode ser alterado",
      "Um tipo de dado numérico",
      "Um nome simbólico associado a um valor",
    ],
    correta: 2,
  },
  {
    pergunta: 'Qual é a função do operador "&&" em JavaScript?',
    respostas: [
      "Concatenar strings",
      "Atribuir um valor a uma variável",
      "Operador lógico E (AND)",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é um loop em JavaScript?",
    respostas: [
      "Uma declaração que define uma função",
      "Uma instrução que executa uma ação repetidamente enquanto uma condição for verdadeira",
      "Uma função que retorna um valor",
    ],
    correta: 1,
  },
  {
    pergunta: 'Qual é a função do operador "%" em JavaScript?',
    respostas: [
      "Divisão de números",
      "Multiplicação de números",
      "Operador de módulo (resto da divisão)",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é um array em JavaScript?",
    respostas: [
      "Um tipo de dado que armazena apenas um valor",
      "Uma coleção ordenada de valores",
      "Uma função que executa uma ação específica",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Uma declaração que define uma ação",
      "Um tipo de dado que armazena uma lista de valores",
      "Um operador lógico que compara valores",
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é a função do operador "||" em JavaScript?',
    respostas: [
      "Operador lógico OU (OR)",
      "Operador de adição",
      "Operador de subtração",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é uma declaração condicional em JavaScript?",
    respostas: [
      "Uma declaração que define uma variável",
      "Uma instrução que executa uma ação com base em uma condição",
      "Uma função que retorna um valor booleano",
    ],
    correta: 1,
  },
];

const quiz = document.getElementById("quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostraTotal = document.querySelector('#acertos span');
mostraTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h2").textContent = item.pergunta;

  for (let reposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    const input = dt.querySelector("input");
    dt.querySelector("span").textContent = reposta;
    input.setAttribute("name", "pergunta-" + perguntas.indexOf(item));
    input.value = item.respostas.indexOf(reposta);
    input.onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      corretas.delete(item);

      if (estaCorreta) {
        corretas.add(item);
      }
      mostraTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
