//function to create an copy of the array with its elements in inverted positions.
function reverseArray (array){
    let arrayInverted = []
    let j = 1
    for (let i = 0; i < array.length; i++){
        arrayInverted[i] = array[array.length - j]
        j++
    }
    return arrayInverted
}

//tests 
const array1 = [0, 9, 6, 8, 9, 1, 5, 7]
const array2 = ['Oh', 'Hi', 'Mark']
const array3 = [false, true, true, true]
const array4 = ['Its', 'Not', true, 0]

console.log(reverseArray(array1))
console.log(reverseArray(array2))
console.log(reverseArray(array3))
console.log(reverseArray(array4))
