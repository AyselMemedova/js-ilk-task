//  Userdən 3 ədəd alın və aldığınız ədədlərin ədədi ortasını tapan alqoritm qurun.

// let first= parseInt(prompt("Enter first number"));
// let second= parseInt(prompt("Enter second number"));
// let third= parseInt(prompt("Enter third number"));
// let answer= (first+second+third)/3;
// console.log(answer);


// Userdən 3 ədəd alın və bu ədədlərin üçbucağın tərəfləri ola biləcəini qaytaran alqoritm qurun.Əgər olarsa true olmazsa ekranda false çap edilsin.

// let teref1= parseInt(prompt("1.ci terefi yazin"));
// let teref2= parseInt(prompt("2.ci terefi yazin"));
// let teref3= parseInt(prompt("3.ci terefi yazin"));

// if (teref1 + teref2 > teref3 && teref1 + teref3 > teref2 && teref2 + teref3 > teref1){
//     console.log(true)
// }

// else{
//     console.log(false)
// }



//.Userdən name və surname dəyərləri qəbul edin və fullname-ini ekranda çap edin 

// let name = prompt("Ad daxil edin:");
// let surname = prompt("Soyad daxil edin:");

// let fullname = name + surname;
// console.log(fullname)



// BMİhesablayan alqoritm qurun.Userdən boy və çəki dəyərləri alın və buna əsasən BMİ hesablayın (boy=1.70 çəki=80 daxil edilsə boy/çəki-nin kavdratı olaraq hesablanır).70/1.7*1.7 = 24.221.Əgər əldə olunan dəyər 25-dən böyükdürsə artıq çəkili əgər 18.5-24.9 arasındadırsa normal 18.5-dən kiçikdirsə arıq olaraq ekranda çap edilsin.

// let boy = parseFloat(prompt('Boy qeyd edin'));
// let ceki = parseFloat(prompt('Ceki qeyd edin'));
// let bmi = ceki/(boy **2);

// if( bmi>25){
//     console.log("Artiq cekili")

// }
// else if ( 18.5<bmi && bmi<24.9 ){
//     console.log("Normal cekili")
// }

// else{
//     console.log("Ariq")
// }
// console.log(bmi)