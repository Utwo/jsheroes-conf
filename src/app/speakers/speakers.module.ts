import { NgModule } from '@angular/core';

import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import { SpeakerComponent } from './speaker/speaker.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SpeakersRoutingModule
  ],
  declarations: [SpeakersComponent, SpeakerComponent]
})
export class SpeakersModule { }
