//site.js
(function () {
/*

    var ele = $("#username");
    alert('hey');
    ele.text("Ben Barnes");


    var main = document.getElementById("main");
    main.onmouseenter = function () {
    
        main.style.backgroundColor = "#888";

    }
    main.onmouseleave = function () {

        main.style.backgroundColor = "";

    }


    var menuItem = $("ul.menu li a");
    menuItem.on("click", function () {
        var me = $(this);
        alert(me.text());
    });

    */


    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $('#sidebarToggle i.fa');



    $("#sidebarToggle").on("click", function () {
       
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass('hide-sidebar'))
        {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        }
        else {

            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }

    })



})();