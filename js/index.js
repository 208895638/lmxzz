$(function(){
	var index={
		i:1,//定义ul
		j:1,//定义.box
		init:function(){
			this.bindEvent();
		},
		bindEvent:function(){
			var that=this;
			//顶部nav点击变色
			$(".topBar li a").on("click",function(){
				$(this).find("h4").addClass("on").parents().siblings().find("h4").removeClass("on");
			});
			//第二栏角色详情
			//点击切换觉醒和未觉醒
			$(".perRoles").find(".pagination").find("span").on("click",function(){
				var i=$(this).index();
				$(this).addClass("roleActive").siblings().removeClass("roleActive");
				console.log($(this))
				$(this).parent().siblings().find("img").eq(i).show().siblings().hide();
				
			})
			var time=0;//防止用户连续点击
			$(".next").bind("click",function(){//点击next切换下一个
                var left=$('.box').position().left;//获取遮罩框距离定位上的父级
				var w=76+3+3+16+16;//img的宽度加border加margin
				var ulL=$(".boxs ul").position().left;//获取ul定位上的父级							
				if(left>=w*7){//当box运动到第八个头像时就停止
					that.i++;
					$('.boxs ul').stop().animate({"left":-(that.i-8)*w});
					$(".perRoles").eq(that.i).show().siblings().hide();
					console.log(that.i,that.j);
				}else{
					if(that.j>=8){
						
					}else{
						$('.box').stop().animate({"left":that.j*w});
						$(".perRoles").eq(that.i).show().siblings().hide();
						that.i++;
						that.j++;
						console.log(that.i,that.j);
					}					
				};								
			});
			$(".page h2").hover(function(){
				var left=$('.hehe').position().left;
				var ulL=$("ul").position().left;
				console.log(ulL)
			});
			$(".prev").on("click",function(){//点击切换上一个
            	var left=$('.box').position().left;//获取遮罩框距离定位上的父级
				var w=76+3+3+16+16;//img的宽度加border加margin
				var ulL=$(".boxs ul").position().left;//获取ul定位上的父级
				if(left<=0){//当.box运动到左边时停止
					if(that.i<=1){
						
					}else{
						if(that.i<=1){
							
						}else{
							that.i--;
							$('.boxs ul').stop().animate({"left":-(that.i-1)*w});
							$(".perRoles").eq(that.i-1).show().siblings().hide();
							console.log(that.i,that.j);
						}	
					}								
				}else{
					if(that.j<=0){
						
					}else{
						that.j--;				
						$('.box').stop().animate({"left":(that.j-1)*w});	
						
						that.i--;
						$(".perRoles").eq(that.i-1).show().siblings().hide();
						console.log(that.i,that.j);
					}
					
				}	
			});
//			//角色头像点击跳转到对应的信息
//			$(".boxs ul li").on("click",function(){	
//				var w=76+3+3+16+16;//img的宽度加border加margin
//				var liIndex=$(this).index();
//				that.i=liIndex;
//				that.j=liIndex%8;
//				console.log("i的值是 "+ that.i ,"j的值是 "+ that.j,"li的值是" + liIndex,"取余的值是"+ liIndex%8);
//				$('.box').stop().animate({"left":(that.j)*w});
//			})
		},
		render:function(){
			var that=this;
			
		}
	};
	index.init();
})