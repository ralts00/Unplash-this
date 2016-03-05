// var unsplashThis = document.querySelectorAll(".unsplash-this")

// console.log(unsplashThis);

// for(var x = 0; x < unsplashThis.length; x++){
// 	unsplashThis[x].style.backgroundImage = "url('https://source.unsplash.com/random')"
// }




//funciona

var unsplashThis = document.querySelectorAll(".unsplash-this");
var unsplashLink = "https://source.unsplash.com/random"

for(var x = 0; x < unsplashThis.length; x++){
	unsplashThis[x].style.backgroundImage = "url('"+unsplashLink+"')"
}


// for(x of unsplashThis){
// 	x.style.backgroundImage = "url('https://source.unsplash.com/random')";
// }




//Eduardo

// function splashThis(){

//     var array = {
//       nature: "/category/nature",
//       random: "/random"
//     }

//     let splashthis = document.querySelectorAll(".splash-this");
//     let splashnature = document.querySelectorAll(".splash-this-nature");

//     var splash = "url('https://source.unsplash.com:replace:')";

//     for(let container of splashthis){
//       container.style.background = splash.replace(":replace:",array.random);
//     }

//     for(let nature of splashnature){
//       nature.style.background = splash.replace(":replace:",array.nature);
//     }
//   }

//   window.onload = splashThis;