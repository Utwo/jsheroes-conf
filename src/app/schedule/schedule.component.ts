import {Component, OnInit} from '@angular/core';
import {CallApiService} from '../services/call-api.service';

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
      const filteredItems = [];
      res.map(item => {
        if (filteredItems[item.day]) {
          filteredItems[item.day].push(item);
        } else {
          filteredItems[item.day] = [item];
        }
      });
      this.schedules = filteredItems;
    });
  }

}
