import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PasswordServiceProvider } from '../../providers/password-service/password-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  title = "Password Helper";

  passwords = [];
  errorMessage: string;
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: PasswordServiceProvider, public inputDialogService: InputDialogServiceProvider) {
  
  }

  loadPasswords() {
    return this.dataService.getPasswords();
  }

  addPassword() {
    this.inputDialogService.showPrompt();
  }

  editPassword(pass, index) {
    const toast = this.toastCtrl.create({
      message: "Editing " + pass.site + pass._id,
      duration: 3000
    });

    toast.present();

    this.inputDialogService.showPrompt(pass, index);
  }



  removePassword(pass, index) {
    const toast = this.toastCtrl.create({
      message: "Deleting item #" + index + 1,
      duration: 3000
    });

    toast.present();
    
    this.dataService.removePassword(index);
}

}