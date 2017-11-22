import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoblockComponent } from './infoblock/infoblock.component';
import { HeaderComponent } from './infoblock/header/header.component';
import { BodyComponent } from './infoblock/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoblockComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
