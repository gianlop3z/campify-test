import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionI } from '../../core/interfaces/session.interface';
import { LocalStorageService } from '../../core/services/local-storage/local-storage.service';
import { timesValidator } from '../../core/validators/times.validator';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SessionI,
    private localStorageService: LocalStorageService,
    public dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder
  ) {}

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]]
    }, {
      validators: [timesValidator],
      updateOn: 'blur'
    });
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.data) {
      this.form.setValue(this.data);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.localStorageService.save(this.form.value);
      this.onClose();
    }
  }

}
