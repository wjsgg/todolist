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
                $("#mask").animate({opacity:'0.8'},500);
                $(".dialog").addClass("dialogshow");  
                $(".dialog").animate({opacity:'1',top:'200px'},300,function(){})   
                $(".dialog").css("position","fixed");
            })
            $("#btn1").click(function(){
                $("#mask").css("height",0);   
                $("#mask").css("width",0);
                $("#mask").animate({opacity:'0.4'});
                $(".dialog").animate({top:'-200px'},300,function(){
                    $(".dialog").removeClass("dialogshow");
                })
            })
            $("#btn2").click(function(){
                $("#mask").css("height",0);   
                $("#mask").css("width",0);
                $("#mask").animate({opacity:'0.4'});
                $(".dialog").animate({top:'-200px'},300,function(){
                    $(".dialog").removeClass("dialogshow");
                })
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
        _this.click(function(){
            $(".list").css("display","block").animate({top:'-95px'},300);
            $(".transparentbox").css("display","block");
        });
        $(".list li").click(function(){
            $(".list").animate({top:'95px'},200,function(){
                $(".list").css("display","none")
                $(".transparentbox").css("display","none");
            })       
            var text=$(this).text();
            $(".model-select-text").text(text).css("color","rgb(56, 55, 55)")
        })
        $(".transparentbox").click(function(){
            $(".list").animate({top:'95px'},200,function(){
                $(".list").css("display","none")
                $(".transparentbox").css("display","none");
            })
        })
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
                $(".Radio").css("background-image","url(false.png)");
                $(".Radio1").css("background-image","url(ture.png)");
            })
            $(".Radio2").click(function(){
                $(".Radio").css("background-image","url(false.png)");
                $(".Radio2").css("background-image","url(ture.png)");
            })
        });
    }
})(jQuery)
