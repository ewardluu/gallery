import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

import { MatDialogModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxLoadingModule } from 'ngx-loading';
import { ModalShowImageComponent } from './component/modal-show-image/modal-show-image.component';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ModalShowImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    InfiniteScrollModule,
    MatDialogModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  entryComponents: [ModalShowImageComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
