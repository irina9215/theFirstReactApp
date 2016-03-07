// `#box` 元素进行 2 秒的动画
	// TweenMax.to("#box",2,{
	// 	css:{
	// 		left:"200px",
	// 		opaccity:0,
	// 	},

	// });

// TweenMax.fromTo(object,duration,optionsFrom,optionsTo)
	TweenMax.fromTo("#box",12, {
	    // from
	    css: {
	      transform:"rotate(0deg)",
	    }
	  },{
	    // to
	    css: {
	      transform:"rotate(180deg)",
	    },

	    // 永久重复动画的选项
	    repeat: -1,

	    // 反转、重新运行动画的选项
	    yoyo: true,

	    // 改变 easing 类型
    	ease: Power2.easeInOut,
	  }
	);
	// function AnimationRobot () {
	// 	var t = new TimelineMax({yoyo: true, repeat: -1});
 //    	t.to("#robot",1,{bottom:"-10px"})
 //    	.to("#robot",5,{bottom:"-20px"})
 //    	.to("#robot",1,{bottom:"0px"})
	// }
 //   AnimationRobot()
	// var deg360 = 2*Math.PI;
	// document.getElementsByTagName('')
	// var $box = document.getElementById('box');
	// // 时间计数器
	// //var tick = 0;
	// var start = null;
	// function draw (time) {
	// 	//'time'以毫秒表示当前时间
	// 	if (!start) {
	// 		start = time;
	// 	};
	// 	var second = (time-start)/1000;
	// 	//当前位置
	// 	var x = Math.sin(second*deg360)*100;
	// 	$box.style.left = x + "px";

	// 	//tick++;

	// 	//设置计时器在16ms后重绘
	// 	//setTimeout(draw,1000/60);
	// 	//}	

	// 	//与浏览器同步重绘
	// 	requestAnimationFrame(draw);
	// }
	// requestAnimationFrame(draw);
