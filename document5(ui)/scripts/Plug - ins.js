;(function($){
    $.fn.tab = function(options){
        var defaults = {
            //各种参数，各种属性
        }
        var options = $.extend(defaults,options);
        this.each(function(){
            //各种功能  //可以理解成功能代码
            var _this = $(this);
            _this.find('li>a').click(function(e){
            e.preventDefault();
            $(".tabs li").removeClass("current");
            $(this).parent().addClass("current");
            $(".contain div").removeClass("show");
            $("#" + $(this).attr("name")).addClass("show");
            });
        });
        return this;
    }
    $.fn.dialog = function(options){
        var defaults={

        }
        var options = $.extend(defaults,options);
        this.each(function(){
            //各种功能  //可以理解成功能代码
            var _this = $(this);
            _this.click(function(){     
                $("#mask").css("height","100%");   
                $("#mask").css("width","100%");               
                $(".dialog").addClass("dialogshow");     
                $(".dialog").css("position","fixed");
            })
            $("#btn1").click(function(){
                $("#mask").css("height",0);   
                $("#mask").css("width",0);
                $(".dialog").removeClass("dialogshow");
            })
            $("#btn2").click(function(){
                $("#mask").css("height",0);   
                $("#mask").css("width",0);      
                $(".dialog").removeClass("dialogshow");        
            })
        });
        return this;
    }
    $.fn.slider = function(options){
        var defaults = {
            //各种参数，各种属性
        }
        var options = $.extend(defaults,options);
        this.each(function(){
            //各种功能  //可以理解成功能代码
            $(function(){
        var num = 0;
        var timer=null;
        go();
        $(".slider").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
            clearInterval(timer);//移动进去时清除定时器
        }).mouseleave(function(){
            go();//移出后执行go函数
        });

        $(".spanlist").eq(0).css("backgroundColor"," gray");
        function go(){
            timer=setInterval(function(){
            num++;
            if(num>4){
                num=1;
                $(".images").css("margin-left","0px")
            }
            if(num==4){
                $(".spanlist").css("backgroundColor","white")
                $(".spanlist").eq(0).css("backgroundColor","gray");
            }
            else{
                $(".spanlist").css("backgroundColor","white");
                $(".spanlist").eq(num).css("backgroundColor","gray");
            }
            $(".images").animate({"marginLeft":-600*num+"px"},580);//使用animate实行运动功能
            
            },2000);
        };
        $(".spanlist").each(function(index){
            $(this).click(function(){
                num=index;
                $(".spanlist").css("backgroundColor","white");
                $(".spanlist").eq(num).css("backgroundColor","gray");
                $(".images").animate({"marginLeft":-600*num+"px"},580);
            })
        })
        $(".btn-right").click(function(){
                if(num<=4){
                    num++;
                }
                if(num>4){
                    num=1;
                    $(".images").css("margin-left","0px");
                }
                if(num==4){
                    $(".spanlist").css("backgroundColor","white");
                    $(".spanlist").eq(0).css("backgroundColor","gray");
                }
                else{
                    $(".spanlist").css("backgroundColor","white");
                    $(".spanlist").eq(num).css("backgroundColor","gray");
                }
                $(".images").stop().animate({"marginLeft":-600*num+"px"},200);
    
            });
            $(".btn-left").click(function(){
                if(num>=0){num--;}
                if(num<0){
                    num=3;
                    $(".images").css("margin-left","-2400px")
                    $(".spanlist").css("backgroundColor","white");
                    $(".spanlist").eq(3).css("backgroundColor","gray");
                }
                else{
                    $(".spanlist").css("backgroundColor","white");
                    $(".spanlist").eq(num).css("backgroundColor","gray");
                }
                $(".images").stop().animate({Left:"250px"},200);
            });
        })
    })
    }
    $.fn.select = function(options){
    var defaults = {
        //各种参数，各种属性
    }
    var options = $.extend(defaults,options);
    this.each(function(){
        //各种功能  //可以理解成功能代码
        var _this = $(this);
        $('.select input').on('click',function(){
            if($('.select .city').is('.hide')){
                $('.select .city').removeClass('hide');
            }else{
                $('.select .city').addClass('hide');
            }
        })
        $('.select ul li').on('click',function(){
            console.log($(this).html(), '$(this).html()');
            $('.select input').val($(this).html());
            $('.select .city').addClass('hide');
            $('.select input').css('border-bottom','1px solid $d6d6d6');
        })
        $('.select ul li').hover(
            function(){
                $(this).css({'backgroundColor':'#fd9','font-size':'24px'});
            },function(){
                $(this).css({'backgroundColor':'#fff','font-size':'16px'});
            }
        )
    });
    return this;
    }
    $.fn.checkbox = function(options){
        var defaults = {
            //各种参数，各种属性
        }
        var options = $.extend(defaults,options);
        this.each(function(){
            //各种功能  //可以理解成功能代码
            $(".Radio1").click(function(){
                $(".radio").removeAttr("checked");
                $(".Radio").css("background-image","url(false.png)");
                $(".Radio1").css("background-image","url(ture.png)");
                $("#man").attr("checked","checked");
                
            })
            $(".Radio2").click(function(){
                $(".radio").removeAttr("checked");
                $(".Radio").css("background-image","url(false.png)");
                $(".Radio2").css("background-image","url(ture.png)");
                $("#girl").attr("checked","checked");
                
            })
        });
    }
})(jQuery)
