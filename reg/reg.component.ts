import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get mobileNumber() {
    return this.registrationForm.get('mobileNumber');
  }

  get dateOfBirth() {
    return this.registrationForm.get('dateOfBirth');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Perform form submission logic here
      console.log('Form submitted successfully:', this.registrationForm.value);
    } else {
      // Mark controls as touched to trigger validation messages
      this.registrationForm.markAllAsTouched();
    }
  }
}