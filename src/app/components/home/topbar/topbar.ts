import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss']
})
export class Topbar {

  constructor(private router: Router) {}

  logout() {
    signOut(auth)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  }

}
