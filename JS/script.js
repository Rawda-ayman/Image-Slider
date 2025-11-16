let imgs = document.querySelectorAll(".image")   // m3aya node list of el images 

let lightcontainer = document.querySelector(".lightcontainer") ;  // select div ely wa5da lightcontainer class

let innercontainer = document.querySelector(".innercontainer") ;

let closebutton = document.getElementById("closeicon") ;

let nextbutton = document.getElementById("nexticon");

let prevbutton = document.getElementById("previcon") ;

let currentIndex ;


//3mlt for loop 34an t3dy 3la kol el swr ely mawgoda fl node list .
for(let i = 0;i<imgs.length;i++)
{
    // lma click 3la el sora azhr el slider w tkon el sora ely dost 3liha hya ely mawgoda fl inner container . 
    imgs[i].addEventListener("click",function(e){  
    lightcontainer.classList.remove("d-none") ;
    let currentimage = e.target.getAttribute("src") ;
    innercontainer.style.backgroundImage = `url("${currentimage}")`;  
     currentIndex = i ; 
})
}

    closebutton.addEventListener("click",function(){
       closeSlider() ;
    })

    nextbutton.addEventListener("click",function(){
        nextButtonSlider()
    })

    prevbutton.addEventListener("click",function(){
       prevButtonSlider()
    })
 
    function closeSlider()
    {
      lightcontainer.classList.add("d-none") ; 
    }

   function nextButtonSlider()
    {
        currentIndex++ ; 
        if(currentIndex==imgs.length)
        {
            currentIndex = 0 ; 
        }
        console.log(currentIndex) ;
        innercontainer.style.backgroundImage = `url("${imgs[currentIndex].getAttribute("src")}")` ;
    }

    function prevButtonSlider()
    {
         currentIndex-- ; 
        if(currentIndex==-1)
        {
            currentIndex = imgs.length-1 ; 
        }
        console.log(currentIndex) ;
        innercontainer.style.backgroundImage = `url("${imgs[currentIndex].getAttribute("src")}")` ;
    }