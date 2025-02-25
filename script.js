function task (a){
    console.log("task------" + a)
}

task(1)

let array = [1,2,3,4,5];

for (let i of array.reverse()){
    console.log(i)
}

task(2)

let array2 = [1,2,3,4,5]; 

for( let i of array2){
    if( i === 5 ){
        console.log(i)
        break
    }
}

task(3)

let array3 = [1, 2, 3, 7, 6, 9];

for( let i of array3){
    if( i === 7){     
        continue     
    }
    console.log(i);
}

task(4)

console.log(8=="8");

// ბიქოზზზზ ორი ტოლობა არის მსუბუქი შედარება,სტრინგი გადაიყვანა ნამბერად და
// დააბრუნა ტრუ, სამი ტოლობა რო ყოფილიო დააბრუნებდა ფოლსს რადგან სამი ტოლობის 
// დროს როგორ ტაიპი აასევე მნიშვნელობა იგივე უნდა იყოს

task(5)

let array5= [1, 2, 4,8, 7, 15, 25, 3, 18, 12]

for( let i of array5){
    if( i > 5){
        console.log(i);
        
    }
}


task(6)

let array6 = ["nika", "mamuka", "otari", "giorgi", "lizi", "maia", "sandro"];

for(let i of array6){
    let new6array = array6.length === 7 && i[7] === "sandro" ? " 7 და ბოლო ელემენტია სანდრო" : array6.length === 5 && i[5] === "otari" ? " otari mexutea" : "error error";
    console.log(new6array);
}

task(7)

let users = [
    {username: 'giorgi',age: 30},
    {username: 'levani', age: 25},
    {username: 'anna', age: 28}
]

for( let i of users){
    if( i.age > 25){
        console.log(i);
        
    }
}