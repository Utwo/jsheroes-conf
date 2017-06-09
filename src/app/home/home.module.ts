import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

export const routerConfig = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
