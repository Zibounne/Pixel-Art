function color(event){
    let value = document.getElementById("palette").value;
    console.log(value);
    let element = event.target.id;
    console.log(element);
    document.getElementById(element).style.backgroundColor = value;
}

function gridOff(){
    let transparantOn = document.querySelectorAll(".pixel");
    for (let i = 0; i < transparantOn.length; i++)
    {
        transparantOn[i].style.boxShadow = "0px 0px 0px";
    }
}

function gridOn(){
    let transparantOff = document.querySelectorAll(".pixel");
    for (let i = 0; i < transparantOff.length; i++)
    {
        transparantOff[i].style.boxShadow = "0px 0px 1px #fff";
    }
}

function restart(){
    location.href = "./index.html";
}