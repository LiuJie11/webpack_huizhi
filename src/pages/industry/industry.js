$('.tabs>li').each(function(){
    var $this = $(this)
    $this.bind('click',function(){
        if(!$this.hasClass('tab')){
            $this.siblings().removeClass('tab')
            $this.addClass('tab')
        }
    })
})