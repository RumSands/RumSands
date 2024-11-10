import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUSComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  subject: string = '';
  message: string = '';

  sendEmail() {
    const recipientEmail = 'hebaalahmad99@yahoo.com';
    
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
  }
}
