import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragdropdemoComponent } from './dragdropdemo/dragdropdemo.component';
import { MaindragdropComponent } from './maindragdrop/maindragdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    DragdropdemoComponent,
    MaindragdropComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
