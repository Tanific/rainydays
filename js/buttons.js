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
    
}



