import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutodevopsService} from './autodevops.service';
import { AppComponent } from './app.component';
import { AutodevopsComponent } from './autodevops/autodevops.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AutodevopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AutodevopsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
