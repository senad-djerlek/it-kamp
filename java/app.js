
// const ime="max"

// let godine = 30;
// console.log (ime + "" + godine);

// godine= 25;
// console.log (ime + "" + godine);

// console.log(5 === 5);
// console.log( 6 >= 5);
// const ime="Max";
// const godine = 40;
// const meseci = godine * 12;


// console.log(meseci);
// const nesto =prompt ("Unesi tvoje ime");
// const godine =prompt("Unesi tvoje godine");
// alert("Ziveo si " + godine * 12 + "meseci");

// let age = 20;
// console.log (age++);    
// console.log(age);
// age= age-1;
// console.log(age)

// const age = prompt("unesi tvoje godine");
// if (+age === 18) {
//     console.log("Tek si postao punoletan");
// }
// else if (age> 18){
//     console.log("Ti si odrastao");
// }
// else if (age > 12){
//     console.log ("Ti si tinejdzer");
// }
// else{
//     console.log("Ti si dete");
// }
// // if (age > 18){
//     console.log ("Punoletan si ");
// }
// else if (age < 18) {
//     console.log("Nisi punoletan")

// }
// else {
//     console.log ("Izvrsava se samo u slucaju kada ni jedan uslov nije zadovoljen")
// }
    // const a = 4;
    // const b = 5;
    // const c = 0;

    // console.log ( a && b && c); -- and

// const a = 4;
// const b = 10;

// console.log (a || b); - or

// console.log(!false); 
// const age = prompt("unesi tvoje godine");

// if (+age >= 18 || +age < 40) {
//     console.log("odrastao si ")
// }
// else if( +age >11 || age < 18) {
//     console.log("tinejdzer")

// }

// else {
//     console.log("dete");
// }
//3 petlje:
// for petlja
// while petlja
//do while petlja;
// let suma = 0;

// for(let i=0; i <= 15; i++) {
//   if (i % 2 === 0){
//     suma = suma + i;
//     console.log("BROJAC" , i);
//     console.log("Suma",suma);
//     // console.log(suma);
//   }
// }

// while (uslov) {
//     radi nesto
// }

// let suma= 0;
// for (let i = 0; i< 10; i++){
//     console.log("Brojac", i)
//     if(i % 2 === 0) { //paran broj
//         console.log("Brojac unutar uslova",i)
//         suma += i

//     }
// }
// console.log("suma",suma);
//     let n = 20;
//     while (n === 20) {
//         console.log("Unutar while petlje");
//         break;
//         n=21;
//  }

 //FIZZ BUZZ CHALLENGE

 // IDEMO OD BROJEVA OD 0 DO 100 I ISPISUJEMO TE BROJEVE;
 //AKO JE BROJ DELJIV SA 3 ISPISUJEMO FIZZ
 //AKO JE BROJ DELJIV SA 5 ISPISUJETE BUZZ
 // AKO JE BROJ DELJIV SA 3 I SA 5 ISPISUJEMO FIZZ BUZZ
// const rec= "Sta ste radili danas"
// let counter = 0;
// for (let i = 0; i< rec.length; i++){
//     if (rec[i].toLocaleLowerCase() === "a"){
//         counter++;
//     }
// }
// console.log(counter);

// const string = "ovo je string";
// let newString = " ";

// for let (i = 0 ; i < string.length; i++) {
//  const element = string [i];

//     if (i === 0 ) {
//         newString += element.toUpperCase();
        
//     } else if (string [i-1] === ""){
//         newString += element.toUpperCase();
//     } else {
//         newString += element;
//     }
    
// }

// console.log(newString);

// const string = "ovo je string";
// let newString = "";

// for (let i=0; i< string.length; i++ ){

// }


// for (let i = 0; i <100; i++) {
//     if ( i % 3 === 0 && i % 5 === 0)
//     console.log("fizzBuzz",i )
//    else if (i % 3 === 0)
//     console.log("Fizz", i);
//    else if ( i % 5 == 0)
//     console.log("Buzz",i);
//     else {
//         console.log(i);
//     }

// }
// let godine= 15;

// switch(godine) {
//     case 20:
//         console.log("Ima 20 ili vise godina")
//         break;
//         case 15:
//         console.log("Ima 15 godina");
//         break;
//         default:
//         console.log("Nije upao ni u jedan case");
// }

// if (godine >= 20){
//     console.log(nesto)
// }

// const isSunny= true;
// let godine = 17;

// let daLiJePunoletan = godine >= 18 ? true : false;
// console.log("punoletan",daLiJePunoLetan);

// isSunny ? console.log("Danas je suncano") : console.log("nije suncano")

// if (isSunny) {
//     console.log("Ponesi naocare")
//       }
//     else{
//         console.log("nemoj da nosis naocare");
//     }


//TERNARY OPERATOR



//mdn web docs

    // if(isSunny) // if(isSunny === true)
    // if (!isSunny) // if(isSunny !== true) || if(isSunny === false)


if (""){
    console.log("Tacna vrednost ili thruthy")
} else {
    console.log("Netacna vrednost ili falsy")
}