var saveID = "selID=picture1";
var saveSize = "M";

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

        saveID = "selID=" + showObj.id;
    }
}

function changeSize(id){
    saveSize = id;
}

function confirmInfo(){
    document.getElementsByClassName("cta")[0].attributes[0].nodeValue = "../cart.html?" + saveID + "/" + saveSize;    
}

function loadInfo(){
    const urlParams = new URLSearchParams(window.location.search);
    const selID = urlParams.get('selID');
    var selSplit = selID.split('/');

    console.log("4: " + selSplit[0]);
    console.log("5: " + selSplit[1]);


    const pictureList = [
        "picture1",
        "picture2",
        "picture3",
        "picture4",
        "picture5"
    ];
    for (i = 0; i < pictureList.length; i++) {
        var picObj = document.getElementById(pictureList[i]);
        if (picObj.id != selSplit[0]){
            picObj.className = 'hide';
        }

        if(picObj.id == selSplit[0]){
            picObj.className = 'show';
        }
    }

    document.getElementsByClassName("about")[0].innerHTML = "<h1>Rain Jacket - " + selSplit[1] + "</h1>";
}