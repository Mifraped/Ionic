import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaPageRoutingModule } from './vista-routing.module';

import { VistaPage } from './vista.page';
import { BookCardComponent } from '../components/book-card/book-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaPageRoutingModule,
  ],
  declarations: [VistaPage, BookCardComponent]
})
export class VistaPageModule {}
