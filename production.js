const vocherContainer=document.querySelectorAll('.vocher-container');
const vocher=document.querySelector('.vocher').outerHTML;
let vocherRepeat=vocher
for(let i=1; i<7; i++){
 vocherRepeat+=vocher
}

vocherContainer.forEach(vo=>{
   vo.innerHTML +=vocherRepeat
})

window.addEventListener('resize',()=>{
   setBackgroundSize()
   if(window.innerWidth<990){
      setMainbannerheight()
   }
   else{
 
      setMainBannerHeightToNormal()
   }
   
})
if(window.innerWidth<992){
   setMainbannerheight()
}

function setMainbannerheight(){
   const productImageWidth=document.querySelector('.product-image').clientWidth;
   
   const productGridHeight=document.querySelectorAll('.product-container')
   
   productGridHeight.forEach(product=>{
      product.style.gridAutoRows=`${(productImageWidth*1.125+70)}px`
   })
   
}

function setMainBannerHeightToNormal(){
   const productGridHeight=document.querySelectorAll('.product-container')
   productGridHeight.forEach(product=>{
      product.style="none"
   })
  
}

setBackgroundSize()
function setBackgroundSize(){

const vocherwidth=document.querySelector('#voch').clientWidth;
const productwidth=document.querySelector('#prod').clientWidth;




const setImageWidth=document.querySelectorAll('.vocher-mobile.gardesh .vocher .vocher-image')
const setProductWidth=document.querySelectorAll('.mobile-product .contain .vocher-mobile .vocher .vocher-image')
setImageWidth.forEach(image => {
   image.style.width=vocherwidth+"px"
   image.style.height=vocherwidth*1.125+"px"
})


setProductWidth.forEach(image => {
   image.style.width=productwidth+"px"
   image.style.height=productwidth*1.125+"px"
})

}








// blog section start
const cards=document.querySelectorAll('.card')
cards.forEach(occurence => {
   occurence.addEventListener('click', (e) => {
    
     
     document.querySelector("#"+e.currentTarget.id+"-card").classList.add("blog-active") 
     for(let i=1; i<=cards.length;i++){
      var song="song-"+i;
     
      if(song!=e.currentTarget.id){
       
      document.querySelector("#song-"+i+"-card").classList.remove("blog-active")
      song=null 
      }
     }
     
   });
 });








// blog section end










































