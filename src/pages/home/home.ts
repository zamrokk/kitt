import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
//import recognizeFile from 'watson-speech/speech-to-text/recognize-file';
import { AudioRecorder,AudioRecorderState } from '../../services/Audiorecorder';

@Component({
  templateUrl: 'home.html',
  providers: [AudioRecorder]
})
export class HomePage {

  //transcript:string;
  AudioRecorderState = AudioRecorderState;
  //TODO, send real time speech, get response
  // when detect . , then send to conversation API, wait response and read it synchronously


  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,public audioRecorder: AudioRecorder) {
  }


  showAlert(message,error) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      message:error?JSON.stringify(error):"",
      buttons: ['OK']
    });
    alert.present();
  }

  startRecording() {
    try {
      this.audioRecorder.startRecord();
    }
    catch (e) {
      this.showAlert('Could not start recording.',e);
    }
  }

  stopRecording() {
    try {
      this.audioRecorder.stopRecord();
    }
    catch (e) {
      this.showAlert('Could not stop recording.',e);
    }
  }

  startPlayback() {
    try {
      this.audioRecorder.play();

    }
    catch (e) {
      this.showAlert('Could not play recording.',e);
    }
  }

  stopPlayback() {
    try {
      this.audioRecorder.stop();
    }
    catch (e) {
      this.showAlert('Could not stop playing recording.',e);
    }
  }

}



//https://kitt-backend.eu-gb.mybluemix.net/

/*
HTTP.get('https://localhost:3001/api/speech-to-text/token',null,null)
    .then(function(response) {
      return response.data;
    })
    .then(function(token) {
      var stream = recognizeFile({
        token: token,
        file:this.fileUrl,
        outputElement: '#transcript'
      });

      stream.on('error', function(err) {
        console.log(err);
      });
    })
    .catch(function(error) {
      console.log(error);
    });*/

/*
      this.socket = io('wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize', null, null,
        {'Authorization':'Basic YzhmNDZmNDctODJmZS00ZTg4LTlkNDUtYWY3YTkxZjdmNWE4OnNHcDd2YjFTY0Fnag=='}, null);

      //hack
      var patch = socketioWildcard(io.Manager);
      patch(this.socket);

      //reception
      this.socket.on('*', function (message: any) {
        console.log('Websocket Event : '+JSON.stringify(message));
        message = JSON.parse(message);
        if(message.state)
          if(message.state == "listening")
            this.socketListening = true;
        console.log("Message received: " + message);
      });

      this.socket.on('connect',function () {
        console.log("Websocket : connected to Speech to text");
        this.socket.emit('','{"action": "start", "content-type": "audio/l16;rate=16000"}');
      });

      this.socket.on('disconnect',function () {
        console.log("Websocket : disconnected to Speech to text");
      });

      */

/*try to send something
var reader = new FileReader();
reader.onloadend = (evt: any) => {
  console.log(evt);
  var blob: any = new Blob(['cdvfile://localhost/temporary/recording'+ Device.platform == 'iOS' ? '.wav':'.aac']);
  console.log(blob);
  this.socket.emit('',reader.readAsArrayBuffer(blob));
};*/



/*
File.resolveDirectoryUrl('cdvfile://localhost/temporary').then(function (directoryEntry:DirectoryEntry) {
  File.getFile(directoryEntry,'recording.wav',{
    create: true,
  exclusive: false
})
    .then(function(fileEntry :FileEntry){
      console.log(fileEntry.toURL());
      fileEntry.file(function (file) {
        var reader = new FileReader();
        var blob:Blob;

        reader.onloadend = function() {
          console.log("Successful file read: " + this.result);
          console.log(fileEntry.fullPath + ": " + this.result);

        };

        reader.readAsArrayBuffer(blob);

      }, function (error:any) {
        console.log(error);
      });
    })
    .catch(function (error:any) {
      console.log(error);
    });
}).catch(function (error:any) {
  console.log(error);
});*/




/*
fs.createReadStream(this.fileUrl)
  .pipe(this.speechToTextV1.createRecognizeStream({ content_type: 'audio/l16; rate=44100' }))
  .pipe(fs.createWriteStream(this.outputFileUrl));
*/
