

  // When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	
	
	 
	
   // When the user scrolls down 50px from the top of the document, resize the header's font size
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "82px";
	
  }else {
    document.getElementById("header").style.height = "70px";
  }
  
  
  
  
  
   // When the user scrolls down 50px from the top of the document, resize the header's font size
   if (document.body.scrollTop > 840 || document.documentElement.scrollTop > 840) {
    document.getElementById("header").style.backgroundColor="rgba(28, 51, 74, 0.9)";	
  }else {
    document.getElementById("header").style.backgroundColor="white";
  }
   
   // When the user scrolls down 50px from the top of the document, resize the header's font size
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.transition=".5s";
        document.getElementById("header").style.backgroundColor="white";
        //document.getElementById("top-nav").style.height = "90px";
       //document.getElementById("top-nav").style.padding = "25px ";
        document.getElementById("header").style.position="fixed";
         //  document.getElementById("carouselExampleCaptions").style.paddingTop="140px";
         document.getElementById("header").style.marginTop="0px";
         document.getElementById("header").style.borderRadius="0px";
        document.getElementById("header").style.width="100%";
        document.getElementById("header").style.borderBottom= "2px solid #e6e6e6";
       
         
    
  }
  else {
   // document.getElementById("carouselExampleCaptions").style.paddingTop="0px";
       document.getElementById("header").style.marginTop="30px";
       document.getElementById("header").style.backgroundColor="transparent";
       document.getElementById("header").style.position="absolute";
       document.getElementById("header").style.transition="0s";
       document.getElementById("header").style.borderBottom= "0px solid #e6e6e6";
   // document.getElementById("top-nav").style.display = "block";
    
  }
    
   
  
  
	
   // When the user scrolls down 50px from the top of the document, resize the header's font size
   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.borderBottom= " 1px solid #e6e6e6";
	
  }else {
    document.getElementById("header").style.borderBottom= " 0px";
  }
  
   
  
  
  
  // When the user scrolls down from the top of the document, process bar start
   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolled = (winScroll / height) * 100;
   document.getElementById("myBar").style.width = scrolled + "%";
	
  
  
  
   
  
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  
  
   
   
  
  
  
}