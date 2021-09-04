let changeState = () => {
    setTimeout(() => {
        document.querySelector("section").style.backgroundColor = "rgba(0, 0, 0, .7)"
    }, 150)
    let elem = document.getElementById("hero").querySelectorAll(".box");
    let  i = 0;
    let work = setInterval(() => {
        elem[i].style.opacity = 1;
        i++;
        if (i == 3) {
            clearInterval(work);
        };
    }, 900);
    setTimeout(() => {
        document.getElementById("text").style.opacity = 1;
    }, 3600);
};