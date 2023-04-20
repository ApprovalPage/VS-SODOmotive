
var endAnim = false;

function init() {
	preloadAssets();
}

function preloadAssets() {

	loadImage([
		'frame1.jpg',
		'frame2.jpg',
		'frame3.jpg',
		'frame4.jpg',
		'frame5.jpg',
		'frame6.jpg',
		'sprite.png'
	], startAdProper);
}

function addImages(){
	$('#collapsed #frame1').src = 'frame1.jpg';
	$('#collapsed #frame2').src = 'frame2.jpg';
	$('#collapsed #frame3').src = 'frame3.jpg';
	$('#collapsed #frame4').src = 'frame4.jpg';
	$('#collapsed #frame5').src = 'frame5.jpg';
	$('#collapsed #frame6').src = 'frame6.jpg';
}

function callMouseOver(){
	$('#collapsed #bgclick').onmouseover = function(){
	  addClass($('#collapsed #ctaOver'), 'show');
  };

  $('#collapsed #bgclick').onmouseout = function(){
	  removeClass($('#collapsed #ctaOver'), 'show');
  };
}

function linesEnter(frame) {
	setTimeout(function(e){
		if(frame === 1 || frame === 3 || frame === 5){
			// removeClass($('#leftline'), 'leftlinePreEntrance');
			// removeClass($('#rightline'), 'rightlinePreEntrance');
			// removeClass($('#topline'), 'toplinePreEntrance');
			// removeClass($('#bottomline'), 'bottomlinePreEntrance');

		}

		switch(frame){
			case 1: removeClass($('#split1'), 'hide');  
							removeClass($('#split2'), 'hide');  
							break;
			case 3: 
/*							addClass($('#split1'), 'split1Move'); 

							addClass($('#split2'), 'split2Move'); 
							snakeLinesForm2nd();

							setTimeout(function(){
								addClass($('#split1'), 'hide'); 
							}, 100);
							
							setTimeout(function(){
								removeClass($('#split3'), 'hide'); 
								removeClass($('#split5'), 'hide'); 
								addClass($('#split2'), 'hide'); 
							}, 300);

							setTimeout(function(){
								addClass($('#split3'), 'animateLines'); 
								addClass($('#split5'), 'animateLines'); 
							}, 400);
							*/

							break;
			case 5: addClass($('#split5'), 'hide');
							/*addClass($('#split5'), 'split5Move');
							snakeLinesForm3rd();
							addClass($('#split3'), 'split3Move'); 
							setTimeout(function(){
								removeClass($('#split4'), 'hide'); 
								removeClass($('#split4'), 'split4Move'); 
							}, 50);
							*/
							break;
			default: break;
		}

		if(frame > 1){
			removeClass($('#frame' + frame), 'textRight');

			setTimeout(function(e){
				removeClass($('#frame' + (frame - 1)), 'animatePan');
				setTimeout(function(){
					addClass($('#frame' + (frame - 1)), 'animate');
					addClass($('#frame' + (frame - 1)), 'textLeft');
				}, 30);

				setTimeout(function(e){
					removeClass($('#frame' + (frame)), 'animate');

					setTimeout(function(e){
						addClass($('#frame' + (frame)), 'animatePan');
						addClass($('#frame' + (frame)), 'framePan');
					}, 10);
				}, 530);
			}, 70);
		}else{
			removeClass($('#frame' + (frame)), 'animate');

			setTimeout(function(e){
				addClass($('#frame' + (frame)), 'animatePan');
				addClass($('#frame' + (frame)), 'framePan');
			}, 50);
		}

	}, 100);
}

function linesExit(frame) {
	setTimeout(function(e){
		if(frame === 2 || frame === 4){
			// addClass($('#leftline'), 'leftlinePreEntrance');
			// addClass($('#rightline'), 'rightlinePreEntrance');
			// addClass($('#topline'), 'toplinePreEntrance');
			// addClass($('#bottomline'), 'bottomlinePreEntrance');

		}

		// switch(frame){
		// 	case 2: addClass($('#textf1'), 'hide'); /*addClass($('#textb1'), 'hide');*/ break;
		// 	case 4: addClass($('#textf2'), 'hide'); /*addClass($('#textb2'), 'hide');*/ break;
		// 	default: break;
		// }

		// setTimeout(function(e){
		// 	removeClass($('#frame' + frame), 'textRight');
		// }, 600);


	}, 100);

	// setTimeout(function(e){
	// 	addClass($('#frame' + frame + 'Text'), 'hide');
	// }, 100);

	// setTimeout(function(e){
	// 	addClass($('#frame' + frame), 'hide');
	// }, 600);
}

function resetLines(){
	removeClass($('#leftline'), 'animate');
	removeClass($('#rightline'), 'animate');
	removeClass($('#topline'), 'animate');
	removeClass($('#bottomline'), 'animate');

	setTimeout(function(){
		removeClass($('#leftline'), 'leftlinePreExit');
		removeClass($('#leftline'), 'leftlineAfterExit');
		removeClass($('#rightline'), 'rightlinePreExit');
		removeClass($('#rightline'), 'rightlineAfterExit');
		removeClass($('#topline'), 'toplinePreExit');
		removeClass($('#topline'), 'toplineAfterExit');
		removeClass($('#bottomline'), 'bottomlinePreExit');
		removeClass($('#bottomline'), 'bottomlineAfterExit');

		addClass($('#leftline'), 'leftlinePreEntrance');
		addClass($('#leftline'), 'leftlineAfterEntrance');
		addClass($('#rightline'), 'rightlinePreEntrance');
		addClass($('#rightline'), 'rightlineAfterEntrance');
		addClass($('#topline'), 'toplinePreEntrance');
		addClass($('#topline'), 'toplineAfterEntrance');
		addClass($('#bottomline'), 'bottomlinePreEntrance');
		addClass($('#bottomline'), 'bottomlineAfterEntrance');

		setTimeout(function(){
			addClass($('#leftline'), 'animate');
			addClass($('#rightline'), 'animate');
			addClass($('#topline'), 'animate');
			addClass($('#bottomline'), 'animate');
		}, 50);
	}, 50);	
}

function snakeLinesForm(){
	setTimeout(function(){
		removeClass($('#bottomlineret'), 'bottomlinePreEntranceret');
	}, 200);

	setTimeout(function(){
		removeClass($('#rightlineret'), 'rightlinePreEntranceret');
	}, 400);

	setTimeout(function(){
		removeClass($('#toplineret'), 'toplinePreEntranceret');
	}, 600);

	setTimeout(function(){
		removeClass($('#leftlineret'), 'leftlinePreEntranceret');
	}, 800);

}

function snakeLinesForm2nd(){
	addClass($('#bottomlineret'), 'bottomline2ndframe');
	addClass($('#rightlineret'), 'rightline2ndframe');
	addClass($('#toplineret'), 'topline2ndframe');
	addClass($('#leftlineret'), 'leftline2ndframe');
}

function snakeLinesForm3rd(){
	removeClass($('#bottomlineret'), 'bottomline2ndframe');
	removeClass($('#rightlineret'), 'rightline2ndframe');
	removeClass($('#toplineret'), 'topline2ndframe');
	removeClass($('#leftlineret'), 'leftline2ndframe');

	addClass($('#bottomlineret'), 'bottomline3rdframe');
	addClass($('#rightlineret'), 'rightline3rdframe');
	addClass($('#toplineret'), 'topline3rdframe');
	addClass($('#leftlineret'), 'leftline3rdframe');
}

function snakeLines(){
	setTimeout(function(){
		removeClass($('#bottomline'), 'bottomlinePreEntrance');
	}, 200);

	setTimeout(function(){
		removeClass($('#rightline2'), 'rightlinePreEntrance2');
	}, 400);

	setTimeout(function(){
		removeClass($('#rightline'), 'rightlinePreEntrance');
	}, 600);

	setTimeout(function(){
		removeClass($('#topline'), 'toplinePreEntrance');
	}, 800);

	setTimeout(function(){
		removeClass($('#leftline'), 'leftlinePreEntrance');
	}, 1000);

	// setTimeout(function(){
	// 	removeClass($('#leftline2'), 'leftlinePreEntrance2');
	// }, 1200);
}

function startAnimation(){
	snakeLinesForm();
	linesEnter(1);
	removeClass($('#visitlogo'), 'hide');

	setTimeout(function(){
		linesExit(1);
	}, 2000);

	setTimeout(function(){
		linesEnter(2);
	}, 2600);

	setTimeout(function(){
		linesExit(2);
	}, 4600);

	setTimeout(function(){
		linesEnter(3);
	}, 5200);

	setTimeout(function(){
		linesExit(3);
	}, 7200);

	setTimeout(function(){
		linesEnter(4);
	}, 7800);

	setTimeout(function(){
		linesExit(4);
	}, 9800);

	setTimeout(function(){
		linesEnter(5);
	}, 10400);

	setTimeout(function(){
		removeClass($('#frame6'), 'hide');
		
		removeClass($('#cta'), 'hide');
		callMouseOver();
		// lines?
		setTimeout(snakeLines, 100);
	}, 13400);
}

function startAdProper() {

	removeClass($('#mainContainer'), 'start');

	addImages();

	startAnimation();

	$('#collapsed #bgclick').onclick = function(){
		window.open(window.clickTag);
	}
}

init();
