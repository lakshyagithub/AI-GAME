function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	capture = createCapture(VIDEO);
  	capture.size(800, 400);
	capture.parent('game_console');

	//To get poseNet initialized
	poseNet = ml5.poseNet(capture, modelloaded);
	//To turn on poseNet after loading it and sending it to gotPoses and video
	poseNet.on('pose', gotPoses);
}

function draw() {
	game();
}

function modelloaded()
{
 	//To check if the modal is loaded or not
  	console.log("Modal Loaded!");
}

function gotPoses(results)
{
  //if we  got somthing from results then
  if (results.length > 0)
    {
      //To get the nose's X and Y
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      //And console them
    }
}