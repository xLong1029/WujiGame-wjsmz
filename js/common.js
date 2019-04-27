$(document).ready(function(){
	//新闻
	$("#newsTab").tabso({
		cntSelect:"#newsCont",
		tabEvent:"mouseover",
		tabStyle:"move-animate",
		direction : "left"
	});
	
	//轮播banner
	$('#slideBanner').slideBox({
		duration : 0.3,//滚动持续时间，单位：秒
		easing : 'linear',//swing,linear//滚动特效
		delay : 5//滚动延迟时间，单位：秒
	});
	
	//合作伙伴
	var partnerHeight = 67,
        partnerLen = Math.ceil($('#par_slider a').length / 7),
        partnerIndex = 0;
	if (partnerLen > 1) {
		$('#par_slider').append($('#par_slider').html());
		function partnerScrollFn(){
		  if (partnerIndex >= partnerLen) {
			$('#par_slider').scrollTop(0);
			partnerIndex = 0;
		  }
		  partnerIndex ++;
		  $('#par_slider').animate({
			scrollTop: partnerIndex * partnerHeight
		  }, 300)
		  setTimeout(partnerScrollFn, 3000);
		}
		setTimeout(partnerScrollFn, 3000);
	}
	
	//弹出层
	function popup(obj){
		var winH=$(window).innerHeight();
		var objH=obj.height();
		$('.mask').height($(document).innerHeight()).fadeTo(300,0.85);
		obj.css({"top":(winH - objH)/2}).fadeIn(0);
	}
	function popclose(obj){
		$('.mask').fadeOut();
		obj.fadeOut(0);
	}
	function popcloseNoFadeOut(obj){
		obj.fadeOut(0);
	}
	
	$('.pop_close').on('click',function(){
		var obj=$(this).parent();
		if(obj.hasClass('pop_vortex')){
			$('.vortex_box').hide();
		}
		popclose(obj);
	});
	
	//弹出图片
	$('.vortex li a').on('click',function(){
		var obj=$(this).data('pop');
		$('#vortex_box_'+obj).show();
		popup($('.pop_vortex'));
	});
	
	//弹出注册
	$('.register_btn').on('click',function(){
		$('.pop_reg').show();
		popup($('.pop_reg'));
	});
	
	//弹出礼包
	$('.gift_btn').on('click',function(){
		$('.pop_gift').show();
		popup($('.pop_gift'));
	});
	//复制暗号
	var clipboard = new Clipboard('.btn_copy', {
		text: function() {
			var text = document.getElementById('anhaoma').textContent;
			return text;
		}
	});

	clipboard.on('success', function(e) {
		alert('暗号复制成功！粘贴即可使用。');
	});

	clipboard.on('error', function(e) {
		alert('啊喔！该浏览器不支持复制功能，请自行输入暗号，谢谢。');
	});	
	
	//弹出客服
	$('.service_btn').on('click',function(){
		$('.pop_service').show();
		popup($('.pop_service'));
	});
	
	//弹出商务
	$('.cooperate_btn').on('click',function(){
		$('.pop_cooperate').show();
		popup($('.pop_cooperate'));
	});
	
	//下载按钮统计
	$(".btn_android").click(function(){
		_czc.push(['_trackEvent', 'PC端安卓包', '游戏下载', 'pc官网']);
	});
	
	$(".btn_ios").click(function(){
		_czc.push(['_trackEvent', 'PC端ios包', '游戏下载', 'pc官网']);
	});
});