import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private localStorageService: LocalStorageService,
    public dialog: MatDialog
  ) {}

  openModal(): void {
    const data = this.localStorageService.retrieve();
    this.dialog.open(ModalComponent, {
      width: '375px',
      panelClass: 'session-modal',
      autoFocus: false,
      data
    });
  }

}
