let array = [2, 4, 5, 1, 453, 43, 32, 1234, 12, 213, 12, 342, 3]
let pos = array.length
let lockedpos = 0
let swaps = 0
let comparisions = 0
let tempVar = 1
let sorted = false
let tempI = 0
let arrayOut = array

while (sorted == false)
{
    while (tempI < array.length)
    {
        if (arrayOut[lockedpos] > arrayOut[tempI])
        {
            tempVar = arrayOut[tempI]
            arrayOut[tempI] = arrayOut[lockedpos]
            arrayOut[lockedpos] = tempVar
            comparisions++
            swaps++
        }
        tempI++
        comparisions++
    }
    comparisions++
    lockedpos++
    tempI = lockedpos
    // console.log(arrayOut)

    if (lockedpos == array.length)
    {
        sorted = true
    }
}

console.log('Массив отсортрован! Итог: ' + arrayOut + '\nВыполнено операций: ' + comparisions + '\nПеребросов: ' + swaps + '\nДлина массива: ' + array.length)