

    let openWidth = $(".box").outerWidth()
    $(".open").css("left",-openWidth)
$(".iconH2").click(function(){
    if($(".open").css("left") === "0px"){
        $(".open").animate({left:-openWidth},500)
    }else{
        $(".open").animate({left:0},500)
    }
})
$(".close").click(function(){
    $(".open").animate({left:-openWidth},500)
})

$(".headTitle").next().slideUp();

$(".headTitle").click(function(e){
    $(e.target).next().slideToggle(1000);
    $(".headTitle").next().not($(".headTitle").next()).slideUp();

})

function count (){
let date = new Date();
let eventDate = new Date(2022, 12, 28);
let myDate = eventDate - date

let s = Math.floor(myDate / 1000);
let m = Math.floor(s / 60);
let h = Math.floor(m / 60);
let d = Math.floor(h / 24) - 30;

h %= 24;
m %= 60;
s %= 60;

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

$(".days").html(`${d} D`);
$(".hours").html(`${h} H`);
$(".mins").html(`${m} M`);
$(".sec").html(`${s} S`);

setTimeout(count, 1000);
}
count();
