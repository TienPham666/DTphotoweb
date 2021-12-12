$(document).ready(function() {
    $("#go-to-top").hide()
    $(window).scroll(function() {
       if ($(this).scrollTop() >= 435)
            $("#go-to-top").show("slow")
        else
            $("#go-to-top").hide("slow")
    })
    $("#go-to-top").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    })
    $("nav ul.menu a").click(function() {
        var h = $(this).attr("href")
        $("html, body").animate({
            scrollTop:$(h).prop("offsetTop") + "px"
        }, 1000);
    })
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 100)
            $("nav").css({
                "position":"fixed",
                "left":0,
                "right":0,
                "top":0,
                "z-index":9999,
                "opacity": 0.5
            })
        else
            $("nav").css({
                "position":"relative",
                "opacity": 1
            })
    })
})
function init() {
    var images = document.querySelectorAll("div.thumb img")
    for ( var i = 1; i < images.length; i++)
        images[i].onclick = function() {
            var beo = this.src 
            var img = document.getElementById("mainImg")
            img.setAttribute("src", beo)
        }
}