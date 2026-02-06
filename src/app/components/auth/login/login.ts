import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  username = '';
  password = '';
  rememberMe = false;

  constructor(private router: Router) {}

  login() {
    const email = `${this.username}@ustp.edu.ph`;

    signInWithEmailAndPassword(auth, email, this.password)
      .then(() => {
        this.router.navigate(['/home/dashboard']);
      })
      .catch(err => {
        alert('Login failed');
        console.error(err);
      });
  }
}
