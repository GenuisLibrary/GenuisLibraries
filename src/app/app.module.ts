import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataEx1Service } from './data-ex1.service';
import { AppComponent } from './app.component';
import { MyNewCompComponent } from './my-new-comp/my-new-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MyNewCompComponent
  ],
  imports: [
    BrowserModule,
    /*ormsModule,
    HttpModule,*/
    BrowserAnimationsModule
  ],
  providers: [DataEx1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
