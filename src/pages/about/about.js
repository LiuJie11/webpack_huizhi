  // 创建地图实例
  var map = new AMap.Map("map", {
    resizeEnable: true, //是否监控地图容器尺寸变化
    zoom:11, //初始化地图层级
    center: [113.0381470000,28.1838270000] //初始化地图中心点
 });

 // 自定义图标
var marker = new AMap.Marker({
    position: map.getCenter(),
    icon: "/assets/images/markers.png",
    offset: new AMap.Pixel(-13, -30)
});



marker.setMap(map);

// 设置鼠标划过点标记显示的文字提示
marker.setTitle('人民东路458号仁和香缇雅境');
// 自定义文本
var StrHtml = ` <div class="site-box">
        <div class="site-left">
                <img src="/assets/images/pc-tip.png" alt="">
        </div>
        <ul class="site-right">
            <li>
                <div class='img'>
                    <img  src="/assets/images/pc-site.png" alt="">
                </div>
                <div>
                    <p>湖南省长沙市芙蓉区东屯渡街道</p>
                    <p>人民东路458号仁和香缇雅境</p>
                </div>
            </li>
            <li>
                <div class='img'>
                     <img src="/assets/images/pc-phone.png" alt="">
                </div>
                <div>18878789989</div>
            </li>
            <li>
                <div class='img'>
                    <img src="/assets/images/pc-call.png" alt="">
                </div>
                <div>0731-89677267</div>
            </li>
        </ul>
    </div> `
    // console.log($(window).width())
    if($(window).width()>=768){
        marker.setLabel({
        offset: new AMap.Pixel(-300, -220),  //设置文本标注偏移量
        content: StrHtml, //设置文本标注内容
        direction: 'right' //设置文本标注方位
    });
    }