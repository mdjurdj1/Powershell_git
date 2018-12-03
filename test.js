var x = 1
var y = 2

var total = x + y

console.log("The total is " + total)

function testArray(array) {
    while (array.length > 0) {
        let thing = array.pop()
        console.log(`Last element of the array is now... ${thing}`)
    }
}

function doThing() {
    alert("You clicked the button.")
}

testArray([1, 2, 3, 4, 5])

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})