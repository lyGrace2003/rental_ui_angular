import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreensComponent } from './screens.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FriendPageComponent } from './friend-page/friend-page.component';
import { BelongingPageComponent } from './belonging-page/belonging-page.component';
import { BorrowedPageComponent } from './borrowed-page/borrowed-page.component';

const routes: Routes = [{
  path: '', component: ScreensComponent, children:[
    {path: '', component: LandingPageComponent},
    {path: 'friends', component: FriendPageComponent},
    {path: 'belongings', component: BelongingPageComponent},
    {path: 'borrowed', component: BorrowedPageComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
