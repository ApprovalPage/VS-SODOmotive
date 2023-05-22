(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"VS_SODOmotive_300x600_atlas_P_1", frames: [[0,0,300,600],[302,0,300,600]]},
		{name:"VS_SODOmotive_300x600_atlas_NP_1", frames: [[0,0,300,307],[302,0,300,307],[604,0,300,307],[906,0,300,307],[1208,0,300,307],[1510,0,300,307],[0,309,300,307],[302,309,300,307],[604,309,300,307],[906,309,300,307],[1208,309,300,307],[1510,309,300,307]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._300x600VSlogowhite = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600VStvlogo = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer10 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer11 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer12 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer5 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer6 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer7 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer8 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Layer9 = function() {
	this.initialize(ss["VS_SODOmotive_300x600_atlas_NP_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.VS_SODOmotive_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [86,90];
	// timeline functions:
	this.frame_86 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==3){
		this.stop();
		}
		}
	}
	this.frame_90 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(86).call(this.frame_86).wait(4).call(this.frame_90).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(91));

	// LOGO_white
	this.instance = new lib._300x600VSlogowhite();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91));

	// Layer_12
	this.instance_1 = new lib.Layer12();
	this.instance_1.setTransform(0,90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer_11
	this.instance_2 = new lib.Layer11();
	this.instance_2.setTransform(0,90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({_off:true},2).wait(5));

	// Layer_10
	this.instance_3 = new lib.Layer10();
	this.instance_3.setTransform(0,90);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({_off:false},0).to({_off:true},3).wait(5));

	// Layer_9
	this.instance_4 = new lib.Layer9();
	this.instance_4.setTransform(0,90);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({_off:true},4).wait(5));

	// Layer_8
	this.instance_5 = new lib.Layer8();
	this.instance_5.setTransform(0,90);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81).to({_off:false},0).to({_off:true},5).wait(5));

	// Layer_7
	this.instance_6 = new lib.Layer7();
	this.instance_6.setTransform(0,90);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80).to({_off:false},0).to({_off:true},6).wait(5));

	// Layer_6
	this.instance_7 = new lib.Layer6();
	this.instance_7.setTransform(0,90);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).to({_off:true},7).wait(5));

	// Layer_5
	this.instance_8 = new lib.Layer5();
	this.instance_8.setTransform(0,90);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(78).to({_off:false},0).to({_off:true},8).wait(5));

	// Layer_4
	this.instance_9 = new lib.Layer4();
	this.instance_9.setTransform(0,90);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(77).to({_off:false},0).to({_off:true},9).wait(5));

	// Layer_3
	this.instance_10 = new lib.Layer3();
	this.instance_10.setTransform(0,90);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(76).to({_off:false},0).to({_off:true},10).wait(5));

	// Layer_2
	this.instance_11 = new lib.Layer2();
	this.instance_11.setTransform(0,90);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(75).to({_off:false},0).to({_off:true},11).wait(5));

	// PIC1
	this.instance_12 = new lib.Layer1();
	this.instance_12.setTransform(0,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(91));

	// COPY
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWArIgWg/IAAAAIgUA/IgSAAIgchVIASAAIAUA/IAVg/IAQAAIAVA/IABAAIASg/IASAAIgcBVg");
	this.shape_1.setTransform(240.85,503.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAqQgJgEgFgGQgFgGgDgIQgEgIAAgKQAAgIAEgJQADgIAGgGQAGgGAHgDQAIgEAJAAQAMAAAHAEQAIAEAGAHQAEAGACAIQADAIAAAHIAAAGIhEAAQABAGACAEQADAFADADIAJAFQAFACAFAAQAIAAAGgEQAFgDAFgGIAMAJQgOASgYAAQgJAAgIgDgAAagGQgBgFgBgFQgCgEgDgEQgCgDgGgCQgEgCgGAAQgFAAgFADQgFACgDADIgGAIQgCAFAAAEIAzAAIAAAAg");
	this.shape_2.setTransform(229,503.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIAAAAIAABoIgRAAIAAh/IAWAAIBFBoIABAAIAAhoIARAAIAAB/g");
	this.shape_3.setTransform(216.875,501.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA+QgKgDgJgJIALgOQAGAHAHAEQAIADAJAAQAIAAAGgCQAGgDADgEQAEgEABgGQACgFAAgFIAAgNIgBAAQgEAIgIAEQgIADgIAAQgKAAgIgDQgIgDgFgGQgGgGgDgHQgEgIAAgJQAAgKADgIQADgIAGgGQAGgGAIgEQAIgDAKAAQAHAAAJAEQAIADAEAHIABAAIAAgMIAQAAIAABUQAAAJgDAIQgEAIgGAGQgGAGgJADQgIADgKAAQgMAAgKgDgAgKgvQgFACgEAEQgDAEgCAGQgCAFAAAHQAAANAHAGQAIAIAMAAQANAAAHgIQAIgGAAgNQAAgHgCgFQgCgGgEgEQgDgEgGgCQgFgCgGAAQgGAAgFACg");
	this.shape_4.setTransform(199.025,505.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVAsIAAgyQABgGgCgEQgBgEgEgDQgCgCgDgBQgEgCgEAAQgEAAgEACQgEACgEADQgDAEgCAFQgCAFAAAHIAAAsIgQAAIAAhVIAQAAIAAAOIABAAQADgHAIgEQAHgFAJAAQAGAAAGACQAGACAEAEQAEAEADAGQACAGAAAJIAAA2g");
	this.shape_5.setTransform(188.75,503.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHBAIAAhUIAPAAIAABUgAgHgrQgEgDAAgFQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_6.setTransform(181.625,501.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVBEIAAgzQABgFgCgFQgCgEgCgCQgDgCgDgBQgEgBgEgBQgEABgEABQgFACgDADQgDADgCAGQgCAEAAAIIAAAsIgQAAIAAiHIAQAAIAABAIABAAQADgHAIgEQAHgFAJAAQAGAAAGADQAFACAFADQAEAEADAGQACAGAAAIIAAA3g");
	this.shape_7.setTransform(174.45,500.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAA1QgEgCgCgEQgDgFAAgFIgBgKIAAgsIgSAAIAAgOIASAAIAAgYIAPAAIAAAYIAYAAIAAAOIgYAAIAAAmIABAHQAAADABADIAEAFQACACAFgBIAGAAIAFgCIAAAPIgHACIgHABQgKgBgFgCg");
	this.shape_8.setTransform(165.725,502.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAqQgJgEgFgGQgGgGgDgIQgDgIAAgKQAAgIADgJQAEgIAFgGQAGgGAIgDQAJgEAIAAQAMAAAHAEQAIAEAGAHQAEAGACAIQADAIAAAHIAAAGIhEAAQABAGACAEQADAFADADIAKAFQAEACAFAAQAIAAAGgEQAFgDAFgGIAMAJQgNASgZAAQgJAAgIgDgAAagGQAAgFgCgFQgCgEgDgEQgDgDgFgCQgEgCgGAAQgFAAgFADQgFACgDADIgGAIQgCAFAAAEIAzAAIAAAAg");
	this.shape_9.setTransform(157.8,503.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAxAsIAAgvIgBgJIgDgIIgFgGQgEgCgGAAQgMAAgEAIQgGAHAAALIAAAuIgPAAIAAgsIgBgLQAAgFgCgEQgCgDgEgDQgDgCgGAAQgEAAgFACQgEACgCADQgEAEgCAFQgBAFAAAHIAAAsIgRAAIAAhVIAQAAIAAAOIADgFIAGgFIAIgEQAFgCAGAAQAJAAAHAEQAFAEAEAIQAFgIAHgEQAHgEAIAAQAKAAAHAEQAFADAFAFQADAFABAHQABAHAAAHIAAAxg");
	this.shape_10.setTransform(145.15,503.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRApQgIgDgGgGQgHgGgDgIQgEgJAAgJQAAgIAEgIQADgIAHgHQAGgGAIgDQAJgEAIAAQAKAAAIAEQAIADAGAGQAGAHAEAIQADAIAAAIQAAAJgDAJQgEAIgGAGQgGAGgIADQgIAEgKAAQgIAAgJgEgAgLgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAFACAGAAQAGAAAGgCQAFgDAEgEQADgDACgGQACgFAAgHQAAgFgCgGQgCgFgDgEQgEgEgFgCQgGgDgGAAQgGAAgFADg");
	this.shape_11.setTransform(132.2,503.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA+QgLgEgHgJIAPgMQAEAHAIADQAHADAIAAIAIgBQAEgBADgDQAFgCABgEQADgFAAgEQAAgIgEgEQgFgEgHgCIgOgGQgJgCgHgEQgGgEgFgHQgFgHAAgNQABgFACgGQACgHAGgFQAEgFAJgEQAIgDAKAAQALAAAJACQAKAEAHAJIgOAMQgDgFgGgDQgGgDgIAAQgGAAgEACQgFACgDADQgDADgBADIgCAGQABAJAFAEQAEAEAHADIAOAFQAIACAHAEQAHACAFAIQAEAGAAAMQAAAIgDAIQgEAHgFAGQgGAEgJADQgHADgJAAQgMAAgLgFg");
	this.shape_12.setTransform(121.7,501.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAxAsIAAgvIgBgJIgDgIIgFgGQgEgCgGAAQgMAAgEAIQgGAHAAALIAAAuIgPAAIAAgsIgBgLQAAgFgCgEQgCgDgEgDQgDgCgGAAQgEAAgFACQgDACgDADQgEAEgCAFQgBAFAAAHIAAAsIgRAAIAAhVIAQAAIAAAOIADgFIAGgFIAIgEQAFgCAGAAQAJAAAHAEQAFAEAEAIQAFgIAHgEQAHgEAIAAQAKAAAHAEQAFADAFAFQADAFABAHQABAHAAAHIAAAxg");
	this.shape_13.setTransform(104.2,503.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSArQgGgBgEgEQgEgDgCgFQgDgEAAgHQAAgIAFgGQADgFAHgDQAGgDAJgCQAHgBAKAAIAMAAIAAgEQgBgDgBgDQgBgEgDgCQgCgDgEgBQgDgCgGAAIgHABIgHACIgFAEIgEADIgKgKQAHgGAJgEQAJgDAIAAQAJAAAHADQAHACAEAEQAEAEACAFQACAFABAGIAAAqIAAAJIABAHIgPAAIgBgNIAAAAQgGAIgGAEQgIADgJAAQgGAAgFgCgAABACQgFABgFACQgFACgDADQgDADAAAFQAAAHAFAEQAFADAIAAQAGAAAEgCQAFgDADgDQADgEABgEIACgJIAAgFIgJAAg");
	this.shape_14.setTransform(91.8,503.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAqQgJgEgFgGQgGgGgDgIQgDgIAAgKQAAgIADgJQAEgIAFgGQAGgGAJgDQAHgEAKAAQAKAAAJAEQAHAEAFAHQAFAGADAIQACAIAAAHIAAAGIhDAAQAAAGACAEQADAFAEADIAJAFQAEACAGAAQAHAAAFgEQAGgDAEgGIANAJQgNASgZAAQgJAAgIgDgAAZgGQABgFgCgFQgCgEgCgEQgEgDgEgCQgFgCgGAAQgFAAgFADQgFACgEADIgEAIQgCAFAAAEIAxAAIAAAAg");
	this.shape_15.setTransform(82.25,503.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAsIAAhVIARAAIAAAOIAAAAIAEgHIAFgEIAIgEIAIgBIAHABIgBASIgEgBIgEAAQgMAAgFAGQgGAHAAANIAAArg");
	this.shape_16.setTransform(74.625,503.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAA1QgEgCgCgEQgDgFAAgFIgBgKIAAgsIgSAAIAAgOIASAAIAAgYIAPAAIAAAYIAYAAIAAAOIgYAAIAAAmIABAHQAAADABADQABADADACQACACAFgBIAGAAIAFgCIAAAPIgHACIgHABQgKgBgFgCg");
	this.shape_17.setTransform(67.225,502.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA+QgLgEgHgJIAPgMQAEAHAIADQAHADAIAAIAIgBQAEgBADgDQAFgCABgEQADgFAAgEQAAgIgEgEQgFgEgHgCIgOgGQgJgCgHgEQgGgEgFgHQgFgHAAgNQABgFACgGQACgHAGgFQAEgFAIgEQAJgDAKAAQALAAAJACQAKAEAHAJIgOAMQgDgFgGgDQgGgDgIAAQgGAAgEACQgFACgDADQgDADgBADIgCAGQABAJAEAEQAFAEAHADIAOAFQAIACAHAEQAHACAFAIQAEAGAAAMQAAAIgDAIQgEAHgGAGQgFAEgJADQgHADgJAAQgMAAgLgFg");
	this.shape_18.setTransform(59.15,501.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIBTIgGgFQgDgDgCgEQgBgEAAgEIABgIQACgEADgDIAGgFQAEgBAEAAQAEAAAEABIAHAFQADADABAEIACAIQAAAEgCAEQgBAEgDADIgHAFQgEABgEAAQgEAAgEgBgAgRAdIAAgKQAAgHADgFQACgFADgDIAMgLIAJgIIAGgIQACgDAAgEQAAgIgEgEQgFgEgHAAQgKAAgGAFQgFAGgBAJIgkgCQADgZAPgMQAQgNAXAAQALAAAJADQAJACAHAGQAIAGAEAJQADAIAAALIgBAMQgBAGgDAFIgJALIgOAKQgFAFgCADQgCAEAAAEIAAAHg");
	this.shape_19.setTransform(249.55,462.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA4BSIAAh8IgBAAIgqB8IgaAAIgqh8IAAAAIAAB8IgkAAIAAijIA2AAIAlBqIAAAAIAmhqIA2AAIAACjg");
	this.shape_20.setTransform(232,462.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAtBSIgOgjIg+AAIgOAjIgnAAIBGijIAdAAIBGCjgAATAQIgTgxIgUAxIAnAAg");
	this.shape_21.setTransform(212.675,462.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag4BSIAAijIBtAAIAAAiIhJAAIAAAeIBFAAIAAAgIhFAAIAAAiIBNAAIAAAhg");
	this.shape_22.setTransform(197.225,462.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAWBSIghhCIgRAAIAABCIgkAAIAAijIA/AAQALAAALADQAMADAIAFQAIAGAFAJQAFAKAAAOQAAASgJALQgJALgRAEIApBFgAgcgNIAVAAIAJAAQAGAAAEgCQAEgCADgEQADgEAAgGQAAgGgDgEQgCgEgEgCIgJgCIgJgBIgXAAg");
	this.shape_23.setTransform(182.975,462.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRBSIAAiDIgvAAIAAggICBAAIAAAgIgvAAIAACDg");
	this.shape_24.setTransform(168.2,462.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghBRQgNgFgMgLIAagcQAFAIAJAEQAIADAJAAIAIgBIAIgCQADgCADgEQACgDAAgFQAAgHgGgEQgFgEgJgEIgRgFQgKgEgJgEQgIgFgGgIQgGgIAAgNQAAgNAGgLQAFgJAIgHQAJgHALgDQAMgDALgBQANAAANAEQANAFAKAJIgYAbQgFgGgHgDQgIgCgGAAIgIABIgHACQgEACgCAEQgCADAAAFQAAAHAFAEQAGADAHAEIASAFQAKADAIAEQAJAFAFAJQAGAIAAAOQAAANgFALQgGAKgIAHQgJAGgLAEQgLADgMgBQgQAAgOgEg");
	this.shape_25.setTransform(154.725,462.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiBPQgQgFgMgMQgMgKgGgRQgHgQAAgTQAAgSAHgQQAGgQAMgLQAMgMAQgFQAQgHASAAQATAAAQAHQAQAFAMAMQAMALAGAQQAHAQAAASQAAATgHAQQgGARgMAKQgMAMgQAFQgQAHgTgBQgSABgQgHgAgUgwQgJAEgHAHQgHAIgDAJQgEAKAAAKQAAAMAEAJQADAJAHAIQAHAHAJAEQAJADALAAQALAAAKgDQAJgEAHgHQAGgIAEgJQAEgJAAgMQAAgKgEgKQgEgJgGgIQgHgHgJgEQgKgDgLAAQgLAAgJADg");
	this.shape_26.setTransform(132.075,462.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRBSIAAiDIgvAAIAAggICAAAIAAAgIguAAIAACDg");
	this.shape_27.setTransform(115.9,462.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAkBSIgkhxIAAAAIgjBxIgfAAIgwijIAmAAIAaBoIABAAIAihoIAhAAIAhBrIABAAIAbhrIAkAAIgvCjg");
	this.shape_28.setTransform(91,462.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag4BSIAAijIBtAAIAAAiIhJAAIAAAeIBFAAIAAAgIhFAAIAAAiIBNAAIAAAhg");
	this.shape_29.setTransform(72.575,462.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAeBSIhGhzIAAAAIAABzIgkAAIAAijIAxAAIBEBxIAAAAIAAhxIAkAAIAACjg");
	this.shape_30.setTransform(55.725,462.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZBQQgPgHgNgKQgLgMgHgPQgGgQAAgUQAAgSAGgQQAHgQALgLQANgMAPgFQARgGARgBQAUAAAQAFQARAFAMAMIgZAbQgHgHgJgFQgKgEgOAAQgKAAgJAEQgJAFgHAHQgHAGgDAKQgEAKAAAKQAAALAEAKQADAJAHAHQAHAHAJAEQAJAFAKAAQAMAAAJgDIAOgFIAAgbIgdAAIAAggIA/AAIAABUQgQAIgRAEQgSAEgSgBQgRAAgRgFg");
	this.shape_31.setTransform(248.9,433.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAeBSIhGh0IAAAAIAAB0IgkAAIAAiiIAxAAIBEBwIAAAAIAAhwIAkAAIAACig");
	this.shape_32.setTransform(230.975,433.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRBSIAAiiIAjAAIAACig");
	this.shape_33.setTransform(218.2,433.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAjBSIAAhHIhFAAIAABHIgkAAIAAiiIAkAAIAAA9IBFAAIAAg9IAkAAIAACig");
	this.shape_34.setTransform(206.075,433.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRBSIAAiDIguAAIAAgfIB/AAIAAAfIguAAIAACDg");
	this.shape_35.setTransform(190.75,433.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag4BSIAAiiIBtAAIAAAhIhJAAIAAAeIBFAAIAAAgIhFAAIAAAhIBNAAIAAAig");
	this.shape_36.setTransform(177.225,433.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AA4BSIAAh8IAAAAIgrB8IgaAAIgqh8IAAAAIAAB8IgkAAIAAiiIA2AAIAlBpIABAAIAlhpIA2AAIAACig");
	this.shape_37.setTransform(158.85,433.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgiBQQgQgHgMgKQgMgMgGgPQgHgQAAgUQAAgSAHgQQAGgQAMgLQAMgMAQgFQAQgGASgBQATABAQAGQAQAFAMAMQAMALAGAQQAHAQAAASQAAAUgHAQQgGAPgMAMQgMAKgQAHQgQAFgTAAQgSAAgQgFgAgUgwQgJAFgHAHQgHAGgDAKQgEAKAAAKQAAALAEAKQADAJAHAHQAHAHAJAEQAJAFALAAQALgBAKgEQAJgEAHgHQAGgHAEgJQAEgKAAgLQAAgKgEgKQgEgKgGgGQgHgHgJgFQgKgEgLAAQgLAAgJAEg");
	this.shape_38.setTransform(138.475,433.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AghBRQgNgFgMgLIAagcQAFAIAJADQAIAFAJAAIAIgBIAIgEQADgCADgDQACgDAAgEQAAgIgGgEQgFgEgJgDIgRgGQgKgEgJgFQgIgEgGgHQgGgJAAgOQAAgNAGgJQAFgKAIgHQAJgHALgDQAMgEALAAQANAAANAFQANAEAKAIIgYAbQgFgFgHgDQgIgDgGAAIgIABIgHADQgEADgCADQgCADAAAFQAAAHAFADQAGAEAHAEIASAFQAKACAIAFQAJAFAFAJQAGAIAAAOQAAAOgFAKQgGAKgIAHQgJAGgLADQgLADgMAAQgQABgOgFg");
	this.shape_39.setTransform(122.025,433.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhKBSIAAiiIA2AAQATgBARAFQARAFANAJQAOAKAHAQQAIAPAAAWQAAATgIAQQgHAPgNAKQgMAKgRAFQgQAFgSABgAgmAwIASAAQANABAJgDQALgDAIgGQAIgGAEgJQAFgJAAgNQAAgMgFgJQgEgJgIgGQgHgFgLgDQgJgDgLAAIgVAAg");
	this.shape_40.setTransform(100.625,433.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag4BSIAAiiIBtAAIAAAhIhJAAIAAAeIBFAAIAAAgIhFAAIAAAhIBNAAIAAAig");
	this.shape_41.setTransform(84.525,433.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag4BSIAAiiIBtAAIAAAhIhJAAIAAAeIBFAAIAAAgIhFAAIAAAhIBNAAIAAAig");
	this.shape_42.setTransform(70.075,433.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAeBSIhGh0IAAAAIAAB0IgkAAIAAiiIAxAAIBEBwIAAAAIAAhwIAkAAIAACig");
	this.shape_43.setTransform(53.225,433.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(91));

	// VStv_logo
	this.instance_13 = new lib._300x600VStvlogo();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(91));

	// BKGD
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_44.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(91));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,151,301);
// library properties:
lib.properties = {
	id: 'A79EFEC4A97F49888D3F6FD01A528C13',
	width: 300,
	height: 600,
	fps: 15,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/VS_SODOmotive_300x600_atlas_P_1.png?1684791717247", id:"VS_SODOmotive_300x600_atlas_P_1"},
		{src:"images/VS_SODOmotive_300x600_atlas_NP_1.jpg?1684791717248", id:"VS_SODOmotive_300x600_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A79EFEC4A97F49888D3F6FD01A528C13'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;