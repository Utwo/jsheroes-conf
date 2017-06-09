import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCardModule, MdIconModule, MdTabsModule, MdToolbarModule} from '@angular/material';
import { CardComponent } from './card/card.component';
import { SlugPipe } from './slug.pipe';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    SlugPipe
  ],
  declarations: [CardComponent, SlugPipe]
})
export class SharedModule { }
