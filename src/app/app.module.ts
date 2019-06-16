import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {SlugPipe} from './shared/slug.pipe';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './home/home.component';
import { SpeakerComponent } from './speakers/speaker/speaker.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TalkComponent } from './talk/talk.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    NotFoundComponent,
    SpeakerComponent,
    SpeakersComponent,
    TalkComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    SlugPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
