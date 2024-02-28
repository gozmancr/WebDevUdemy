$("h1").css("color","red");
$("h1").addClass("bigText");
$("h1").text("Hai Salut");
$("button").html("<em>Acuma</em>");
$("a").attr("href", "https://youtube.com");

$("h1").click(function(){
    $('h1').css("color","blue");
})

// $(".but").click(function(){
//     $("h1").css("color","white")
// })

$("input").keydown(function(e){
    var keyP = e.code;
    $("h1").text(keyP);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "blue");
})

$(".but").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})