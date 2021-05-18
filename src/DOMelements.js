var someElement = document.querySelector(".element");
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event : " + target.value);
});
