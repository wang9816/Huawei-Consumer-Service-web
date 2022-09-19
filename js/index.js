/*头部选择栏的下拉效果*/
$('#headerBtn').click(function () {
    $('#headerIsDisplay').animate({
        opacity: "toggle",
        height: "toggle"
    }, 500, "swing");
    $('.header .iconfont').hasClass('icon-jiantoushang') ? $('.header .iconfont').removeClass('icon-jiantoushang').addClass('icon-jiantouxia') && $('.displayContainer .flagtitle').css('display', 'none') : $('.header .iconfont').removeClass('icon-jiantouxia').addClass('icon-jiantoushang') && $('.displayContainer .flagtitle').css('display', 'block')

});
//>图标效果
$('.headerSelect .headerSelectc a').mouseenter(function () {

    $(this).children('i').css("margin-left", "10px");
})
$('.headerSelect .headerSelectc a').mouseleave(function () {

    $(this).children('i').css("margin-left", "0px");
})
/*登录下拉效果*/
$('.personalIcon').hover(function () {
    $('.personalIcon .loginTab').css('display', 'block')
})
$('.topo-db-float').append("<style>#dbFloatBox::before{top:93px}</style>");
$('.personalIcon').mouseleave(function () {
    $('.personalIcon .loginTab').css('display', 'none')
})

/*图片导航效果:selected下划线*/
$('.pictureList a').map(function (index, item) {
    if (index == 0) {
        $(item).children('.pictureItem').addClass('selected');
    } else {
        $(item).children('.pictureItem').removeClass('selected');
    }
})

$('.pictureList a .pictureItem').on('click', function () {
    $(this).addClass('selected').parent('a').siblings().children('.pictureItem').removeClass('selected')
})

//滚动某位置距离显示/隐藏nav图片
$(window).scroll(function () {
    // console.log($(document).scrollTop())
    if ($(document).scrollTop() >= 328) {
        $('.pictureItem .pic').hide();
        $('.pictureItem').css('height', '70px');

    } else {
        $('.pictureItem .pic').show();
        $('.pictureItem').css('height', '174px');
    }
});



/**
 * 横向拖动触发滚动条拖动
 * container：jquery选择器
 */
//解决拖曳图片mouseup丢失的bug
function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}
function dragMoveX(container) {
    let flag = false;
    let downX;
    let scrollLeft;
    //鼠标按下
    $(document.body).on("mousedown", container, function (event) {
        pauseEvent(event);
        flag = true;
        downX = event.clientX;
        scrollLeft = $(this).scrollLeft();
    });
    //鼠标移动
    $(document).on("mousemove", function (event) {
        // console.log('mousemove')
        if (flag) {
            let moveX = event.clientX;
            let scrollX = moveX - downX;
            if (scrollX < 0 && scrollLeft > 0) {
                $(container).scrollLeft(scrollLeft - scrollX)
            } else {
                $(container).scrollLeft(scrollLeft - scrollX)
            }
        }
    });
    //鼠标释放
    $(document).on("mouseup", function () {
        flag = false;
    });
    //鼠标移出元素
    $(container).on("mouseleave", function (event) {
        if (event.pageX < 0 || event.pageX > document.body.offsetWidth) {
            flag = false;
        }
    });
}

dragMoveX('.scrollSwiper');

/*点击滚动*/
let first =0;
let second = first+1;
let third= second+1;
$(document).on("click",".swiper-narrow-r",function(event){
    event.preventDefault();
    //resetSize();
    $('.scrollSwiper').animate({
        scrollLeft: "+=520px"//20%Left 60-40% = 60%of Width

    }, "fast");
    console.log(
        $('.scrollSwiper').scrollLeft()
    );
    first++;
    second++;

});

$(document).on("click",".swiper-narrow-l",function(event){

    event.preventDefault();
    //resetSize();
    $('.scrollSwiper').animate({
        scrollLeft: "-=500px"
    }, "fast");

    first--;
    second--;
    third--;


});






