function countUp() {
    const addOne = document.getElementById('value-number');
    const newTotal = document.getElementById('subtotal-value');
    
    var i = addOne.value;
    addOne.value = ++i;

    var k = 150*addOne.value;
    newTotal.value = k;
}

function countDown() {
    const subtractOne = document.getElementById('value-number');
    const newTotal = document.getElementById('subtotal-value');

    var i = subtractOne.value;
    if(i > 0)
    {
    subtractOne.value = --i;    
    var k = newTotal.value-150;
    newTotal.value = k;
    }

}

