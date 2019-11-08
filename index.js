// for (let i = 0; i<101; i++){
//   if(i%2===1)  console.log(i);   
// }
// let i=0;
// while(1<100){
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

// do {
//   console.log(i);
//   i++;
//   } wile ( i < 100)
// let i = 0;

// do {
//   alert( i );
//   i++;
// } while (i < 3);

//push pop

const product=['X','Y','Z']
product[3]='R';
product.push('T');
product[15]='V';
product.forEach(printEl);

console.log(product.length)
function printEl(el){console.log(el);}
// for (let i = 0; i < product.length; i++){
//   console.log(product[i]);   
// }
product.forEach(el=>console.log(el));
