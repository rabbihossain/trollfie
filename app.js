 var v = document.getElementById('experiment');
   navigator.getUserMedia = navigator.mozGetUserMedia;
   if (navigator.getUserMedia) {
      navigator.getUserMedia(
         {
            video:true,
            audio:false
         },
         function(stream) {
            var url = window.URL;
            v.src = url ? url.createObjectURL(stream) : stream;
            v.play();
         },
         function(error) {
            alert('Something went wrong. (error code ' + error.code + ')');
         }
      );
   }
   else {
      alert('Sorry, the browser you are using doesn\'t support getUserMedia');
   }

var captureIcon = document.getElementById('capture-icon');
var captureSound = document.getElementById('capture');

captureIcon.addEventListener('click', function(){
   captureSound.play();
   document.getElementById('experiment').style.display = 'none';
   document.getElementById('monkey').src = "icons/" + Math.floor((Math.random() * 5) + 1) + ".jpg";
   document.getElementById('monkey').style.display = 'block';
   captureIcon.style.zIndex = "-50";
});

document.getElementById('monkey').addEventListener('click', function(){
   document.getElementById('experiment').style.display = 'block';
   document.getElementById('monkey').style.display = 'none';
   captureIcon.style.zIndex = "50";
});
