/*
* Infelizmente, javascript usa só Math.random():
* um ponto flutuante entre 0 (inclusive) e 1 (exclusive).
* Pra selecionar algo em um array,
* tem que multiplicar por length e jogar fora os "quebrados": Math.floor().
*
* 1º Escolher um número aleatório e mostrá-lo na frase gerada.
* 2º Transformar o número em um índice do array e mostrá-lo.
* 3º Usar a frase correspondente ao índice escolhido.
*/

const resposta_padrao = "Acabou meu repertório..."
const repertorio = [
  "Como você se chama?",
  "E como as outras pessoas chamam você? :-)",
  "Meu nome é ShatShum!",
  "Tenho 25 anos. E você?",
  "Eu gosto de matemática. E você?",
  "Então, você gosta de matemática... e de computação, também! Que bacana!",
  "Inteligente... pero no mucho!",
  "Contém aromatizante artificial de inteligência, sabor idêntico ao original!",
  "Não me canso de jogar conversa fora...",
];

export function treinar_ia(input) {
  // Nada a aprender!
}

export function gerar_resposta(input) {
  if(repertorio.length == 0) {
    return resposta_padrao;
  }

  return repertorio[Math.floor(Math.random() * repertorio.length)];
}
