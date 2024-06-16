function getRandomNumbers() {
    let R_array = []
    for (let i = 0; i < 10; i++) {
        R_array.push(Math.floor((Math.random() * 99) + 1))
    }

    return R_array
}

function getEvenNumbers(numbers) {
    let evenNumbers = numbers.filter(function (value) {
        return value % 2 === 0
    })

    return evenNumbers
}

function getAverage(numbers) {
    even_avg = numbers.reduce((total, num) => total + num, 0)
    return even_avg / numbers.length
}



let array = getRandomNumbers()
console.log(`10개의 난수들: ${array}`)
let evenarray = getEvenNumbers(array)
console.log(`짝수 난수들: ${evenarray}`)
console.log(`짝수 난수들의 평균:${getAverage(evenarray)}`)
