

$(function () {

    /*导航点击切换*/
    $("#header .nav-pills > li").on('click',function (e) {
        $(this).addClass("active").siblings("li").removeClass("active");
    })
    


   /*middle手风琴菜单样式切换*/
    var $panel_group_title = $("#middle .panel-group .panel-heading");
    $panel_group_title.on('click',function () {
        $panel_group_title.removeClass("active");
        $(this).addClass('active')
    })
    var $nav = $("#content .tab-wrap > div > .nav");
    var $nav_lis = $("#content .tab-wrap > div > .nav > li");
    var $bt_widget = $("#bottom .widget");
    $(window).on('resize',function () {
        $(window).width() < 1200 ? $nav_lis.addClass('bd-none') : $nav_lis.removeClass('bd-none');
        $(window).width() < 1200 ? $nav.addClass('navbd-r') : $nav.removeClass('navbd-r');
    }).trigger('resize')





})

