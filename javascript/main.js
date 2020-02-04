var sideNavExpanded = false;

$( document ).ready(function() {
    
    //Controls the appearance of the side navigation menu
    $("#side-nav-arrow").click(function() {
        
        if (sideNavExpanded) {
            $("#side-nav").css({"width":"50px"});
            $("#side-nav a").css({"opacity":"0"});
            $(".side-nav-circle").css({"margin-left":"25px"});
            $(".side-nav-circle").css({"transform":"rotate(-0deg)"});
            // $("#blur-me").removeClass("blur");
        } else {
            $("#side-nav").css({"width":"250px"});
            $("#side-nav a").css({"opacity":"1"});
            $(".side-nav-circle").css({"margin-left":"225px"});
            $(".side-nav-circle").css({"transform":"rotate(-180deg)"});
            // $("#blur-me").addClass("blur");
        }

        sideNavExpanded = !sideNavExpanded;
        
    })

    $("#btn-close-nav").click(function() {
        
    })

});




















