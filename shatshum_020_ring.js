/*
* 1º Colocar um array de strings em uma variável no escopo do módulo.
*    Vai ter problema quando terminar a string.
* 2º Detectar que a string não tem mais entradas e retornar uma string padrão.
* 3º Usar divisão modular (%) pra repetir as mesmas strings.
*/

const resposta_padrao = "Acabou meu repertório..."
const repertorio = [
  "Olá! Meu nome é ShatShum!",
  "Como você se chama?",
  "E como as outras pessoas chamam você? :-)",
  "Tenho 25 anos. E você?",
  "Eu gosto de matemática. E você?",
  "Então, você gosta de matemática... e de computação, também! Que bacana!",
];

export function treinar_ia(input) {
  // Nada a aprender!
}

var current_item = 0;
export function gerar_resposta(input) {
  if(repertorio.length == 0) {
    return resposta_padrao;
  }

  return repertorio[current_item++ % repertorio.length];
}
