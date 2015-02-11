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

				$("#dialog").removeClass("hidden").animate(
					{"opacity": "0.7"}, 3000
				);
				$(".dialog").animate(
					{"opacity": "1"}, 3000
				);
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
						window.location.href = "http://www.google.com";
					}}];

	sessionManage.initial(eventArr);
});