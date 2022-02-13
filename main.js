subsurfer = "";
Madagascar = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = "";

function preload()
{
    subsurfer = loadSound("subway.mp3");
    Madagascar = loadSound("Madagascar.mp3");
}

function setup()
    {
        canvas = createCanvas(400, 300);
        canvas.center();

        video = createCapture(VIDEO);
        video.hide();

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

function modelLoaded()
{
    console.log('Posenet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}
function draw()
{
    image(video, 0, 0, 400, 300);

    fill("#FF0000");
    stroke("FF0000");

    subsurfer = subsurfer.isPlaying();
    console.log(subsurfer);

    if(scoreLeftWrist > 0.2) 
    {
    circle(leftWristX, leftWristY, 20);
    }
}

function play()
{
    subsurfer.play();
    Madagascar.play();
}