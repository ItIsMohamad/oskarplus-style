const nav = document.querySelector('nav');
const NaveOpenBtn=document.querySelector('.nav-open-btn');
const body=document.getElementById('body')
const navCloseBtn=document.querySelector('.nav-close-btn')
const fader=document.querySelector('.fader');


NaveOpenBtn.addEventListener("click",()=>{
   
    fader.style.display="block";
    nav.classList.add('nav-open');
    body.style.overflow="hidden"

    
});


fader.addEventListener("click",()=>{
    fader.style.display="none";
    nav.classList.remove('nav-open');
    body.style.overflow="auto"
})

navCloseBtn.addEventListener('click',()=>{
  fader.style.display="none";
    nav.classList.remove('nav-open');
    body.style.overflow="auto"
})

// slideshow
window.addEventListener('resize',()=>{
  showBannerBtn()
})
showBannerBtn()
function showBannerBtn(){

  const mainSlideshowContainer=document.querySelector('.main-slideshow-container');
const bannerButtons= document.querySelectorAll('.angle-left.main, .angle-right.main')
  if(window.innerWidth>600){

mainSlideshowContainer.addEventListener("mouseover", ()=>{

    
 
  bannerButtons.forEach(bannerButton => {
    
    bannerButton.style.display="flex";
   
 });
    
    
});



mainSlideshowContainer.addEventListener("mouseout", ()=>{


  bannerButtons.forEach(bannerButton => {
    bannerButton.style.display="none"
 });
    
    
});

}
if(window.innerWidth<600){
  

    
 
    bannerButtons.forEach(bannerButton => {
      
      bannerButton.style.display="none";
     
   
      
      
  });
}

}



// fixing the width
const bannerImg=document.querySelectorAll(".main-banner-img");

const bannerContainer=document.querySelector(".main-banner-container")
bannerContainer.style.width= `${bannerImg.length*100}%`
const conts =document.querySelectorAll(".cont")
conts.forEach(cont=>
  
{cont.style.width= `${bannerImg.length*100}%`})
// end fixing the width





let counter=1;
let size=bannerImg[0].clientWidth;

function nextBanner(){
  if (counter>bannerImg.length-2){return}
  bannerContainer.style.transition=`transform .4s ease-in-out`
  counter++
  bannerContainer.style.transform=`translateX(-${counter*size}px)`
  highlightDot()
}


function preBanner(){
  bannerContainer.style.transition=`transform .4s ease-in-out`
  counter--
  bannerContainer.style.transform=`translateX(-${counter*size}px)`
  highlightDot()
}

window.addEventListener("resize",()=>{

   size=bannerImg[0].clientWidth;

  bannerContainer.style.transform= `translateX(-${counter*size}px)`
  
})


bannerContainer.style.transform= `translateX(-${counter*size}px)`

document.getElementById("angle_right_moving").addEventListener('click',()=>{
  if (counter>bannerImg.length-2){return}

  
  nextBanner()

  
})





document.getElementById("angle_left_moving").addEventListener('click',()=>{
  if(counter<1){return}
preBanner()
  
})

bannerContainer.addEventListener('transitionend',()=>{


  if(counter>bannerImg.length-2){
    counter=1
   
    bannerContainer.style.transition=`none`
    bannerContainer.style.transform=`translateX(-${counter*size}px)`
    highlightDot()


  }
  if(counter<1){
    counter=bannerImg.length-2
   
    bannerContainer.style.transition=`none`
    bannerContainer.style.transform=`translateX(-${counter*size}px)`
    highlightDot()
   
    

  }
})



// swipe function start

swipe()
function swipe(){
  let i,y=null;
  
  bannerContainer.addEventListener('mousedown',(e)=>{
  
   
  i=e.clientX;
 

 
  })
  
  bannerContainer.addEventListener('mouseup',(e)=>{
    y=e.clientX
    
    i=i-y
   
    if(i>0){
      if (counter>bannerImg.length-2){return}

     nextBanner()
    }
    if (i<0){
      if(counter<1){return}
      preBanner()
    }
    if(i==0){
      console.log("cli")
    }
  })
 

  if(window.innerWidth<800){

    bannerContainer.addEventListener('touchstart', handleTouchStart, false);        
    bannerContainer.addEventListener('touchmove', handleTouchMove, false);

   var xDown = null;                                                        
    var yDown = null;
    function getTouches(evt) {
      return evt.touches ||             // browser API
             evt.originalEvent.touches; // jQuery
    }                                                     
                                                                             
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];  
                                           
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                             
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
                                                                             
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
              if (counter>bannerImg.length-2){return}

              nextBanner()
            
            } else {
              if(counter<1){return}
             preBanner()
            }                       
        } else {
            if ( yDiff > 0 ) {
               
            } else { 
               
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };
  }

}

// swipe function end

// end slideshow





loadBannerImg()
function loadBannerImg(){

  const imgElements =document.querySelectorAll('.main-banner-img');


    mobileImgAdress=['assets/images/mobile-banner/6.jpg',
                     'assets/images/mobile-banner/1.jpg',
                     'assets/images/mobile-banner/2.jpg',
                     'assets/images/mobile-banner/3.jpg',
                     'assets/images/mobile-banner/4.jpg',
                     'assets/images/mobile-banner/5.jpg',
                     'assets/images/mobile-banner/6.jpg',
                     'assets/images/mobile-banner/1.jpg',]

    desktopImgAdress=['assets/images/desktop-banner/6.jpg',
                     'assets/images/desktop-banner/1.jpg',
                     'assets/images/desktop-banner/2.jpg',
                     'assets/images/desktop-banner/3.jpg',
                     'assets/images/desktop-banner/4.jpg',
                     'assets/images/desktop-banner/5.jpg',
                     'assets/images/desktop-banner/6.jpg',
                     'assets/images/desktop-banner/1.jpg',]

    window.addEventListener('resize',()=>{
  
      if(window.innerWidth<600){
        
      
      for(let i =0 ; i<imgElements.length; i++){
        imgElements[i].src=mobileImgAdress[i]
      }
      }
    
      if(window.innerWidth>600){
        
       for(let i =0 ; i<imgElements.length; i++){
        imgElements[i].src=desktopImgAdress[i]
      }}
      
    
    })
    
    
    if(window.innerWidth<600){
      
    
    for(let i =0 ; i<imgElements.length; i++){
      imgElements[i].src=mobileImgAdress[i]
    }
    }
  
    if(window.innerWidth>600){
      
     for(let i =0 ; i<imgElements.length; i++){
      imgElements[i].src=desktopImgAdress[i]
    }}



    }






    // banner dots start
 
    addDots()
    function addDots(){
      const dotContainer = document.querySelector('.banner-dot-container')
      const numberOfDots =document.querySelectorAll('.main-banner-img').length-2 ; //-2 :because of the repeate in banner images 
      
      let dotHtml=''
      for(let i=1;i<numberOfDots; i++){
        dotHtml+=dotContainer.innerHTML
      }
     
      
      dotContainer.innerHTML +=dotHtml
    }


    highlightDot()

    function highlightDot(){

      const dots=document.querySelectorAll('.banner-dot');
    dots.forEach((dot,index)=>{
      if(index==counter-1){
        dot.style.cssText="width:.9em; border-radius:10px;"
      }
      else{
        dot.style.width=null
      }
    })
    }
    


    // banner dots end




    // automated slideshow start

    automate()
    function automate(){

      setTimeout(() => {
        nextBanner()
        automate()
       }, 5000);
  
    }
   
    // automated slideshow ends




    // start services ad
 
    

    
     serviceAds()
     function serviceAds(){
      const background= document.querySelector('.service-ad-container')
      const serviceAdTexts=document.querySelectorAll('.service-ad')
      let backTimeOut;
      let goTimeOut;
     
      if(window.innerWidth<8000){
      flashBackground()
    
     let counter=0

     
      function changeText(){
        counter++
        if (counter==4){
          counter=0
        }
      
        serviceAdTexts.forEach((serviceAdText,index)=>{
            if(counter==index){
              serviceAdText.style.display="flex"
            } 
            else{
              serviceAdText.style.display="none"
            }
            
        })

      }

     function flashBackground(){
        
      
      goTimeOut=setTimeout(() => {
      
        background.style.backgroundPosition="right"
        changeText()
        back()
      

      }, 3000);
          
     }


   
     function back(){
      
      
      backTimeOut=setTimeout(() => {
        
        background.style.backgroundPosition="left"
        
        changeText()
        flashBackground()

        console.log(backTimeOut)
        

      }, 3000);

     
          
     }

    

    }


  }
    // end services ad



























    // product action vertical start
    const products=document.querySelectorAll('.product')
    products.forEach(product=>{
      product.innerHTML+=`<div class="product-action-vertical">
      <a href="#" class="q-add-to-cart product-action"><i class="fa-solid fa-plus"></i></a>
      <a href="#" class="q-add-to-fav product-action"><i class="fa-solid fa-heart"></i></a>
      <a href="#" class="q-quick-view product-action"><i class="fa-solid fa-eye "></i></a>
    </div>`
      product.addEventListener('mouseenter',(e)=>{
        product.children[2].style.visibility="visible"
        product.children[2].style.opacity="1"
      })
      product.addEventListener('mouseleave',(e)=>{
        product.children[2].style.visibility="hidden"
        product.children[2].style.opacity="0"
      })
    })
     
    const prodcutAction= document.querySelectorAll('.product-action')
     prodcutAction.forEach(proAct=>{
      
      proAct.addEventListener('mouseleave',(e)=>{
      
      
      const tar =e.currentTarget.children[0]
      tar.style="none"
      
     })

      proAct.addEventListener('mouseenter',(e)=>{
        
      
      const tar =e.currentTarget.children[0]
      tar.style.color="white"
      
     })

    


    })
    

    // product action vertical end























    // mobile nav start


// 


     
     const navDropDowns=document.querySelectorAll('.mobile-shops-nav-list .li-main')
     navDropDowns.forEach(navDropDown=>{
      navDropDown.addEventListener('click',()=>{
        if(navDropDown.classList.contains('active')){
          navDropDown.classList.remove('active')
        }
        else{
          navDropDowns.forEach(navDrop=>{
            navDrop.classList.remove('active')
          })
          navDropDown.classList.add('active')
        }
        
       
      })
     })


     
     const subNavs=document.querySelectorAll('.sub-nav li')
     subNavs.forEach(subNav=>{
      subNav.addEventListener('click',(e)=>{
        
        if(subNav.classList.contains('active')){
          subNav.classList.remove('active')
          e.stopPropagation();
        }
        else{
          subNavs.forEach(snavDrop=>{
            snavDrop.classList.remove('active')
            e.stopPropagation();
          })
          subNav.classList.add('active')
          e.stopPropagation();
        }
      })
     })








      









     



           










    //  nav-pulling
     navCards()
    function navCards(){

    
    const mainNavs=document.querySelectorAll(".nav-first-card .li-main")

    mainNavs.forEach(mainNav=>{
      mainNav.addEventListener('click',(e)=>{
        const cardId=e.currentTarget.id
        document.getElementById(`${cardId}-card`).classList.remove("to-pull")
        setTimeout(() => {
          document.getElementById(`${cardId}-card`).classList.add("nav-pull")
          console.log(`${cardId}-card`)
        }, 30);
        
        
        
      })
    })





    const navBackArrows=document.querySelectorAll('.card-remove-arrow')
   navBackArrows.forEach(navBackArrow=>{
    navBackArrow.addEventListener('click',()=>{
      console.log("dadafadf")
      
         const cardRemove=document.querySelector(".nav-pull")
         cardRemove.classList.remove("nav-pull")
         setTimeout(()=>{
          cardRemove.classList.add("to-pull")
         },500)
         
     })
  
   })












  }









    // mobile nav end