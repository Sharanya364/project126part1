subsurfer = "";
Madagascar = "";

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
    }
function draw()
{
    image(video, 0, 0, 400, 300);
}

function play()
{
    subsurfer.play();
    Madagascar.play();
}