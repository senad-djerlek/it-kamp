
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


// if (""){
//     console.log("Tacna vrednost ili thruthy")
// } else {
//     console.log("Netacna vrednost ili falsy")
// }

//NIZOVI

// const niz = ["BMW",4,undefined ,"VW",null, NaN, false,true, "sadas","kurs"  ]


// for (let clan in niz){
//     console.log("Index",clan, "Vrednost clana",niz[clan]);
// }

// const studenti = ["Marko","Janko","Sasa"];

// studenti[8]= "Zika";

// console.log(studenti);







// for (let i=0; i<cars.length; i++){
//     if (cars [i]){
//         console.log(cars[i]);
//     }
    

                //0 , 1,    2             3,         4
// console.log(cars[1],cars[3]);


// const fruits = ["Banana","Appple","Pear"];
// fruits [2] = 2;
// for (let fruit in fruits){
//     console.log(fruits[fruit])
// }

// const beverages = ["Sparkling water","Mineral Water","Still water"];

// for (let beverage in beverages){
//     console.log(beverages[beverage]);
//     if (beverages){
//         console.log ("true")
//     } else {
//         console.log("not true")
//     }
    
// }

// const cars = ["Audi", "BMW","Mercedes"];

// for (let car in cars){
//     console.log(cars[car])
//     if (!cars){
//         console.log("netacna vrednost", cars)
//     }
// }


// function saberi_tri_pet(){
//     const zbir = 3 + 5;
//     return zbir;
    
// }

// function saberi(prviBroj,drugiBroj){
//     return prviBroj + drugiBroj;
// }

// function pozdrav(ime){
//     alert("Pozdrav Korisnice" + "" + ime);
// }

//  pozdrav("Marko");

// const saberi = function () {
//     //funkcija drugi
// }

// const arroisjdaiwFunc == () ==> {
//     //funkcija

// console.log(saberi_tri_pet());


// function inchToCm(inch){
//     return inch * 2.54;
// }

// console.log(inchToCm(10))


// const visina = inchToCm(25);

// console.log(visina);


// const inchToCm = inch =>  inch * 2.54;


// console.log(inchToCm(10));

// const saberi = (a,b) => a + b;

// console.log(saberi(10,1));

// const name = "Faris";

// function nekaFunkcija () {
//     const name = "Jusuf";
// }

// function sabiraj  (prvi, drugi, treci = false) 
// {
//     if(treci) {
//         return prvi + drugi + treci;
//     } else {
//         return prvi +drugi;
//     }
// }
// console.log(sabiraj(2,2,10));
//napraviti program koji ce  3 puta korisnika da pita za njegov input
// funkcija koja ce da pomnozi ta tri broja i da ga izbaci u alert

// let broj = prompt("Unesi broj")
// console.log(broj);
// let brojDva = prompt("Unesi drugi broj")
// console.log(brojDva);
// let brojTri = prompt("Unesi treci broj")
// console.log(brojTri)


// function mnozenjeUnetihBrojeva (broj,brojDva,brojTri) {
//     const mnozenje = broj * brojDva * brojTri
//     return mnozenje;
// }

// alert(mnozenjeUnetihBrojeva(broj , brojDva, brojTri));




// alert(sabiranjeUnetihBrojeva(broj,brojDva,brojTri));

// const cars = ["Bmw","Audi","Smart"];
// // cars[3] = "MB"
// //Dodavanje elemenata na kraj niza
// cars.push("Mercedes");

// //ZA BRISANJE ZADNJEG CLANA - POP

// cars.pop();
// const popValue = cars.pop();
// console.log(cars);
// console.log(popValue);

//ZA DODAVANJE NA POCETAK NIZA - unshift

const cars = ["Bmw","Audi","Smart"];
cars.push("Mercedes","Fiat,Mini")

cars.unshift("Ford","Kadilak", 4, "Nesto");



//ZA BRISANJE PRVOG CLANA NIZA - shift
cars.shift();

const shiftValue = cars.shift();
console.log(shiftValue);


console.log(cars);


//OBRNI NIZ - reverse

cars.reverse();
console.log(cars);

//SPAJANJE DVA NIZA - concat(niz);

const imena = ["faris" , "isko", "aldinn"]
const age = [20,100,50];

const spojenNiz = imena.concat(age);
console.log(spojenNiz);

//TRAZENJE CLANA NIZA - find();

const trazenaVrednost = cars.find(el => el === "Smart");
console.log(trazenaVrednost);


// const godine = [12 , 76, 26, 6 , 23 , 21 ,29 ,16];
// const drugeGodine =[12,76,8,10,5,14,28,98,101]

// function returnAdults(ages){
//     const nonAdults = [];
//     for (const age of ages){
//         if (age < 18)
//         nonAdults.push(age);
//     }
//     return nonAdults;
// }
// // function returnAdults(ages) {
// //     const adults = [];
// //     for (const age of ages) { 
// //         if (age >= 18) {
// //             adults.push(age)
// //         }
// //     }

// //     return adults;
// // }

// console.log(returnAdults(godine));

//


