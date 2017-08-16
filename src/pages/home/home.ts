import { Component } from '@angular/core';
import {Device, MediaPlugin} from 'ionic-native';
import {NavController, AlertController, Platform} from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  media: MediaPlugin;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,platform: Platform) {
    platform.ready().then(() => {
      console.log('Now you can use plugins');
      this.media = new MediaPlugin('cdvfile://localhost/temporary/recording'+ Device.platform == 'iOS' ? '.wav':'.aac');
    });
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
      this.media.startRecord();
    }
    catch (e) {
      this.showAlert('Could not start recording.',e);
    }
  }

  stopRecording() {
    try {
      this.media.stopRecord();
    }
    catch (e) {
      this.showAlert('Could not stop recording.',e);
    }
  }

  startPlayback() {
    try {
      this.media.play();
    }
    catch (e) {
      this.showAlert('Could not play recording.',e);
    }
  }

  stopPlayback() {
    try {
      this.media.stop();
    }
    catch (e) {
      this.showAlert('Could not stop playing recording.',e);
    }
  }

}
