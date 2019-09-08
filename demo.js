window.onload=function () {


    $(document).ready(function(){

        //无限轮播图

        var c = 0;

        function run() {
            c++;
            c = c == 4 ? 0 : c;
            $(".pic-box img").eq(c).fadeIn(600).siblings('img').fadeOut(600);
            $(".pic-box ul li").eq(c).css('background', '#f40').siblings('li').css('background', '#fff');
        };

        var timer = setInterval(run, 3000);

        $(".pic-box").hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(run, 3000);
        });

        $(".pic-box ul li").mouseenter(function () {
            c = $(this).index();
            $(".pic-box img").eq(c).fadeIn(300).siblings('img').fadeOut(300);
            $(".pic-box ul li").eq(c).css('background', '#f40').siblings('li').css('background', '#fff');

        });

        //tab选项卡jQuery
        $(".title ul li").click(function(){
            $(".title ul li").eq($(this).index()).addClass("active").siblings().removeClass('active');
            $(".notice .content").hide().eq($(this).index()).show();
        });
        //二维码删除
        $(".code-box .close").click(function () {
            $(".search-con .code-box ").hide();
        });
        //移入实现二级菜单
        $(".inner-left ul li").mouseenter(function () {
            // alert("aa");
            $(".main-main .left-inner").eq($(this).index()).show().siblings('.left-inner').hide();
        });
        $(".main .main-inner").mouseleave(function () {
           $(".main-main .left-inner").hide();
        });

    });


};