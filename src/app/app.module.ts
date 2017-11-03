import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {appRoutingProviders, routing} from './app.routing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {SlugPipe} from './shared/slug.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    SharedModule,
    CoreModule.forRoot(),
  ],
  providers: [
    appRoutingProviders,
    SlugPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
