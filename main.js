var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var img_id = "selfie1"
function start()
{
    recognition.start();
} 

    recognition.onresult = function(event){
        var Content = event.results[0][0].transcript;
        if(Content == "selfie"){
            speak();
        }
    }


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

setTimeout(function()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    img_id = "selfie1"
    take_snapshot()
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000)

setTimeout(function()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    img_id = "selfie2"
    take_snapshot()
    speak_data = "Taking your final Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000)

setTimeout(function()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    img_id = "selfie3"
    take_snapshot()

}, 5000)
}

function take_snapshot(){
    console.log(img_id)
    Webcam.take_snapshot(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id = "selfie1" src = ">' +data_uri + '">'
        }
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id = "selfie2" src = ">' +data_uri + '">'
        }
        if(img_id == "selfie3"){
            document.getElementById("result1").innerHTML = '<img id = "selfie3" src = ">' +data_uri + '">'
        }
    });
}