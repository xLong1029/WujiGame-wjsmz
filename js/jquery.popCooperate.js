$(document).ready(function(){	
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
	
	
	//弹出商务
	$('.cooperate_btn').on('click',function(){
		$('.pop_cooperate').show();
		popup($('.pop_cooperate'));
	});
});