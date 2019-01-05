  $(document).ready(function() {

	$('.second-top-panel-hidden').hide();

// 			$('nav').mouseover(function () {
// 	$(this).addClass('widget1');
// });
		

			$(window).scroll(function () {
				if ($(window).scrollTop()>90) {
					$('.second-top-panel-hidden').show('slow', function () {
						$('.second-top-panel-hidden').addClass('fix');
					}); 
				}
				else{

					$('.second-top-panel-hidden').hide('slow',function () {

					$('.second-top-panel-hidden').removeClass('fix');
					
				});
					};
						
			});
		});
			$(window).scroll(function () {
				if($(this).scrollTop()<550){
					 $('.programm').hide('slow');
					 $('.prog1').hide('slow');
					

		 			
		}
		else  if ($(this).scrollTop()>621) {
			 $('.programm').show('slow');
			 $('.prog1').show('slow');
		}



				});
			// 		$(window).scroll(function () {
			// 	if ($(window).scrollTop()>10) {
			// 		$('.second-top-panel').addClass('fix')
					
			// 	}
			// 	else{

				

			// 		$('.second-top-panel').removeClass('fix');}
						
			// });
		// });


