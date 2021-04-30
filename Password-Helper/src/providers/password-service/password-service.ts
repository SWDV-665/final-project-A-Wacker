/*
  Generated class for the PasswordsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class PasswordServiceProvider {

  passwords = [];

  constructor() {
    console.log('Hello PasswordServiceProvider');
  }

  getPasswords() { 
    console.log(this.passwords);
    
    return this.passwords;
  }

  removePassword(index) {  
    console.log("#### Remove Password - index = ", index);
    this.passwords.splice(index, 1);
  }

  addPassword(pass) {
    this.passwords.push(pass);
  }

  editPassword(pass, index) {
    this.passwords[index] = pass;
  }
}
