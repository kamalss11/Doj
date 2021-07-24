var img1 = document.querySelector(".pg-2 img")
setInterval(function(){
    if(window.innerWidth <= 540){
        img1.src = "Images/img2_mobile.png"
        console.log(img1)
    }
    else{
        img1.src = "Images/dojo_img1.png"
        console.log(img1)
    }
},500)