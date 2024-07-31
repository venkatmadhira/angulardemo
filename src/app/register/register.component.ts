import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };
  successMessage: string = '';

  constructor(private registerService: RegisterService) {}

  onSubmit() {
    this.registerService.register(this.user).subscribe(response => {
      this.successMessage = 'Registration successful!';
      console.log('registration successful'+JSON.stringify(this.user))
    });
  }
}
