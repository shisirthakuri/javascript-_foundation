
//let var const 

// var a = 1;
// a = 3;
// console.log(a);


// let a = 1;
// a = 3;
// console.log(a);

// const  a = 1;
// a = 3;
// console.log(a);
//we can not change value



//data types string number and boolens

// let firstName = "shisir";
// age = 19;
// isMarried = false;

// console.log("this person name is " + firstName +  " there age is "+ age)
// console.log("this person name is ")
// console.log(firstName);
// console.log("there age is")
// console.log(age);
// console.log("is married")
// console.log(isMarried)


//is else
// if (isMarried == true){
//     console.log(firstName + " is married")
// }else {
//     console.log(firstName + " is not married");
// }


//loops
// let answer = 1 + 2 +3 + 4;
// console.log(answer)

// let answer = 0;
  
// for(let i = 0; i<=100; i= i+1){
//   answer =   answer + i ;
// }
// console.log(answer)

//array and objects 

// let person1 = "shisir";
// let person2 = "shahi";
// let person3 = "kamal"


// let personArray = ["shisir","shahi", "kamal"]
// console.log(person1)
// console.log(person2)
// console.log(person3)

// console.log(personArray[0])
// console.log(personArray[1])
// console.log(personArray[2])



// const age = [21, 22, 23 , 24 ,25];
// const numberOfPeople = age.length
// for (let i =0; i<numberOfPeople; i++){
//     if(age[i] % 2 == 0){
//         console.log(age[i]);
//     }
// }


// const personArray = ['shisir',"kamal","kamala"]
// const genderArray = ["male","male","female"]
// const numberOfPeople = personArray.length;


// for(let i = 0; i<numberOfPeople;  i++){
//     if(genderArray[i]== "male")
//         console.log(personArray[i])
// }


// function findSum(a,b){
//     return a + b;
// }
// const value = findSum(4,4)
// console.log(value)

//callback

// function sum (num1, num2,fnToCall ){
//     let result = num1 + num2;
//     fnToCall(result);
// }
// function displayResult(data){
//     console.log("result of the sum is :" + data);
// }
// function displayResultPassive(data){
//     console.log("sum result is : "+data);
// }
//you are only allow to call one function after this
//how you wiill display result of a sum

// const ans = sum(1,2 ,displayResult);

// function calculateAirthematic (a , b, type){
//     if(type =="sum"){
//         return(a+b)
// }if(type == "minus"){
//         return (a-b)
//     }
// }
// const calculaeSum = calculateAirthematic(3,4, "sum");
// console.log(calculaeSum)

// function greet(){
//     console.log("hellow world")
// }
// setInterval(greet, 1*1000)

// console.log("hello")
