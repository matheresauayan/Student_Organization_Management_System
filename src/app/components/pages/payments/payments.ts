import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.html',
  styleUrls: ['./payments.scss']
})
export class Payments implements OnInit {

  // ✅ Payments array
  payments: any[] = [];

  // 🔥 Runs when page loads
  async ngOnInit() {
    await this.loadPayments();
  }

  // ✅ Load data from Firestore
  async loadPayments() {
    try {

      const querySnapshot = await getDocs(collection(db, 'payments'));

      this.payments = []; // clear old data

      querySnapshot.forEach((doc) => {
        this.payments.push({
          id: doc.id,
          ...doc.data()
        });
      });

      console.log('Payments loaded:', this.payments);

    } catch (error) {
      console.error('Error loading payments:', error);
    }
  }

}
