import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [BrowserModule, FormsModule, QRCodeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
