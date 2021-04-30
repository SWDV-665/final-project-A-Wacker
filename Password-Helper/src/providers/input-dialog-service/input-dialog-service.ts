import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { PasswordServiceProvider } from '../password-service/password-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: PasswordServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompt(pass?, index?) {
    let alert = this.alertCtrl.create({
      title: pass ? 'Edit Password' : 'Add Password',
      message: pass ? null : 'Please enter a password.',
      inputs: [
        {
          name: 'site',
          placeholder: 'website...',
          value: pass ? pass.site : null
        },
        {
          name: 'password',
          placeholder: 'password...',
          value: pass ? pass.password : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: pass ? 'Save' : 'Add',
          handler: data => {
            if (index !== undefined) {
              pass.Site = data.site;
              pass.password = data.password;
              this.dataService.editPassword(pass, index);
            } else {
              this.dataService.addPassword(data);
            }
            
          }
        }
      ]
    });
    alert.present();
  }
}
