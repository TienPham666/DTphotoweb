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