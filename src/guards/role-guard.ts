import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { auth } from '../app/firebase';

export const roleGuard: CanActivateFn = () => {
  const router = inject(Router);

  const user = auth.currentUser;

  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
