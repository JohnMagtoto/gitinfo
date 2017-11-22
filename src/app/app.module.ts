import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoblockComponent } from './infoblock/infoblock.component';
import { HeaderComponent } from './infoblock/header/header.component';
import { BodyComponent } from './infoblock/body/body.component';
import { CollapseDirective } from './collapse';

@NgModule({
  declarations: [
    AppComponent,
    InfoblockComponent,
    HeaderComponent,
    BodyComponent,
    CollapseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
