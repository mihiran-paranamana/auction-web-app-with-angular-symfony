import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from './public/items/items.component';
import {AddItemComponent} from './public/add-item/add-item.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {AutoBidConfigComponent} from './public/auto-bid-config/auto-bid-config.component';
import {ItemDetailsComponent} from './public/item-details/item-details.component';
import {ItemBidHistoryComponent} from './public/item-bid-history/item-bid-history.component';
import {HomePageComponent} from './public/home-page/home-page.component';
import {LoginPageComponent} from './public/login-page/login-page.component';
import {ForbiddenComponent} from './shared/forbidden/forbidden.component';
import {ProfileComponent} from './public/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'items/add',
    component: AddItemComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'autoBidConfig',
    component: AutoBidConfigComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'items/:id/details',
    component: ItemDetailsComponent,
  },
  {
    path: 'items/:id/bidHistory',
    component: ItemBidHistoryComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
