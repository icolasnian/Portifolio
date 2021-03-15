var selector = 'ul li';

    
    $(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});
    
  
function selectorAbout() {
    var botao = document.getElementById("btnHome");
        botao.style.backgroundColor = "rgba(37, 190, 182, 0)";

    var about = document.getElementById("btnAbout");
    about.style.backgroundColor = "rgba(37, 190, 182, 0.3)";

    var port = document.getElementById("btnPort");
    port.style.backgroundColor = "rgba(37, 190, 182, 0.3)";

    var cont = document.getElementById("btnCont");
    cont.style.backgroundColor = "rgba(37, 190, 182, 0.3)";
}

    function currentSelected() {
      
         var botao = document.getElementById("btnHome");
        botao.style.backgroundColor = "rgba(37, 190, 182, 0.3)";

        //rgba(37, 190, 182, 0.3)
        // $("#img_preview").css("background-color", "rgba(0, 0, 0, 0.7)");
      } 

// Adiciona background preto no meu no scroll 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
    if (scroll >= 150) {
        $("#container").addClass("scrolling");
        
        
    } else {
        $("#container").removeClass("scrolling");
       
    }
});









