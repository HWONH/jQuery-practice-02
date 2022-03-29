$(document).ready(function(){
    $("#ex_01 #ex_01_title").click(function(){
        $(this).siblings("p[class*='p_0']").css("background","#ffaaff");
    });

    $("#ex_02").change(function(){ /* check!!!!!!!!!!!!! */
        var $total_select=$(this).is(":checked");
        if($total_select==true){
            $(this).attr("checked","checked");
            $("p input[id*='ex_item_0']").attr("checked","checked");
        }else{
            $(this).removeAttr("checked", "checked");
            $("p input[id*='ex_item_0']").removeAttr("checked", "checked");
        }
    });

    $(".ch_03_frame .ch_03_img span").click(function(){
        $(this).closest("div").fadeOut("slow"); /* [개발자 모드]에서 확인해보면 서서히 사라지고 있는 중 */
    });

    var $location=0;
    $("#ex_04 .go").click(function(){
        $(".ch_04_frame .ch_04_01 img").stop().animate({"margin-left":($location+=200)+"px"},1000);
    });
    $("#ex_04 .back").click(function(){
        $(".ch_04_frame .ch_04_01 img").stop().animate({"margin-left":($location-=200)+"px"},1000);
    });
    
    $("#ex_05 .tab_btn > div").click(function(){
        var $index=$(this).index();
        console.log($index);
        var $tab_num=100/$("#ex_05 .tab_btn > div").length;
        console.log($tab_num);
        $("#ex_05 .tab_btn > div").removeClass("activeBtn");
        $(this).addClass("activeBtn");
        $("#ex_05 .tab_btn > .bg_bk").animate({"left":$tab_num*$index+"%"},500);
        $("#ex_05 .tab_box > div").removeClass("activeBox");
        $("#ex_05 .tab_box > div").eq($index).addClass("activeBox");
    });

    $("#ex_06 .title h4 .less, #ex_06 .title p").hide();
    $("#ex_06 .title h4 .more").click(function(){
        $(this).hide();
        $(this).siblings(".less").show();
        $(this).closest(".title").find("p").slideDown();
    });
    $("#ex_06 .title h4 .less").click(function(){
        $(this).hide();
        $(this).siblings(".more").show();
        $(this).closest(".title").find("p").slideUp();
    });
});