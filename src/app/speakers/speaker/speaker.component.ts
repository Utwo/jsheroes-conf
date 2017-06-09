import {Component, OnInit} from '@angular/core';
import {CallApiService} from '../../core/call-api.service';
import {SlugPipe} from "../../shared/slug.pipe";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
})
export class SpeakerComponent implements OnInit {

  public speaker;
  public slug;

  constructor(private slugPipe: SlugPipe, private activatedRoute: ActivatedRoute, private callApiService: CallApiService) {
    this.activatedRoute.params.subscribe((slug) => this.slug = slug.name);
  }

  ngOnInit() {
    this.callApiService.getJSON().subscribe((res) => {
      res.map(item => {
        if (item.speaker && this.slugPipe.transform(item.speaker.name) === this.slug) {
          this.speaker = item.speaker;
        }
      });
    });
  }
}
