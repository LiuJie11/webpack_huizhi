
// $('#header').load('/common/header.html')
// $('#footer').load('/common/footer.html')
// // 引入头部和底部
// $(document).ready(function(){
//     var pathName = decodeURI(location.pathname)
//     var currPath = pathName.slice(pathName.lastIndexOf('/')+1);
//     // console.log(currPath,pathName.lastIndexOf('/'))
//     $("#header #navbarSupportedContent .navbar-nav>li").each(function(){
//         var $this = $(this);
//         if($this.data('type')=='index.html'&&currPath==''){
//             $this.addClass('header_nav_active')
//         }else if($this.data('type')==currPath){
//             $this.addClass('header_nav_active')
//         }
//     })
    
//     // 导航菜单768以下自动展开bug
//     $("#header_menu").on("click",function(){
//         $(".ld-navbar").toggle();
//     })
//  });


//  // 监听浏览器滚动
// $(window).scroll(function(){
//     var scrollTop = $(window).scrollTop();
//     if(scrollTop>100){
//         $(".back-top").show(500)
//      }else{
//         $(".back-top").hide(500)
//      }
// })


// //  返回顶部
//  $(".back-top").click(function(){
//     //滚动时 滚动条离上部的距离
//     var distance = $("html").scrollTop() + $("body").scrollTop();
//     //设置滚动的总时间
//     var time=1000;
//     //间隔时间
//     var intervalTime=50;
//     var itemDistance=distance/(time/intervalTime);
//     var intervalId = setInterval(function(){
//         distance-=itemDistance;

//         if(distance<=0){
//             clearInterval(intervalId);
//         }
//         $("html,body").scrollTop(distance-itemDistance);
//     },intervalTime);
// })


 

 



