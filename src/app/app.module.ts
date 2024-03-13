import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreensModule } from './screens/screens.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScreensModule,
    MatToolbarModule,
    // HttpClientModule,
    // FormsModule, 
    // ReactiveFormsModule 
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
