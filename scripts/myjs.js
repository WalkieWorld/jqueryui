$(function(){
	
	var sessionManage = {

		initial: function(eventArr){

			eventArr.forEach(function(curVal, index, arr){

				sessionManage.addEvent(curVal.handle, curVal.event, curVal.myFun);
			});

			this.renewSession();
		},

		renewSession: function(){

			setTimeout(function(){

				$("#dialog").show().animate({

					opacity: .7,
					duration: 5000,
					specialEasing: {
						width: "linear",
						height: "easeOutBounce"
					}
				});
			},10000);
		},

		addEvent: function(handle, event, myFunction){
			
			handle.on(event, myFunction);
		}
	};

	var eventArr = [{handle: $("#stay"), event: "click", myFun: function(){
						$("#dialog").hide();
						sessionManage.renewSession();
					}},
					{handle: $("#exit"), event: "click", myFun: function(){
						
					}}];

	sessionManage.initial(eventArr);
});