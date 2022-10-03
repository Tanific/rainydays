
function changeColor(id) {
    var getColor = "None";
    const pictureList = [
        "picture1",
        "picture2",
        "picture3",
        "picture4",
        "picture5"
    ];
    for (i = 0; i < pictureList.length; i++) {
        var hideObj = document.getElementById(pictureList[i]);
        if (hideObj != null){
            hideObj.className = 'hide';
        }
    }
    var showObj = document.getElementById(pictureList[id-1]);
    if (showObj != null){
        showObj.className = 'show';

    }
    
    if(id == 1)
    getColor = "Yellow";
    if(id == 2)
    getColor = "Green";
    if(id == 3)
    getColor = "Red";
    if(id == 4)
    getColor = "Blue";
    if(id == 5)
    getColor = "Black";
    localStorage.setItem("selectedColor", getColor)
    console.log(localStorage.getItem("selectedColor"));
}



function loadColor(){
    
    console.log(localStorage.getItem("selectedColor"));
}