import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SpeakersComponent} from './speakers.component';
import {SpeakerComponent} from './speaker/speaker.component';

const routes: Routes = [
  {
    path: '',
    component: SpeakersComponent
  },
  {
    path: ':name',
    component: SpeakerComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule {
}
