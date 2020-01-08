

 if($(window).width()>=768){
    // pc端 移入 移出效果 
    $('#list>.row>.col-md-6 .cover').each(function(){
        var $this = $(this)
        $this.mouseenter(function(){
            $(this).find('a').show(300)
        })
        $this.mouseleave(function(){
            $(this).find('a').hide(300)
        })
    })

    $('#list>.row>.col-lg-3 .cover').each(function(){
        var $this = $(this)
        $this.mouseenter(function(){
            $(this).find('a').show(300)
        })
        $this.mouseleave(function(){
            $(this).find('a').hide(300)
        })
    })
 }


// 根据不同的分辨率加载不同的图片

 if($(window).width()<767){
    $('#list>.row>.item').each(function(){
        var $this = $(this)
        $this.find('.cover-container>img').attr('src','/assets/images/item'+($this.index()+1)+'.png')
    })
}else if($(window).width()>=768){
    $('#list>.row>.item').each(function(){
        var $this = $(this)
        $this.find('.cover-container>img').attr('src','/assets/images/index'+($this.index()+1)+'.png')
    })
}






