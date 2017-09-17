/*global $, console */
$(function () {
    "use strict";
    
    var slider = $(".slider"),
        header = $("header");
    
    // Triggers the niceScroll plugin
    $("html").niceScroll({
        cursorcolor: "#0099e6",
        cursorwidth: "10px",
        cursorborder: "none",
        cursorborderradius: "10px",
        zindex: "25"
    });
    
    // Prevent any anchor with href="#" from being clicked
    $("a[href='#']").on("click", function (e) {
        e.preventDefault();
    });
    
    // Adding the fixed status on the nav
    $(window).scrollTop() > header.height() ?
        header.addClass("header-fixed") :
        header.removeClass("header-fixed");
    
    // Adding the fixed status on the nav when scrolling
    $(window).scroll(function () {
        ($(this).scrollTop() > header.height()) ?
            header.addClass("header-fixed") :
            header.removeClass("header-fixed");
    });
    
    // Adjust the nav anchors to the sections related
    $("nav a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("id")).offset().top
        }, 1000);
    });
    
    $(".item-details a, .about-details a").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("id")).offset().top
        }, 1000);
    });
    
    // Adjust the slider height as the window's
    slider.height($(window).height());
    
    // Adjust the slider overlay div
    slider.find(".overlay").each(function () {
        $(this).height(slider.height());
    });
    
    // Adjust the images size to fit as slider section
    slider.find("img").each(function () {
        $(this).height(slider.height());
    });
    
    // Adjust the slider controls position
    slider.find(".carousel-control").each(function () {
        $(this).css("top", ($(window).height() - $(this).height()) / 2);
    });
    
    slider.find(".carousel-control span").each(function () {
        $(this).css("top", ($(this).parent().height() - $(this).height()) / 2);
    });
    
    // Adjust the indicators position
    slider.find(".carousel-indicators").each(function () {
        $(this).css("left", ($(window).width() - $(this).width()) / 2);
    });
    
    // Adjust the skills circles
    var myCircle = Circles.create({
        id: 'web-design',
        radius: 85,
        value: 90,
        width: 15,
        text: function(value){return value + '%';},
        colors: ['#fff', '#0099e6']
    });
    
    var myCircle = Circles.create({
        id: 'graphic-design',
        radius: 85,
        value: 66,
        width: 15,
        text: function(value){return value + '%';},
        colors: ['#fff', '#0099e6']
    });
    
    var myCircle = Circles.create({
        id: 'wordpress',
        radius: 85,
        value: 58,
        width: 15,
        text: function(value){return value + '%';},
        colors: ['#fff', '#0099e6']
    });
    
    var myCircle = Circles.create({
        id: 'photography',
        radius: 85,
        value: 51,
        width: 15,
        text: function(value){return value + '%';},
        colors: ['#fff', '#0099e6']
    });
    
    
    // Adjust the Skills Progress Bar
    $('#html').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });
    
    $('#js').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });

    $('#bs').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });
    
    $('#seo').LineProgressbar({
        percentage: 95,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });
    
    $('#ux').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });
    
    $('#ui').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });
    
    $('#ps').LineProgressbar({
        percentage: 85,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });
    
    $('#ai').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });
    
    $('#idn').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#0099e6',
        backgroundColor: '#000',
        radius: '5px',
        height: '10px',
        width: '100%'
    });
    
    // Fire Up the counter Plugin
    $('.counter').counterUp();
    
    // Adjust the slick slider
    $('.members').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });

    
    $(window).on("resize", function () {
        
        // Adjust the slider height as the window's on resizing
        slider.height($(window).height());
        
        // Adjust the slider overlay div
        slider.find(".overlay").each(function () {
            $(this).height(slider.height());
        });

        // Adjust the images size to fit as slider section
        slider.find("img").each(function () {
            $(this).height(slider.height());
        });

        // Adjust the slider controls position on resizing
        slider.find(".carousel-control").each(function () {
            $(this).css("top", ($(window).height() - $(this).height()) / 2);
        });

        slider.find(".carousel-control span").each(function () {
            $(this).css("top", ($(this).parent().height() - $(this).height()) / 2);
        });
        
        // Adjust the indicators position
        slider.find(".carousel-indicators").each(function () {
            $(this).css("left", ($(window).width() - $(this).width()) / 2);
        });
        
    });
    
});