
$(document).ready(()=>{
    $(".navbar-toggler12").click(()=>{
        $('.sign-mob').show();
        $('.navbar-toggler12').hide();
        document.querySelector('.navbar-nav').style.transform = "translateX(0px)"
        $('.nav-box1').show();
        $('.nav-close').show();   
        document.querySelector('.nav-head').style.transform = "translateX(30px)"
        document.querySelector(".nav-box1").style.transition = "all 2000";

    });
    $('.nav-box1').click(()=>{
        $('.nav-box1').hide();
        $('.nav-close').hide();  
        $('.sign-mob').hide();
        $('.navbar-toggler12').show();
        document.querySelector('.nav-head').style.transform = "translateX(0px)"    
    });
    $('.nav-close').click(()=>{
        $('.nav-box1').hide();
        $('.nav-close').hide();  
        $('.sign-mob').hide();
        $('.navbar-toggler12').show();
        document.querySelector('.nav-head').style.transform = "translateX(0px)"    
    });
    $('.login-close').click(()=>{
        $('.nav-box1').show();
        $('.bd-example-modal-lg').modal('hide');
        $('.navbar-toggler12').hide();
    })

  });

  var carousal= document.querySelector('.page-carousal')
  var footer  = document.querySelector('.page-f')
  var fee = document.querySelector('.fee-container')
  window.onscroll = function() {
    if (window.innerHeight + window.scrollY > document.body.clientHeight - (carousal.clientHeight + footer.clientHeight)) {
        fee.style.transform = 'translateX(350px)';
        // $('.fee-container').fadeIn('slow');
    }else{
        fee.style.transform = 'translateX(0px)';
        // $('.fee-container').fadeIn('slow');
    }
}