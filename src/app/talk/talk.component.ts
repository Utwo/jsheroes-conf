import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CallApiService} from '../core/call-api.service';
import {SlugPipe} from '../shared/slug.pipe';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
})
export class TalkComponent implements OnInit {

  public talk;
  public slug;

  constructor(private slugPipe: SlugPipe, private activatedRoute: ActivatedRoute, private callApiService: CallApiService) {
    this.activatedRoute.params.subscribe((slug) => this.slug = slug.name);
  }

  ngOnInit() {
    this.callApiService.getJSON().subscribe((res) => {
      res.map(item => {
        if (this.slugPipe.transform(item.talk_name) === this.slug) {
          this.talk = item;
        }
      });
    });
  }

}
