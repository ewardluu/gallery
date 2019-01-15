import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal-show-image',
  templateUrl: './modal-show-image.component.html',
  styleUrls: ['./modal-show-image.component.scss']
})
export class ModalShowImageComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalShowImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
