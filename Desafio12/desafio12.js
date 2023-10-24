console.log("hello word")




function binList(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let mid = 0;

  while (min <= max) {
    mid = Math.floor((min + max)/2);

    if (arr[mid] === target) {
        return `O número encontrado foi ${target} sua posição foi ${mid}`
    } else if (arr[mid] < target) {
        min = mid +  1
    } else {
        max = mid - 1 
    }
}
    return "Not found"
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const alvo = 7;

const resultado = binList(list, alvo);
console.log(resultado);


function intOrdenate (arr) {

  const result = arr.sort()
  return result.slice().sort((a, b) => a-b)

  //retornando apenas o result, o 10 ficaria na posição 1 pela leitura lexicografica

}

const lista = [1,5,6,2,10,3,8,6,7,4,9]
const result = intOrdenate(lista)
console.log(result)


function returnToHTML () {

    const maxNumbers = 20
    let list = []

    for (let i =0; i<maxNumbers; i++) {
        list[i] = i +1

    }

    const ulElement = document.getElementById('lista-numeros')
    list.map((n) => {
        const li = document.createElement('li')
        li.textContent = n

        ulElement.appendChild(li)
    })

}

returnToHTML()



