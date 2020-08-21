$(document).ready(function() {
	$("#gototop").hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$("#gototop").fadeIn(1500);
		}else {
			$("#gototop").fadeOut(1000);
		}
	});
	$("#gototop").click(function () {
		$('body,html').animate({ scrollTop: 0 }, 1000);
		return false;
	});
});
bootstrapValidate('#username', 'username:');
bootstrapValidate('#email', 'email:');
bootstrapValidate('#telephone', 'mobilephone:');
bootstrapValidate('#searchtel', 'mobilephone:');
bootstrapValidate('#remark', 'remark:');
$('.choose-image').attr('class', 'choose-image');
$('.choose-image').eq(0).attr('class', 'choose-image NumTol');
var initTotalMoney = $('.choose-image').eq(0).attr('date-money');
$('.TotalPrice').text(initTotalMoney);
$('.choose-image').on('click', function () {
	$('.choose-image').attr('class', 'choose-image');
	$(this).attr('class', 'choose-image NumTol');
	var packageName = $(this).attr('title');
	var packageMoeny = $(this).attr('data-money');
	var number = $('.quantity').val();
	var totalMoney = packageMoeny * number;
	$(".ModalNumber").text(number);
	$('.TotalPrice').text(totalMoney);
	$(".ModalTotalMoney").text(totalMoney);
	$('.ModalProduct').val(packageName);
	$(".ModalProduct").text(packageName);
});
function calculation(index) {
	var number = $('.quantity').val();
	if (index) {
		number = number*1 + index > 0 && number < 3 ? number*1 + index : 1;
		$('.quantity').val(number);
		$('#number').val(number);
	}
	var packageMoeny = $('.NumTol').attr('data-money');
	var totalMoney = packageMoeny * number;
	$('.TotalPrice').text(totalMoney);
	$(".ModalTotalMoney").text(totalMoney);
	$(".ModalNumber").text(number);
	
}
$("#marquee-buy").kxbdMarquee({isEqual:false});			
$("#marquee-out").kxbdMarquee({isEqual:false});
function ShowTime(){
	 var objD = new Date();
	 var mo = objD.getMonth()+1;
	 var da = objD.getDate();
	 var hh = objD.getHours();
	 var mm = objD.getMinutes();
	 var ss = objD.getSeconds();
	 var str =(hh<10 ? '0' : '') + hh + ':' + (mm<10 ? '0' : '') + mm + ':' + (ss<10 ? '0' : '') +ss;
	 $("#newtime").html(str);
	 setTimeout("ShowTime()", 1000);
}
$('#submit').on('click', function () {
	 var ob = new Date();
	 var mmo = ob.getMonth()+1;
	 var dda = ob.getDate();
	 var hhh = ob.getHours();
	 var mmm = ob.getMinutes();
	 var sss = ob.getSeconds();
	 var sstr =( mmo<10 ? '0' : '') + mmo + (dda<10 ? '0' : '') + dda + (hhh<10 ? '0' : '') + hhh + (mmm<10 ? '0' : '') + mmm + (sss<10 ? '0' : '') +sss;	
	var ModalCats = "No-"+sstr+"-01";
	var ModalName = $("#username").val();
	var ModalTel = $("#telephone").val();
	$(".ModalCats").text(ModalCats);
	$(".ModalTime").text(sstr);
	$(".ModalName").text(ModalName);
	$(".ModalTel").text(ModalTel);
});
function yes(){ 
    $('#success').fadeIn(1500);
    $('#success').slideUp(1500,function() {
        $('.close').click();
        $("#gototop").click(); 
    });
    
}
$(function(){
	var timeId = setInterval(play,3000);
	function play(){
		$(".buyerlist ul").animate({"marginTop": "-30px"},600, function() {
			$(this).css({"marginTop":0}).children("li:first").appendTo(this);
		});
	}
});