Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
}) ;

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data+'">'
    })
}