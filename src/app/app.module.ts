import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { StudentsModule } from './students/students.module';
import { DonorsModule } from './donors/donors.module';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './students/students.effects';
import { studentsReducer } from './reducers/students.reducer';
import { StoreModule } from '@ngrx/store';
import { ContactModule } from './contact/contact.module';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HomeModule,
    StudentsModule,
    DonorsModule,
    ContactModule,
    GalleryModule,
    EffectsModule.forRoot([StudentEffects]),
    StoreModule.forRoot({ students: studentsReducer })
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
