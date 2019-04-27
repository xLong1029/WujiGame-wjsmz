$(function(){
	var focusBanner=function(){
		var $focusBanner=$("#data_banner"),
			$bannerList=$("#data_banner_li li"),
			$focusHandle=$(".focus_handle"),
			$bannerImg=$(".data_banner_img"),
			$prevBnt=$("#data_next_img"),
			$nextBnt=$("#data_prev_img"),
			$focusBubble=$("#focus_dot"),
			bannerLength=$bannerList.length,
			_index=0,
			_timer="";

			var _height=$(".data_banner_img").find("img").height();

			for(var i=0; i<bannerLength; i++){
				$bannerList.eq(i).css("zIndex",bannerLength-i);
				$focusBubble.append("<li></li>");
			}
			$focusBubble.find("li").eq(0).addClass("current");
			var bubbleLength=$focusBubble.find("li").length;
			$focusBubble.css({
				"width":bubbleLength*30,
				"marginLeft":-bubbleLength*15
			});//初始化

			$focusBubble.on("click","li",function(){
				$(this).addClass("current").siblings().removeClass("current");
				_index=$(this).index();
				changeImg(_index);
			});//点击轮换
			/*
			$nextBnt.on("click",function(){
				_index++;
				if(_index>bannerLength-1){
					_index=0;
				}
				changeImg(_index);
			});//下一张

			$prevBnt.on("click",function(){
				_index--;
				if(_index<0){
					_index=bannerLength-1;
				}
				changeImg(_index);
			});//上一张*/

			function changeImg(_index){
				$bannerList.eq(_index).fadeIn(250);
				$bannerList.eq(_index).siblings().fadeOut(200);
				$focusBubble.find("li").removeClass("current");
				$focusBubble.find("li").eq(_index).addClass("current");
				clearInterval(_timer);
				_timer=setInterval(function(){
					/*$nextBnt.click()*/
					_index++;
					if(_index>bannerLength-1){
						_index=0;
					}
					changeImg(_index);
					},4000)
			}//切换主函数
			_timer=setInterval(function(){
				/*$nextBnt.click()*/
				_index++;
				if(_index>bannerLength-1){
					_index=0;
				}
				changeImg(_index);
				},4000)
	}();
});