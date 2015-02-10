$(function(){
	
	var sessionManage = {

		initial: function(){

			setTimeout(function(){

				$("#dialog").show().animate({

					opacity: .7,
					duration: 5000,
					specialEasing: {
						width: "linear",
						height: "easeOutBounce"
					}
				});
			},3000);
		}
	};

	sessionManage.initial();
});