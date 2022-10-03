
function changeColor(id) {
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
    localStorage.setItem("selectedColor","Yellow");
    if(id == 2)
    localStorage.setItem("selectedColor","Green");
    if(id == 3)
    localStorage.setItem("selectedColor","Red");
    if(id == 4)
    localStorage.setItem("selectedColor","Blue");
    if(id == 5)
    localStorage.setItem("selectedColor","Black");

    console.log(localStorage.getItem("selectedColor"));
}



function loadColor(){
    
    console.log(localStorage.getItem("selectedColor"));
}