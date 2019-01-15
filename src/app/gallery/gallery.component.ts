import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../serivce/gallery.service';
import {  ngxLoadingAnimationTypes } from 'ngx-loading';
import { MatDialog } from '@angular/material';

import { ModalShowImageComponent } from '../component/modal-show-image/modal-show-image.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public page = 1;
  public dataGallery = [];
  public loading = true;
  public loadingImg = true;
  public NgxLoadingAnimationTypes  = ngxLoadingAnimationTypes;
  constructor(
    private galleryService: GalleryService,
    public dialog: MatDialog
  ) {  }

  ngOnInit() {
   this.getGallery(this.page);
  }

  getGallery(page) {
    this.galleryService.getImage(page).subscribe(
      res => {
         if (this.dataGallery.length === 0) {
          this.dataGallery = res.photos;
          this.loading = false;
         } else {
           const data = res.photos;
          this.dataGallery.push(...data);
          this.loadingImg = false;
         }
      },
      err => {console.error(err); }
    );
  }

  onScrollDown (ev) {
    this.loadingImg = true;
    this.page++;
    this.getGallery(this.page);
  }

  openDialog(item) {
    const dialogRef = this.dialog.open(ModalShowImageComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '90%',
      data: item
    }
    );
  }
}
