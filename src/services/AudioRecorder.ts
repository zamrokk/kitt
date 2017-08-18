import { Injectable } from '@angular/core';
import {Device, MediaPlugin} from "ionic-native";
import {Platform} from "ionic-angular";

@Injectable()
export class AudioRecorder {

  mediaPlugin: MediaPlugin = null;
  state: AudioRecorderState = AudioRecorderState.Ready;

  fileUrl:string;


  constructor(platform: Platform){

    platform.ready().then(() => {
      console.log('Now you can use plugins on '+Device.platform);
      this.fileUrl='cdvfile://localhost/temporary/recording'+ (Device.platform == 'iOS' ? '.wav':'.aac');
      this.mediaPlugin = new MediaPlugin(this.fileUrl);
      this.mediaPlugin.init.then(() => {
        console.log('init Finished');
       }, (err) => {
        console.log('something went wrong! error code: ' + err.code + ' message: ' + err.message);
       });
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  startRecord() {
      this.mediaPlugin.startRecord();
    this.state = AudioRecorderState.Recording;
  }

  stopRecord() {
      this.mediaPlugin.stopRecord();
    this.state = AudioRecorderState.Recorded;

  }

  play() {
      this.mediaPlugin.play();
    this.state = AudioRecorderState.Playing;

  }

  stop() {
      this.mediaPlugin.stop();
    this.mediaPlugin.release();
    this.state = AudioRecorderState.Ready;

  }
}

export enum AudioRecorderState {
  Ready,
  Recording,
  Recorded,
  Playing
}
