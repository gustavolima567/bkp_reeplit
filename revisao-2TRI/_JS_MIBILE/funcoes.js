/**
*FUNCOES SAO BLOCOS QUE PODEM SER REUTILIZADOS 
* FUNCOES PODEM OU NAO RECEBER PARAMETROS
* FUNCOES PODEM OU NAO RETORNAR VALORES OU NAO
* FUNCOES PODEM SER ANONIMAS
*/
// DECLARACAO DE FUNCOES
function dizOla() {
  alert("Ola");
}
function olapessoa(nome) {
  alert("Ola " + nome);
}
const nome = 'julios'
const sobrenome = 'silva'
const idade = 24

function dadospessoais() {
  const dados = nome + sobrenome + idade
  console.log(dados)
}
//INVOCACAO DE FUNCOES
dizOla()
olapessoa("Maria")
olapessoa("seiler")
olapessoa("caio")
