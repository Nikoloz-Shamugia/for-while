    //   qvedavaleba #2
for(let i = 0; i<=100;  i++){
    console.log(i)
};
let number = 0 ;
while(number<=49 ){
    number = number + 1
    console.log(number)
};
    //  qvedavaleba #3
let firstName = [ "niko" , "lasha", "sopo", "mamuka", "kote"];
let updatedNames = firstName.push('petre');
console.log(firstName);
let updatedNames2 = firstName.shift();
console.log(firstName);
let updatedNames3 = firstName.unshift('ika');
console.log(firstName);
let updatedNames4 = firstName.pop();
console.log(firstName);
    // davaleba #4
let empty =[]
for(let i = 0; i<=10000; i++){
    let square = i * i ;
    empty.push(square)
};
console.log(empty)
    // qvedavaleba #5
let numbers =[ 1 , 2 , 3 , 4 , 5]
let sum = 0
for(let i = 0; i<= numbers.length; i++){
    sum = sum + i
}
console.log(sum)    
    // qvedavaleba #6
let randomNumber = Math.floor(Math.random() * 100000)
if(randomNumber % 2 === 0){
    console.log('true')
}else{
    console.log('false')
};
    // qvedavaleba #7
let uppercaseString = 'MY NAME IS JOHN'
let lowercaseString = uppercaseString.toLowerCase()
console.log(lowercaseString)
    // qvedavaleba #8 
let numbersArray = [ 1 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 , 23 , 24 , 25 , 12 , 34 , 56 , 68 , 94 , 64 , 63 ]
let evens = numbersArray.filter (evenNumber => evenNumber %2 === 0 )
console.log(evens)