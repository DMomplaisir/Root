<template>
  <v-app>
    <v-container>
      <video ref="video_container" autoplay="true" id="videoElement">
      </video>
      <div> {{video}} </div>
      <button id="rec" v-on:click="recordMode()">Record</button>
      <button v-on:click="stop()"> Stop bb </button>
    </v-container>

  </v-app>
</template>
<script>
export default{
  name: 'EmergencyMode',
  data: function() {
    return{
      recording: true,
      video: [],
      recorder_new: null,
      dataURL: ''
    }
  },
  mounted(){

},
  methods: {
    recordMode: function() {
      var videoStream;
      let recordingTime = 5000;
      function wait(delayInMS) {
        return new Promise(resolve => setTimeout(resolve, delayInMS));
      }
      var self = this;
      beginProcess();
      function beginProcess() {
        navigator.mediaDevices.getUserMedia({video:true})
        .then(useMedia)
        .catch (e => {console.error('getUserMedia is not working ' + e)});
      }

      function useMedia(stream) {
        videoStream = stream;
        var video = document.querySelector('video');
        video.src = URL.createObjectURL(stream);
        var recorder = new MediaRecorder(stream, {mimeType: "video/webm"});

        recorder.ondatavailable = function(event){
            self.video.push(event.data);
        }
        recorder.start(100);


      }


    //   function hasGetUserMedia() {
    //     return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
    //           navigator.mozGetUserMedia || navigator.msGetUserMedia);
    // }
    //   if (hasGetUserMedia()) {
    //     // Good to go
    //     var errorCallback = function(e) {
    //         console.log('Reeeejected!', e);
    //     };
    //     var self = this;
    //     if (this.recording) {
    //       navigator.getUserMedia({video:true, audio:true},
    //         function(stream) {
    //           self.stream = stream;
    //           var video = document.querySelector('video');
    //           var videoSettings = {
    //             mimeType: 'video/webm'
    //           };
    //
    //           self.videoRecording = new MediaRecorder(stream, videoSettings);
    //           self.videoRecording.start();
    //           video.srcObject = stream;
    //
    //       }, errorCallback);
    //
    //     }
    //     else {
    //       self.videoRecording.stop();
    //
    //       self.videoRecording.ondataavailable =
    //       self.videoRecording.onstop = function(event) {
    //         console.log('Media has stopped recording');
    //         var blob = new Blob(this.video, {type:'media/webm'});
    //         self.dataURL = window.url.createObjectURL(blob);
    //         console.log('dataURL');
    //       }
    //     }
    //   }
    },
    stop: function(){
      this.recording = false;
    }
  }
  }

</script>
