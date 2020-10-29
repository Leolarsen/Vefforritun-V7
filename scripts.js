/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
const Invalid = ` 1234567890-'+< `
/**
 * Byrja forrit.
 */
function start() {
  
  do { 
    question();
  } while (confirm('aftur?'))
   }


// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

function question(){
  let string = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
   
  if (string.toLowerCase() === 'kóða'){
    kóða();
  }else if (string.toLowerCase() === 'afkóða'){
    afkóða();
  }else{
    wrong(string);
  }
}
 

function kóða() {
  let hliðrun = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]')
  
  if (hliðrun >= 1 && hliðrun <= 31){
      strengur(hliðrun);
  }else{
    alert(`${hliðrun} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`)
  }
} 

function strengur(hliðrun){
  let str = prompt(`Gefðu upp strenginn sem á að kóða með hliðrun ${hliðrun}:`);
  if (str != null){
    for (let i = 0; i < str.length; i++){
      if(LETTERS.includes(str[i])==false){
        alert(`Þú gafst upp stafi sem ekki er hægt að hliðra með: ${[hliðrun].join(', ')}. Reyndu aftur.`); 
      }else{
        alert('Þú gafst ekki upp streng. Reyndu aftur.')
      }
    }
    
  }else{ 
   if (str != null){
    for (let i = 0; i < str.length; i++)
      if(LETTERS.includes(str[i])==false)
       encode(str, hliðrun)
   }
  }
}
  



function afkóða() {

const hliðrun = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]')
if (hliðrun >= 1 && hliðrun <= 31){
  let strengur = prompt(`Gefðu upp strenginn sem á að kóða með hliðrun ${hliðrun}:`)
  decode(strengur, hliðrun);
  }else{
    alert(`${hliðrun} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`)
  }
}

 
function wrong(string) {
  
  const noI = alert(`Veit ekki hvaða aðgerð „${string}“ er. Reyndu aftur.`); 

}

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, hliðrun) {
  let string = '';
  for (let i = 0; i<str.length; i++){
    let stafur = str.charAt(i);
    let positionLETTERS = LETTERS.indexOf(stafur);

    let number = positionLETTERS+parseInt(hliðrun);
    number = number %32

    string += LETTERS[number];
  }
  return str;
}


/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  let string = '';
  let z = '';
  for(let i = 0; i<str.length; i++){
    let stafur = str.charAt(i);
    let positionLETTERS = LETTERS.indexOf(stafur);

    if((positionLETTERS-n)>=0) {z = LETTERS.charAt((positionLETTERS-n));}
    else {z = LETTERS.charAt((positionLETTERS-n+32));}

    string += z;
  }
  return str;
}


//console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
//console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
//console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
//console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
//console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
//console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');