let title = document.querySelector(".title");
let ul = document.querySelector("#ul");
let reload = document.getElementById("reload");


window.onload = function(){
    if(window.navigator.onLine){
        online()
    }
    else{
        offline()
    }
}


addEventListener("online",function(){
    online()
})
addEventListener("offline" , function(){
    offline()
})



function online(){
    title.innerHTML = "Online Now";
    title.style.color = "green";
    document.body.style.backgroundColor = "rgba(0, 128, 0, 0.147)"
    ul.classList.add("hide");
    reload.classList.add("hide")
}

function offline(){
    title.innerHTML = "Offline Now";
    title.style.color = "gray";
    ul.classList.remove("hide");
    reload.classList.remove("hide")
}
reload.onclick  = function(){
    window.location.reload()
}