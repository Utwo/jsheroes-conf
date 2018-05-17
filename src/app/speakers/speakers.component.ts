import {Component, OnInit} from '@angular/core';
import {CallApiService} from '../services/call-api.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
})
export class SpeakersComponent implements OnInit {

  public schedules = [];

  constructor(private callApiService: CallApiService) {
  }

  ngOnInit() {
    this.callApiService.getJSON().subscribe((res) => this.schedules = res);
  }

}
