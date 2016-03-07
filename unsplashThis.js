function FunsplashThis(){
	var unsplashThis = document.querySelectorAll(".unsplash-this");
    for(var x = 0; x < unsplashThis.length; x++) {
        var unsplashCategory = unsplashThis[x].getAttribute("data-category");
        var unsplashLink= "https://source.unsplash.com/random/" + x;
        if (unsplashCategory) {
            unsplashLink = "https://source.unsplash.com/category/"+unsplashCategory+"/?=" + x;
        }
        unsplashThis[x].setAttribute("style", "background-position: center; background-repeat: no-repeat; background-image: url('"+unsplashLink+"')");
 
    }
}

function ready(){
    FunsplashThis();
}

window.onload = ready