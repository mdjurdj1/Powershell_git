var x = 1
var y = 2

var total = x + y

console.log("The total is " + total)

function testArray(array) {
    while(array.length > 0) {
        let thing = array.pop()
        console.log(`Last element of the array is now... ${thing}`)
    }
}

testArray([1,2,3,4,5])