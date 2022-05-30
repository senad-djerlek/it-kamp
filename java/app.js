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

// const cars = ["Bmw","Audi","Smart"];
// cars.push("Mercedes","Fiat,Mini")

// cars.unshift("Ford","Kadilak", 4, "Nesto");

// //ZA BRISANJE PRVOG CLANA NIZA - shift
// cars.shift();

// const shiftValue = cars.shift();
// console.log(shiftValue);

// console.log(cars);

// //OBRNI NIZ - reverse

// cars.reverse();
// console.log(cars);

// //SPAJANJE DVA NIZA - concat(niz);

// const imena = ["faris" , "isko", "aldinn"]
// const age = [20,100,50];

// const spojenNiz = imena.concat(age);
// console.log(spojenNiz);

// //TRAZENJE CLANA NIZA - find();

// const trazenaVrednost = cars.find((el) => console.log(el) );
// console.log(trazenaVrednost);

// //TRAZENJE INDEKSA - find indeks trazeni indeks

// const trazeniIndex = age.findIndex(el => el <100);
// console.log(trazeniIndex);

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

// const DATA1 = [2,26,38,75,11,29]
// const DATA2 = ["a","b","c","d","e"]

// const mutateArrays = {array1,array2} =>{

// }

// const mutateArrays = (array1,array2) => {
// }
// function(dat1,dat2){
//     let helper= dat1.concat(dat2);
//     let parni =[];

//     for (const el of helper){
//         if (el % 2 === 0){
//             parni.push(el);
//         }
//     }
//     parni.unshift(10,20)
//     return helper,parni;
// }
// console.log(mutateArrays(DATA1,DATA2));
//prvi jeo je da napravimo pomocni niz koji ce da sadrzi dva niza spojena
//iz tog pomocnog niza sto smo napravili napravimo koji ce da izvuce iz ovog niza samo parne brojeve
// na prva dva mesta unesi broj 10 i broj 20

//FILTER METODA
// const words = ["televizor","daljinski","telefon","voda","ranac","stolica"];
// const numbers = [2,8,9,11,26,85,86,90,102,1003,1120];
// const booleans = [true,false,true,false]
// const filteredArray = words.concat(numbers).concat(booleans).filter(el => typeof el === "boolean");

// console.log(filteredArray);

//Map metoda

// const numbers = [25, 100, 9, 16, 84];

// const squareNumbers = numbers.map((el, index, aray) => {
//   if (index === 0 || index === 3 || index === 5) {
//     return el * el;
//   } else{
//     return el;
//   }
// });
// console.log(squareNumbers);

// const DATA1 = [1, 3, 4, 2, 7, 14];

// const dogAgeToHuman = (ages) => {
// const humanAge = ages.map(age => {
//     if (age >2 && age < 9){
//         return  (age * 4) / 2;
//     }else if (age > 2){
//         return age * 7;
//     }
//     else {
//         return age;
//     }
// }); return humanAge;
//     const lessThan10HumanAge = humanAge.filter(el => el < 10);
//     return lessThan10HumanAge;
// }
// console.log(dogAgeToHuman(DATA1));

// const DATA1 = [1, 3, 4, 2, 7, 14];

//  const dogAgeToHuman = (ages) => {
//     const humanAge = ages.map(age =>
//         {
//             if (age > 2 && age < 9){
//                 return (age * 4) / 2;
//             } else if (age > 2){
//                 return age * 7;
//             }
//             else {
//                 return age;
//             }

//         })
//  }
//  console.log(dogAgeToHuman(DATA1))

// const DATA1 = [1, 3, 4, 2, 7, 14];

// const dogAgeToHuman = (ages) => {
//     const humanAge = ages.map(age =>{
//         if (age >= 10){
//             return (age * 4 );
//         }else if (age > 10){
//             return age *25;
//         }else {
//             return age;
//         }
//     })

// }

// console.log(dogAgeToHuman(DATA1));

// const DATA1 = [10,12,20,50,25];

// const BrojeviVeciOd10 = DATA1.map(el => el * 10);

// console.log(BrojeviVeciOd10);

// const DATA1 = [10,12,20,50,25];

// const BrojeviVeciOd10 = (brojevi) => {
//     const ispisBrojeva = brojevi.map(broj => {
//         if (broj > 10){
//             return brojevi;
//         }
//     })

// }

// console.log(BrojeviVeciOd10(DATA1));

//MAP
// const DATA = [100, 65, 76, 80, 99, 53, 1,2];

// const returnEven = (numbers) => {
// return (evenNumbers = numbers.filter(num => num % 2 === 0 && num <= 50));

// };

// const DATA = [5,3,2,8,7,9];

// const returnPow = (numbers) => {
// return pow = numbers.map(el => el * el + 10)

// };

// reduce funkcija

// const DATA = [100,200,250,400,520];

// const cartTotal = DATA.reduce(
// (previousValue, currentValue) => previousValue + currentValue,
// 500
// );

const DATA = [26, 18, 16, 22, 30, 28];

const sumAvgAge = (ages) => {

    const getAverage =
    ages.reduce((prevValue, curValue) => prevValue + curValue) / ages.length;

    return +getAverage.toFixed(2);

// return average = zbirSvihGodina / ages.length;





}

console.log(sumAvgAge(DATA));

// // every
// const ages = [32, 33, 16, 40];

// ages.every(checkAge)

// function checkAge(age) {
//   return age > 18;
// }


//some 

// const ages = [3, 10, 18, 20];

// ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }

//includes

const array1 = [ 1 , 2 , 3];

console.log(array1.includes(2));


const pets = ["cat ", "dog", "bat"];

console.log(pets.includes("dog"));

//join

const elements = ["fire","air","water", "trece"];

console.log(elements.join());
// expected output : Fire,Air,Water

console.log(elements.join(" "));

