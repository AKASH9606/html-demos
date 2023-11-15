



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login Form</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <label for="username">Username:</label>
        <input type="text" id="username" formControlName="username" required><br>

        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password" required><br>

        <button type="submit" [disabled]="!loginForm.valid || !canLogin()">Login</button>
        <button type="button" (click)="resetForm()">Reset</button>

        <p id="message">{{ message }}</p>
    </form>
  `,
  styles: [`
  h2 {
    color: #333;
    text-align: center;
  }

  form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ddd;
    color: #666;
    cursor: not-allowed;
  }

  #message {
    margin-top: 10px;
    text-align: center;
    color: #333;
  }

  small {
    display: block;
    margin-top: 5px;
    color: red;
  }
`]
})

export class LoginComponent {
  public loginForm: FormGroup;
  private attempts: number = 3;
  public message: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      if (this.authenticate(username, password)) {
        this.message = 'Login successful!,Welcome Tauheer';
      } else {
        this.attempts--;
        if (this.attempts === 0) {
          this.message = 'Invalid credentials. Attempts exhausted. Login button disabled.';
          this.loginForm.disable();
        } else {
          this.message = `Invalid credentials. Attempts left: ${this.attempts}`;
        }
      }
    } else {
      this.message = 'Please fill in all required fields.';
    }
  }

  public resetForm(): void {
    this.loginForm.reset();
    this.message = '';
    this.loginForm.enable();
    this.attempts = 3;
  }

  public canLogin(): boolean {
    return this.attempts > 0 && this.loginForm.enabled;
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  private authenticate(username: string, password: string): boolean {
    // Replace this with actual authentication logic
    return username === 'tauheer' && password === 'tauheer';
  }
}