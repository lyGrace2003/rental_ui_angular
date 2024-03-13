import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { ScreensComponent } from './screens.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FriendPageComponent } from './friend-page/friend-page.component';
import { BelongingPageComponent } from './belonging-page/belonging-page.component';
import { BorrowedPageComponent } from './borrowed-page/borrowed-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ScreensComponent,
    LandingPageComponent,
    FriendPageComponent,
    BelongingPageComponent,
    BorrowedPageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ScreensModule { }
