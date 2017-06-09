import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TalkComponent} from './talk.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

export const routerConfig = [{
  path: '',
  component: TalkComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [TalkComponent]
})
export class TalkModule {
}
