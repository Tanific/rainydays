let btn = document.getElementsByClassName("btn");

for (var i = 0; i < btn.length; i++) {
    (function (index) {
      btn[index].addEventListener("click", function () {
        console.log("Clicked Button: " + index);

        let isPresent = false;

        this.classList.forEach(function (e, i) {
          if (e == "btn:focus") {
            isPresent = true;
          } else {
            isPresent = false;
          }
        });

        if (isPresent) {
          this.classList.remove("btn:focus");
        } else {
          this.classList.add("btn:focus");
        }
      });
    })(i);
  }