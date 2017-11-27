import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

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
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
