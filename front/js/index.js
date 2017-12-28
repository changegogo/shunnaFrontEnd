/**
 * Created by Administrator on 2017/12/14.
 */
   //轮播
    var len = $('.warper .sildebar li').length;
    var timer;
    var index = 0;
    var focusBox = '<ul class="focusBox"></ul>';
    $('.warper').append(focusBox);
    for(var i=0;i<len;i++){
        var li=$("<li>"+(i+1)+"</li>")[0];
        $('.focusBox')[0].appendChild(li);
    }
    $('.warper .focusBox li').click(function(){
        index = $('.warper .focusBox li').index(this);
        showPic(index);
    }).eq(0).trigger('click');

timer = setInterval(function(){
    showPic(index);
    index++;
    if(index == len){index = 0;}
},2000);

    $('.warper').hover(function(){
        clearInterval(timer);
    },function(){
      timer = setInterval(function(){
            showPic(index);
            index++;
            if(index == len){index = 0;}
        },2000);
    });

    function showPic(index) {
        $('.sildebar li').hide();
        $('.sildebar li').eq(index).show(); /*2017-12-25*/
        $('.focusBox li').eq(index).css("background", "#F70A1C").siblings().css("background","#320B4E");
        // $('.carousellist a').eq(index).show().siblings().hide(); /*2017-12-25*/
    }
//下拉
    var h=$('.img img').eq(0).height()*4;
    $('.img').css("height",h+"px");
 $(".cli").click(function () {
     var num=$('.img a').length
     var tt
     alert(num)
     if(num<=4){
         alert("没有更多数据")
     }if(4<num&&num<8){
         $('.img').append( $('.img a:lt(4)').clone(true))
         $('.img a').animate({top:"-"+h+"px"},3000)
         tt=setTimeout(function () {
             alert("aaa")
             $('.img').append($('.img a:lt(4)'));
             $('.img a').css("top",0);
             alert("bbb")

         },3000)
     }else if(num>=8){
         $('.img a').animate({top:"-"+h+"px"},3000)
          tt=setTimeout(function () {
              alert("aaa")
             $('.img').append($('.img a:lt(4)'));
             $('.img a').css("top",0);
              alert("bbb")

         },3000)
     }


 })

///横向滚动
var mySwiper = new Swiper ('.swiper-container', {
//    autoHeight:true,
    loop : true,
    speed:2000,
    autoplay:1,
    slidesPerView : 5,
    spaceBetween :5,
    freeMode :true,
    freeModeMomentum : false,
    freeModeSticky : false,

})
$('.swiper-container').mouseover(function(){
    mySwiper.stopAutoplay();
})
$('.swiper-slide').mouseover(function(){
    mySwiper.stopAutoplay();
    $('.swiper-slide a').css({"color":"#333"})
    $('.swiper-slide img').css({"border":"4px solid transparent"})
    $(this).find('img').css({"border":"4px solid #D7AD4B"})
    $(this).find('a').css({"color":"red"})

})
$('.swiper-slide').mouseout(function(){
    mySwiper.startAutoplay();
    $('.swiper-slide a').css({"color":"#333"})
    $('.swiper-slide img').css({"border":"4px solid transparent"})
})
