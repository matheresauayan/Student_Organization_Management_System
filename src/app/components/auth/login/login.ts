import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';

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

  async login() {
    console.log("LOGIN CLICKED");
    try {
      const email = `${this.username}@ustp.edu.ph`;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        this.password
      );

      const uid = userCredential.user.uid;

      // 🔥 Get role from Firestore
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const role = docSnap.data()['role'];

        // ✅ Save role for Guard
        localStorage.setItem('role', role);
      }

      // Redirect after login
      this.router.navigate(['/home/dashboard']);

    } catch (err: any) {
  alert(err.code);   // show firebase error code
  console.error(err);
}
  }
}
