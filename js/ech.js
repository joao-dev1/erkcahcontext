import dayjs from 'dayjs';
import fetch from 'fetch';
import googleIt from 'google-it';

const getCurrentTime = () => {
    return dayjs();
  }
  fetch
const getGameId = () => {
    const initialTime = dayjs('2022-02-23', 'YYYY-MM-DD').startOf('day');
    const currentTime = getCurrentTime().startOf('day');
    return currentTime.diff(initialTime, 'day');
  };

var gameId = getGameId();

var word = "barba";
var myjSon = ""
var meuobjeto = ""
var objeto = "aa"
var texto = '{"atributo1": "valor 1", "atributo2": 23}';
var objeto = JSON.parse(texto);

var result = "aa"

 await googleIt({'query': 'verde', 'limit': '2'}).then(results => {
       
       result = results[0].snippet;
       
       }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
       })
       
result = result.split(" ");
console.log(result);
// fetch.fetchUrl(`https://contexto.me/machado/pt-br/game/${gameId}/${word}`, await function(error, meta, body){
//   myjSon = JSON.stringify(body.toString());

// });
var distancia = 9999999999;
var palavraPerto = ""

for(let i = 0; i< 5; i ++){
console.log("PALAVRA TESTADA: " + result[i]);
var contexto = new fetch.FetchStream(`https://contexto.me/machado/pt-br/game/${gameId}/${result[i]}`);
var palavra = ""

contexto.on("data", await function(chunk){

  if(chunk.toString());

console.log();
if(parseInt(palavra.distance) < distancia){
  distancia = parseInt(palavra.distance);
  palavraPerto = palavra.lemma;
 }
 console.log(`PALAVRA MAIS PERTO:${palavraPerto}  DINSTANCIA: ${distancia}`);
 });

 


}


// fetch.fetchUrl(`https://contexto.me/machado/pt-br/giveup/${gameId}`, function(error, meta, body){
//     console.log(body.toString());
// });



