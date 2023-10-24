



//Fazendo de uma forma mais simples, como eu aprendi no inicio.
function averageCalc (n1, n2, n3) {

    let sum = n1 + n2 + n3

    let average = sum / 3

    console.log(average)

}

let numbers = [3, 4, 6]

averageCalc(...numbers)


// Fazendo usando a função arguments
function averageCalc2 () {

let numb = 0

for (let i=0; i < arguments.length; i++) {

    numb = numb + arguments[i]
     
}

let average = numb / arguments.length
return average


}

let list = [100, 2, 100]

const result = averageCalc2(...list)
console.log(result)