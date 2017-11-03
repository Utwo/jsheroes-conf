import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { CardComponent } from './card/card.component';
import { SlugPipe } from './slug.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    SlugPipe
  ],
  declarations: [CardComponent, SlugPipe]
})
export class SharedModule { }
