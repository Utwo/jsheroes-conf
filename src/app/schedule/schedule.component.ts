import {Component, OnInit} from '@angular/core';
import {CallApiService} from '../core/call-api.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent implements OnInit {

  public schedules: any = [];

  constructor(private callApiService: CallApiService) {
  }

  ngOnInit() {
    this.callApiService.getJSON().subscribe((res) => {
      const filtered_items = [];
      res.map(item => {
        if (filtered_items[item.day]) {
          filtered_items[item.day].push(item);
        } else {
          filtered_items[item.day] = [item];
        }
      });
      this.schedules = filtered_items;
    });
  }

}
