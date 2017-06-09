import { NgModule } from '@angular/core';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScheduleRoutingModule
  ],
  declarations: [ScheduleComponent]
})
export class ScheduleModule { }
