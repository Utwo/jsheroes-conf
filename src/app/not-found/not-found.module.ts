import {NgModule} from '@angular/core';

import {NotFoundComponent} from './not-found.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

export const routerConfig = [{
  path: '',
  component: NotFoundComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {
}
