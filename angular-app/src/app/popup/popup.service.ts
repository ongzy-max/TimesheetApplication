import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup.component';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog, private router: Router) {}

  openPopup() {
    this.dialog.open(PopupComponent);
  }
}
