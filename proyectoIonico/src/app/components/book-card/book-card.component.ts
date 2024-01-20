import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent  implements OnInit {

  @Input() libroPadre!: Book

  constructor() { }

  ngOnInit() {}

}
