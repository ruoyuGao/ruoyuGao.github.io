// JavaScript Document

 /*!***********************Jquery_image fade*****************************
 * jQuery JavaScript Library
 * Copyright 2011, Zhang Ziyang
 */
$(document).ready(function() {
    $('.photo').cycle({
		    fx:    'fade', 
			delay: -5000 
	});
	
});

 /*!***********************Jquery_leaf change container*****************************
 * jQuery JavaScript Library
 * Copyright 2011, Zhang Ziyang
 */
$(document).ready(function(){	   
	
		$(".home").toggle(function(){
			$(".leaf.one").hide(300);
			$(".leaf.two").show(300);
		},
		function(){
			$(".leaf.one").show(300);	
			$(".leaf.two").hide(300);
			
		}); 



 /*!***********************Jquery_float DIV*****************************
 * jQuery JavaScript Library
 * Copyright 2011, Zhang Ziyang
 */

	var w = screen.availWidth/2;
	var h = screen.availHeight/2;
	
	if ($.browser.safari||$.browser.chrome||$.browser.opera||$.browser.mozilla){
	
	$(".icon img").click(function(){							  
				$(".float").fadeIn(300).css({"left":w-400,"top":'10%'});
				$(".container,.home").fadeOut(300);
								  })
	$(".close").click(function(){
				$(".container,.home").fadeIn(300);
				$(".float").fadeOut(300);
							   });
	}
	else{
	 
	$(".icon img").click(function(){							  
				$(".float").show().css({"left":w-385,"top":'10%'});
				$(".container,.home").hide();
								  })
	$(".close").click(function(){
				$(".container,.home").show();
				$(".float").hide();
							   });
	
	}


	$(".icon img").hover(function(){$(this).addClass("hover")},
						  function(){$(this).removeClass("hover")}
						  )	
	$(".image img").click(function(){
							  var src = $(this).attr("src");		
							  var img = $("<img/>")
							  .css({"width":600,"height":430})
							  .attr({ 
										src: src,
										title: "image",
										alt: "image"
									  })
							  $(".imgBody").html(img);
							  $(".imgZoom").fadeIn(200).css({"left":w-310,"top":'15%'});
							  $("#floatBoxBg").fadeTo(200,0.4);	  
						   })
	
	$(".closeDiv").click(function(){
		$(".imgZoom").hide();
		$("#floatBoxBg").hide();	  
								   });
}); 
