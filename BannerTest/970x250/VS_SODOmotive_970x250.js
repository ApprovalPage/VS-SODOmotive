(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"VS_SODOmotive_970x250_atlas_P_1", frames: [[0,0,300,600]]},
		{name:"VS_SODOmotive_970x250_atlas_NP_1", frames: [[0,0,300,307],[302,0,300,307],[604,0,300,307],[906,0,300,307],[1208,0,300,307],[1510,0,300,307],[0,309,300,307],[302,309,300,307],[604,309,300,307],[906,309,300,307],[1208,309,300,307],[1510,309,300,307]]}
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



(lib._300x600VStvlogo = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer10 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer11 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer12 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer5 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer6 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer7 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer8 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Layer9 = function() {
	this.initialize(ss["VS_SODOmotive_970x250_atlas_NP_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.VS_SODOmotive_970x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("EhLsgTcMCXZAAAMAAAAm5MiXZAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(91));

	// watch_now_at
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAA2QgDgCgCgEQgDgDgBgGIgBgMIAAgtIgTAAIAAgMIATAAIAAgZIAOAAIAAAZIAZAAIAAAMIgZAAIAAApIAAAIIABAGIAEAEQACACAFAAIAHgBIAGgCIABANIgJACIgIABQgIAAgFgCg");
	this.shape_1.setTransform(717.2,169.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRArQgGgBgEgEQgEgDgDgEQgCgFAAgGQAAgLAFgGQAGgFAIgDQAIgDAJAAIAQgBIAGAAIAAgDQAAgJgGgFQgFgFgKAAQgGAAgHADQgGACgFAFIgJgKQAGgGAJgDQAJgEAIAAQATAAAJAJQAIAJAAASIAAAkIAAAIIABAHIgNAAIgBgHIAAgGIgBAAQgEAHgHAEQgHAEgJAAQgGAAgGgCgAgNAGQgIADAAAJQAAAIAFAEQAGADAIAAQAFAAAFgCQAEgCADgEIAFgIQACgEAAgGIAAgFIgOAAQgNAAgIAEg");
	this.shape_2.setTransform(709.275,170.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYArIgYhBIAAAAIgWBBIgOAAIgchVIAPAAIAUBBIABAAIAVhBIAPAAIAWBBIAThBIAQAAIgcBVg");
	this.shape_3.setTransform(692.95,170.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgFgGQgGgFgEgJQgEgIAAgKQAAgJAEgIQAEgIAGgGQAFgGAJgDQAIgEAJAAQAKAAAIAEQAJADAFAGQAGAGAEAIQAEAIAAAJQAAAKgEAIQgEAJgGAFQgFAGgJAEQgIADgKAAQgJAAgIgDgAgMgcQgFACgEAFQgEAEgCAGQgCAFAAAGQAAAHACAGQACAFAEAFQAEAEAFACQAGADAGAAQAHAAAGgDQAFgCAEgEQAEgFACgFQACgGAAgHQAAgGgCgFQgCgGgEgEQgEgFgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(680.85,170.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXAsIAAgyQAAgLgEgGQgFgHgKAAQgGAAgFADQgFACgDAFQgEAEgBAGQgCAGAAAGIAAAqIgNAAIAAhAIgBgLIAAgJIANAAIAAAGIAAAIIABAAIAEgGIAGgGIAIgDQAEgCAFAAQAJAAAFADQAHADAEAEQAEAFACAGQABAHAAAHIAAA0g");
	this.shape_5.setTransform(670.35,170.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBFIAAgzQAAgLgFgGQgEgGgLAAQgGAAgEADQgGACgCAEQgEAEgCAGQgBAGAAAHIAAAqIgOAAIAAiJIAOAAIAABAIAAAAIAFgFIAFgEIAIgDQAEgCAFAAQAIAAAGADQAHADAEAEQADAFADAFQABAHAAAHIAAA1g");
	this.shape_6.setTransform(655.3,167.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAqQgHgEgGgGQgGgGgDgIQgEgIAAgKQAAgIAEgJQADgIAGgGQAGgGAHgDQAIgEAJAAQAKAAAIAEQAJADAHAHIgMAKQgFgGgFgCQgFgDgHAAQgFAAgGADQgGACgDAFQgEAEgCAGQgBAGAAAFQAAAHACAFQACAGAEAFQAEAEAFACQAFADAFAAQAOAAAJgLIAKAKQgHAHgIAEQgIADgKAAQgJAAgIgDg");
	this.shape_7.setTransform(646.2,170.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABA2QgEgCgDgEQgCgDgBgGIgBgMIAAgtIgTAAIAAgMIATAAIAAgZIANAAIAAAZIAaAAIAAAMIgaAAIAAApIAAAIIACAGIAEAEQACACAFAAIAGgBIAHgCIABANIgJACIgJABQgHAAgEgCg");
	this.shape_8.setTransform(638.3,169.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRArQgGgBgEgEQgEgDgDgEQgCgFAAgGQAAgLAFgGQAGgFAIgDQAIgDAJAAIAQgBIAGAAIAAgDQAAgJgGgFQgFgFgKAAQgGAAgHADQgGACgFAFIgJgKQAGgGAJgDQAJgEAIAAQATAAAJAJQAIAJAAASIAAAkIAAAIIABAHIgNAAIgBgHIAAgGIgBAAQgEAHgHAEQgHAEgJAAQgGAAgGgCgAgNAGQgIADAAAJQAAAIAFAEQAGADAIAAQAFAAAFgCQAEgCADgEIAFgIQACgEAAgGIAAgFIgOAAQgNAAgIAEg");
	this.shape_9.setTransform(630.325,170.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgBBIgfhsIgBAAIgfBsIgRAAIgmiBIARAAIAeBqIAghqIAQAAIAfBqIABAAIAehqIAPAAIglCBg");
	this.shape_10.setTransform(617.7,167.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(91));

	// COPY
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLALQgFgFABgGQgBgGAFgFQAFgFAGAAQAHAAAFAFQAEAFAAAGQAAAGgEAFQgFAGgHAAQgGAAgFgGg");
	this.shape_11.setTransform(843.4,118.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXA6QgMgFgHgIQgIgJgFgLQgEgMAAgNQAAgMAFgMQAEgLAJgJQAIgIALgFQALgFANAAQAPAAAMAGQAKAFAIAJQAGAJAEALQADAMAAAKIAAAIIheAAQAAAIADAHQADAGAGAFQAFAEAHADQAIACAGAAQALAAAIgFQAIgFAGgIIASANQgUAZghAAQgNAAgMgFgAAkgJQgBgHgCgHQgCgGgEgFQgFgEgGgDQgGgDgIAAQgIAAgHAEQgHADgEAFQgGAFgCAGQgCAGAAAGIBGAAIAAAAg");
	this.shape_12.setTransform(832.95,114.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwA8IAAgVIBChOIhBAAIAAgUIBdAAIAAAVIhDBOIBHAAIAAAUg");
	this.shape_13.setTransform(820.15,114.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBZIAAh2IAVAAIAAB2gAgLg8QgFgFAAgHQAAgHAFgFQAFgEAGgBQAHABAFAEQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_14.setTransform(811.325,111.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaA6QgLgEgJgMIARgOQAGAFAGAEQAHAFAKAAIAIgBIAHgDQAEgCACgDQACgDAAgDQAAgFgDgEQgDgDgFgCIgJgDIgIgCIgNgEQgHgCgFgDQgFgEgDgGQgDgFAAgJQAAgJAEgHQAEgHAGgFQAGgEAJgCQAIgDAHAAQAMAAALAFQALAEAHALIgSANQgEgFgGgDQgGgDgIAAQgHAAgGADQgGADAAAHQAAAFADADQAEAEAEACIAJADIAKACIANAEQAHACAEADQAFAEADAGQACAGAAAIQAAAKgEAIQgEAHgHAEQgHAFgJACQgIACgIAAQgPAAgLgFg");
	this.shape_15.setTransform(802.575,114.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA9IAAh2IAYAAIAAASIAAAAQACgFAEgDIAHgHIAKgFIAMgBQAFAAAFABIgBAZIgGgCIgGAAQgQAAgIAJQgJAKABASIAAA8g");
	this.shape_16.setTransform(786,113.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYA6QgMgFgIgJQgJgIgFgLQgEgMAAgNQAAgMAEgLQAFgMAJgIQAIgJAMgFQAMgFAMAAQANAAAMAFQAMAFAIAJQAJAIAFAMQAEALAAAMQAAANgEAMQgFALgJAIQgIAJgMAFQgMAFgNAAQgMAAgMgFgAgPglQgIADgFAFQgFAGgDAHQgCAIAAAIQAAAJACAIQADAHAFAGQAFAFAIADQAHAEAIAAQAJAAAHgEQAIgDAFgFQAFgGADgHQACgIAAgJQAAgIgCgIQgDgHgFgGQgFgFgIgDQgHgDgJAAQgIAAgHADg");
	this.shape_17.setTransform(773.425,114.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBhIAAhjIgaAAIAAgUIAaAAIAAgaQAAgYAJgMQAJgMAWAAIAIABIAJABIgDAUIgGgCIgGAAQgHAAgEACQgDACgCADQgDAEAAAFIgBALIAAAbIAbAAIAAAUIgbAAIAABjg");
	this.shape_18.setTransform(761.825,110.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAeA9IAAhFQAAgJgCgFQgDgGgDgEQgEgEgEgBQgGgCgFAAQgGAAgGACQgGADgFAFQgEAEgDAIQgCAHAAAKIAAA9IgXAAIAAh2IAXAAIAAASIABAAQADgJALgGQALgGAMAAQAJAAAIACQAIADAGAGQAGAFAEAJQADAJAAALIAABMg");
	this.shape_19.setTransform(743.65,113.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA6QgMgFgIgJQgJgIgFgLQgEgMAAgNQAAgMAEgLQAFgMAJgIQAIgJAMgFQAMgFAMAAQANAAAMAFQAMAFAIAJQAJAIAFAMQAEALAAAMQAAANgEAMQgFALgJAIQgIAJgMAFQgMAFgNAAQgMAAgMgFgAgPglQgIADgFAFQgFAGgDAHQgCAIAAAIQAAAJACAIQADAHAFAGQAFAFAIADQAHAEAIAAQAJAAAHgEQAIgDAFgFQAFgGADgHQACgIAAgJQAAgIgCgIQgDgHgFgGQgFgFgIgDQgHgDgJAAQgIAAgHADg");
	this.shape_20.setTransform(729.225,114.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBaIgKgDIACgVQAIADAGAAIAJgBIAGgFIAFgGIADgIIAHgTIgxh3IAaAAIAiBcIABAAIAihcIAYAAIg4CQIgFAPQgEAGgFAEQgEAFgGADQgHACgJAAg");
	this.shape_21.setTransform(708.45,117.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAABLQgGgFgEgFQgDgGAAgHIgBgOIAAg9IgaAAIAAgUIAaAAIAAgiIAVAAIAAAiIAhAAIAAAUIghAAIAAA1IABAKQAAAEACAEQABAEAEADQADACAHAAIAIgBIAIgDIAAAVQgEACgGABIgKABQgOAAgHgDg");
	this.shape_22.setTransform(696.95,112.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKBZIAAh2IAVAAIAAB2gAgLg8QgFgFAAgHQAAgHAFgFQAFgEAGgBQAHABAFAEQAFAFAAAHQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_23.setTransform(689.875,111.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZBWQgRgIgMgNQgMgOgGgQQgGgQgBgRQAAgUAHgSQAHgRAMgNQANgMAQgIQASgHAUAAQARAAARAHQARAHALAOIgVAPQgHgJgMgGQgLgFgMAAQgPAAgMAGQgMAFgJAKQgIAKgFANQgFANAAAPQAAAOAFAMQAEANAIAKQAJAJAMAGQANAFAPAAQAPAAAMgGQALgGAIgMIAVAQIgIAHQgEAGgJAFQgIAFgMAEQgMAEgPAAQgUAAgRgIg");
	this.shape_24.setTransform(678.3,111.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaBcQgLgFgIgIQgIgJgFgLQgEgMAAgNQAAgNAEgMQAFgKAIgJQAIgIALgFQALgFAOAAQAMAAALAGQALAFAGAKIABAAIAAhZIAXAAIAAC+IgXAAIAAgRIgBAAQgGAJgMAGQgLAFgLAAQgOAAgLgFgAgPgDQgHADgFAEQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAFAFAHADQAHAEAJAAQAJAAAHgEQAHgDAFgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgFgEgHgDQgHgDgJAAQgIAAgIADg");
	this.shape_25.setTransform(654.225,110.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKBfIAAi9IAVAAIAAC9g");
	this.shape_26.setTransform(643.825,110.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaA8QgHgCgGgEQgGgFgDgGQgDgHAAgJQAAgMAFgHQAFgIAJgEQAJgFAMgCQALgCANAAIARAAIAAgFIgCgJQgCgFgDgEQgEgDgFgCQgFgDgIAAIgKACIgJADIgHAEIgHAFIgNgOQAJgJANgEQANgFALAAQANAAAKAEQAJADAGAFQAGAGADAHQADAHAAAIIAAA8IAAAMIABAKIgUAAIgBgSIAAAAQgIALgKAFQgKAFgNAAQgIAAgIgDgAABADQgHABgHADQgHACgEAFQgFAEAAAHQAAALAHAEQAHAFAMAAQAIAAAHgDQAGgEAEgFQAEgFACgGIACgMIAAgIIgMAAg");
	this.shape_27.setTransform(634.175,114.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiA9IAAh2IAYAAIAAASIAAAAQACgFAEgDIAHgHIAKgFIAMgBQAFAAAFABIgBAZIgGgCIgGAAQgQAAgIAJQgJAKABASIAAA8g");
	this.shape_28.setTransform(623.65,113.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXA6QgLgFgJgIQgIgJgDgLQgFgMAAgNQAAgMAFgMQAFgLAHgJQAJgIALgFQAMgFAMAAQAPAAALAGQAMAFAGAJQAIAJADALQADAMAAAKIAAAIIheAAQgBAIADAHQAEAGAFAFQAGAEAIADQAHACAGAAQALAAAIgFQAIgFAGgIIASANQgTAZgjAAQgMAAgMgFgAAkgJQgBgHgBgHQgDgGgEgFQgEgEgHgDQgGgDgJAAQgHAAgHAEQgHADgFAFQgEAFgDAGQgCAGAAAGIBGAAIAAAAg");
	this.shape_29.setTransform(611.5,114.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABEA9IAAhBIgBgNQgBgHgDgEQgDgFgFgDQgFgDgIAAQgRAAgHAKQgHAKAAAQIAABAIgVAAIAAg9IgBgQQgBgHgDgFQgCgFgFgDQgFgDgJAAQgGAAgFACQgGADgEAFQgEAEgDAIQgCAHAAAKIAAA9IgXAAIAAh2IAVAAIAAATIAAAAIAEgHIAJgHQAEgDAHgDQAHgCAIAAQANAAAJAFQAIAGAGALQAGgLAKgGQALgFALAAQAOAAAJAEQAIAFAFAHQAFAIACAJQACAKAAAKIAABEg");
	this.shape_30.setTransform(593.825,113.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag7BZIAAixIByAAIAAAXIhaAAIAAA1IBUAAIAAAVIhUAAIAAA6IBfAAIAAAWg");
	this.shape_31.setTransform(576.025,111.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXA6QgMgFgIgIQgIgJgEgLQgEgMAAgNQAAgMAFgMQAEgLAJgJQAIgIALgFQALgFANAAQAQAAAKAGQAMAFAGAJQAIAJADALQADAMAAAKIAAAIIhfAAQAAAIAEAHQADAGAGAFQAFAEAHADQAIACAHAAQAKAAAIgFQAHgFAHgIIARANQgSAZgjAAQgNAAgLgFgAAkgJQAAgHgDgHQgCgGgEgFQgFgEgGgDQgGgDgJAAQgHAAgHAEQgHADgFAFQgFAFgCAGQgDAGAAAGIBHAAIAAAAg");
	this.shape_32.setTransform(553.75,114.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAeBfIAAhGQAAgJgCgFQgDgGgDgEQgEgDgFgBQgEgCgGAAQgGAAgGACQgGADgFAEQgEAEgCAIQgDAHAAALIAAA9IgXAAIAAi9IAXAAIAABZIAAAAQAFgJAKgGQALgGANAAQAIAAAIACQAIADAGAGQAGAFADAJQAEAIAAALIAABNg");
	this.shape_33.setTransform(539.75,110.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAABLQgGgFgDgFQgEgGAAgHIgBgOIAAg9IgaAAIAAgUIAaAAIAAgiIAVAAIAAAiIAhAAIAAAUIghAAIAAA1IABAKQAAAEACAEQACAEADADQADACAHAAIAIgBIAIgDIAAAVQgEACgGABIgLABQgNAAgHgDg");
	this.shape_34.setTransform(527.55,112.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgvBaIgJgDIACgVQAIADAGAAIAJgBIAGgFIAEgGIAEgIIAHgTIgxh3IAbAAIAiBcIAAAAIAihcIAYAAIg4CQIgGAPQgDAGgFAEQgEAFgHADQgGACgJAAg");
	this.shape_35.setTransform(510.2,117.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AghA9IAAh2IAWAAIAAASIABAAQACgFAEgDIAHgHIAKgFIALgBQAGAAAFABIgCAZIgFgCIgGAAQgQAAgIAJQgJAKAAASIAAA8g");
	this.shape_36.setTransform(499.7,113.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMBZIAAiaIg4AAIAAgXICJAAIAAAXIg5AAIAACag");
	this.shape_37.setTransform(489.7,111.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAyByIgyidIAAAAIgyCdIgrAAIhEjjIA3AAIAkCRIABAAIAwiRIAuAAIAuCVIABAAIAmiVIAzAAIhCDjg");
	this.shape_38.setTransform(863.15,57);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhPByIAAjjICaAAIAAAuIhoAAIAAArIBiAAIAAAtIhiAAIAAAuIBtAAIAAAvg");
	this.shape_39.setTransform(837.375,57);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AArByIhjihIAAAAIAAChIgzAAIAAjjIBFAAIBgCeIAAAAIAAieIAyAAIAADjg");
	this.shape_40.setTransform(813.75,57);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgjBvQgWgIgRgQQgQgPgJgXQgJgWAAgbQAAgbAJgWQAJgWAQgQQARgPAWgJQAXgIAaAAQAbAAAXAHQAXAGARAQIgjAnQgKgLgNgFQgNgGgTAAQgPAAgNAGQgNAFgKAKQgJAKgFAOQgFANAAAPQAAAQAFANQAFAOAJAJQAKAKANAGQAMAFAQAAQAQAAAMgEQAMgDAHgEIAAglIgpAAIAAgtIBZAAIAAB2QgWALgYAFQgYAGgZAAQgaAAgXgJg");
	this.shape_41.setTransform(778.225,57.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAqByIhiihIAAAAIAAChIgzAAIAAjjIBFAAIBgCeIAAAAIAAieIAyAAIAADjg");
	this.shape_42.setTransform(753.1,57);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYByIAAjjIAxAAIAADjg");
	this.shape_43.setTransform(735.275,57);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAxByIAAhiIhhAAIAABiIgyAAIAAjjIAyAAIAABVIBhAAIAAhVIAyAAIAADjg");
	this.shape_44.setTransform(718.3,57);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYByIAAi3IhBAAIAAgsICzAAIAAAsIhBAAIAAC3g");
	this.shape_45.setTransform(696.825,57);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhPByIAAjjICaAAIAAAuIhoAAIAAArIBiAAIAAAtIhiAAIAAAuIBtAAIAAAvg");
	this.shape_46.setTransform(677.925,57);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ABPByIAAiuIgBAAIg8CuIglAAIg6iuIAAAAIAACuIgzAAIAAjjIBMAAIA0CUIABAAIA0iUIBMAAIAADjg");
	this.shape_47.setTransform(652.175,57);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgxBvQgWgIgQgQQgRgPgJgXQgJgWAAgbQAAgbAJgWQAJgWARgQQAQgPAWgJQAXgIAaAAQAbAAAWAIQAXAJAQAPQAQAQAJAWQAKAWAAAbQAAAbgKAWQgJAXgQAPQgQAQgXAIQgWAJgbAAQgaAAgXgJgAgchDQgNAFgJAKQgKAKgFAOQgFANAAAPQAAAQAFANQAFAOAKAJQAJAKANAGQANAFAPAAQAQAAANgFQANgGAJgKQAJgJAGgOQAFgNAAgQQAAgPgFgNQgGgOgJgKQgJgKgNgFQgNgGgQAAQgPAAgNAGg");
	this.shape_48.setTransform(623.7,57.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AguBxQgTgHgQgPIAkgnQAHAKAMAGQAMAFAMAAIAMgBIALgFQAFgCADgFQADgFAAgGQAAgKgIgGQgIgGgMgEIgYgIQgOgEgMgIQgMgGgIgLQgIgMAAgTQAAgSAHgOQAIgOAMgJQAMgJAQgFQAQgFAPAAQATAAATAGQARAFAPANIgiAmQgHgIgKgEQgLgEgJAAIgLACIgKAEQgFACgDAFQgEAFAAAGQAAAKAIAGQAIAFALAEIAZAIQANAEAMAHQAMAGAIAMQAHAMAAAUQAAASgHAPQgHAOgMAJQgMAKgQAEQgQAFgRAAQgWAAgTgHg");
	this.shape_49.setTransform(600.625,57.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ABPByIAAiuIgBAAIg8CuIglAAIg6iuIAAAAIAACuIgzAAIAAjjIBMAAIA0CUIABAAIA0iUIBMAAIAADjg");
	this.shape_50.setTransform(567.125,57);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AA/ByIgUgwIhXAAIgTAwIg4AAIBjjjIAoAAIBkDjgAAaAXIgbhFIgcBFIA3AAg");
	this.shape_51.setTransform(540.075,57);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhPByIAAjjICaAAIAAAuIhoAAIAAArIBiAAIAAAtIhiAAIAAAuIBtAAIAAAvg");
	this.shape_52.setTransform(518.475,57);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAfByIgvhbIgYAAIAABbIgyAAIAAjjIBYAAQAQAAAQAEQAPADAMAIQAMAIAHANQAGANAAAVQABAYgMAQQgOARgXAEIA5BggAgogSIAeAAIAMgBQAIgBAHgCQAGgCAEgGQADgEAAgKQABgIgEgGQgDgFgGgDQgGgDgGAAIgOgBIggAAg");
	this.shape_53.setTransform(498.55,57);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgYByIAAi3IhBAAIAAgsICzAAIAAAsIhBAAIAAC3g");
	this.shape_54.setTransform(477.825,57);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AguBxQgTgHgQgPIAkgnQAHAKAMAGQAMAFAMAAIAMgBIALgFQAFgCADgFQADgFAAgGQAAgKgIgGQgIgGgMgEIgYgIQgOgEgMgIQgMgGgIgLQgIgMAAgTQAAgSAHgOQAIgOAMgJQAMgJAQgFQAQgFAPAAQATAAATAGQARAFAPANIgiAmQgHgIgKgEQgLgEgJAAIgLACIgKAEQgFACgDAFQgEAFAAAGQAAAKAIAGQAIAFALAEIAZAIQANAEAMAHQAMAGAIAMQAHAMAAAUQAAASgHAPQgHAOgMAJQgMAKgQAEQgQAFgRAAQgWAAgTgHg");
	this.shape_55.setTransform(458.975,57.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(91));

	// Layer_12
	this.instance = new lib.Layer12();
	this.instance.setTransform(0,-60,1.2,1.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer_11
	this.instance_1 = new lib.Layer11();
	this.instance_1.setTransform(0,-60,1.2,1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).to({_off:true},2).wait(5));

	// Layer_10
	this.instance_2 = new lib.Layer10();
	this.instance_2.setTransform(0,-60,1.2,1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({_off:true},3).wait(5));

	// Layer_9
	this.instance_3 = new lib.Layer9();
	this.instance_3.setTransform(0,-60,1.2,1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({_off:true},4).wait(5));

	// Layer_8
	this.instance_4 = new lib.Layer8();
	this.instance_4.setTransform(0,-60,1.2,1.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(81).to({_off:false},0).to({_off:true},5).wait(5));

	// Layer_7
	this.instance_5 = new lib.Layer7();
	this.instance_5.setTransform(0,-60,1.2,1.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80).to({_off:false},0).to({_off:true},6).wait(5));

	// Layer_6
	this.instance_6 = new lib.Layer6();
	this.instance_6.setTransform(0,-60,1.2,1.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).to({_off:true},7).wait(5));

	// Layer_5
	this.instance_7 = new lib.Layer5();
	this.instance_7.setTransform(0,-60,1.2,1.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(78).to({_off:false},0).to({_off:true},8).wait(5));

	// Layer_4
	this.instance_8 = new lib.Layer4();
	this.instance_8.setTransform(0,-60,1.2,1.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(77).to({_off:false},0).to({_off:true},9).wait(5));

	// Layer_3
	this.instance_9 = new lib.Layer3();
	this.instance_9.setTransform(0,-60,1.2,1.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76).to({_off:false},0).to({_off:true},10).wait(5));

	// Layer_2
	this.instance_10 = new lib.Layer2();
	this.instance_10.setTransform(0,-60,1.2,1.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(75).to({_off:false},0).to({_off:true},11).wait(5));

	// PIC1
	this.instance_11 = new lib.Layer1();
	this.instance_11.setTransform(0,-60,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(91));

	// VStv_logo
	this.instance_12 = new lib._300x600VStvlogo();
	this.instance_12.setTransform(515,-357);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(91));

	// BKGD
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_56.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(91));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(484.5,-232,486,540.4);
// library properties:
lib.properties = {
	id: 'A79EFEC4A97F49888D3F6FD01A528C13',
	width: 970,
	height: 250,
	fps: 15,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/VS_SODOmotive_970x250_atlas_P_1.png?1685055483771", id:"VS_SODOmotive_970x250_atlas_P_1"},
		{src:"images/VS_SODOmotive_970x250_atlas_NP_1.jpg?1685055483772", id:"VS_SODOmotive_970x250_atlas_NP_1"}
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