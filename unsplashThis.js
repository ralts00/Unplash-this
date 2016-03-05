var unsplashThis = document.querySelectorAll(".unsplash-this");

var unsplashThisNew = document.querySelectorAll(".unsplash-this-new");

var unsplashTnisNewLink = "https://source.unsplash.com/random";

console.log(unsplashTnisNewLink)

for(var x = 0; x < unsplashThisNew.length; x++){
 unsplashThisNew[x].setAttribute("style", "background-position: center; background-repeat: no-repeat; background-image: url('https://source.unsplash.com/random')");
}



function FunsplashThis(){
    for(var x = 0; x < unsplashThis.length; x++){
        var unsplashCategory = unsplashThis[x].getAttribute("data-category");
        var unsplashLink= "https://source.unsplash.com/random";
        if (unsplashCategory){
            unsplashLink = "https://source.unsplash.com/category/"+unsplashCategory;
        }
        unsplashThis[x].setAttribute("style", "background-position: center; background-repeat: no-repeat; background-image: url('"+unsplashLink+"')");
    }
}

function ready(){
    FunsplashThis();
}

window.onload = ready