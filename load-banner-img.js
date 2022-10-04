loadBannerImg()
function loadBannerImg(){
    mobileImgAdress=['assets/images/desktop-banner/6.jpg',
                     'assets/images/desktop-banner/1.jpg',
                     'assets/images/desktop-banner/2.jpg',
                     'assets/images/desktop-banner/3.jpg',
                     'assets/images/desktop-banner/4.jpg',
                     'assets/images/desktop-banner/5.jpg',
                     'assets/images/desktop-banner/6.jpg',
                     'assets/images/desktop-banner/1.jpg',]

    desktopImgAdress=['assets/images/desktop-banner/6.jpg',
                     'assets/images/desktop-banner/1.jpg',
                     'assets/images/desktop-banner/2.jpg',
                     'assets/images/desktop-banner/3.jpg',
                     'assets/images/desktop-banner/4.jpg',
                     'assets/images/desktop-banner/5.jpg',
                     'assets/images/desktop-banner/6.jpg',
                     'assets/images/desktop-banner/1.jpg',]

    window.addEventListener('resize',()=>{
      if(window.innerWidth<800){
        console.log("m")
      const imgElements =document.querySelectorAll('.main-banner-img');
      for(let i =0 ; i<=imgElements.length; i++){
        imgElements[i].src=mobileImgAdress[i]
      }
      }
    
      if(window.innerWidth>800){
        const imgElements =document.querySelectorAll('.main-banner-img');
       for(let i =0 ; i<=imgElements.length; i++){
        imgElements[i].src=desktopImgAdress[i]
      }}
      
    
    })
    
    
    if(window.innerWidth<800){
      console.log("aa")
    document.getElementById('ban').src="assets/images/home-page-banners/1mb.png" 
    }
    
    if(window.innerWidth>800){
      console.log("aa")
    document.getElementById('ban').src="assets/images/home-page-banners/banner1.png" 
    }



    }