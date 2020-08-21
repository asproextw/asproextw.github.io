var area_1,area_2,area_3;
var init=["① 選取縣市","② 選取鄉鎮市區","③ 選擇超商門市"];
function type_tip(){
    var choose,type=$("#pay-active").attr("data-payway");
	switch(type){
        case "seven":
            $('#form_select_mengshi').show();
			$('#add-1').hide();
            break;
        case "family":
            $('#form_select_mengshi').show();
			$('#add-1').hide();
            break;
        default:
            $('#form_select_mengshi').hide();
			$('#add-1').show();
    }
	choose=init;
    $("#area select").each(function(idx){	
        $(this).html("<option value='none'>"+choose[idx]+"</option>");
        if(idx==0){
            switch(type){
                case "seven": roc_711();break;
                case "family": roc_qj();break;
                default:roc();
            }
            for(var i=0;i<area_1.length;i++){
				$("<option value="+area_1[i]+">"+area_1[i]+"</option>").appendTo($(this));
            }
        }
    });
}
var idx=[-1,-1,-1];
$(document).ready(function() {
    type_tip();
    $("#area select").on("change",function selectonchange(){
        var type=$("#pay-active").attr("data-payway");
        $(this).nextAll("select").find("option:gt(0)").remove();
        $("#area select").each(function(index){
            idx[index]=$(this).find('option:selected').index()-1;
        })
        var current_idx=$(this).index();
        var area=current_idx<2?eval("area_"+(current_idx+2)):[];
        var arr=area[idx[0]]||[];
        if(type!="default"){
            if(current_idx==1){
                arr=area[idx[0]][idx[1]];
            }
            if(current_idx==2){
                arr=area_3[idx[0]][idx[1]][idx[2]];
            }
        }else{
            if(current_idx==1){
                arr=area[idx[1]];
            }
        }
		var citycho=$("#form_select_city").val();
		var areacho=$("#form_select_area").val();
		var numinput=$("#add-1").val();
		var val=citycho+areacho+numinput;
        if (typeof(arr) != "undefined")
        {
            if(arr.constructor==Array){
                if(arr[0].constructor==String){
                    for(var i=0;i<arr.length;i++){
                        $("<option value="+arr[i]+">"+arr[i]+"</option>").appendTo($(this).next());
                    }
                }
                else{
                    for(var j in arr){
                        var name=arr[j]["POIName"]||arr[j]["name"];
                        var addr=arr[j]["Address"]||arr[j]["addr"];
                        var val='【'+name+'】 '+addr;
                        $("<option value='"+val+"'>"+val+"</option>").appendTo($(this).next());
                    }
                }
            }
            if(arr.constructor==Object){
                var name=arr["POIName"] || arr["name"];
                var addr=arr["Address"] || arr["addr"];
                var pid=arr["POIID"] || arr["pkey"];
                var tel=arr["Telno"] || arr["tel"];
                var val;				
                if(type=="seven"){
                    val="【7-11】"+name+"店 門市店號："+pid;
                }else{
                    val="【全家】"+name+" 門市店號："+pid;
				}
            }
        }
		$(".ModalAddress").val(val);
    });
    $("#pay-way-btn li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $("#pay-way-btn li").attr("id", "");
        $(this).attr("id", "pay-active");
        type_tip();
    });
    $("#form_select_city").change(function() {
        var scity=$("#form_select_city").val();
        var shipping_province = "/連江縣|澎湖縣|金門縣/";
        if (shipping_province.search(scity)!=-1) {
			$('#fee').css('color','red');
            $('#fee').text('注意！離島地區需另外支付運費  NT200');
        }else{
            $('#fee').text('');
        }
    });
    $("#form_select_area").change(function() {
        var sarea=$("#form_select_area").val();
        var shipping_province = "/綠島鄉|琉球鄉/";
        if (shipping_province.search(sarea)!=-1) {
			$('#fee').css('color','red');
            $('#fee').text('注意！離島地區需另外支付運費  NT200');
        }else{
            $('#fee').text('');
        }
    });
});