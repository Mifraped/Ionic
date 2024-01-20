import { Component, OnInit, Injector } from '@angular/core';
import { BookServiceService } from '../sahared/book-service.service';
import { BookResp } from '../models/book-resp';
import { Book } from '../models/book';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})

export class VistaPage implements OnInit {

  public books: Book[] = []

  constructor(private bookService: BookServiceService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.books = []
  }

  public getBooks(id_libro: number){
    if(id_libro === 0){
      this.bookService.getAllBooks().subscribe((res: BookResp) => {
        this.books = res.data;
      })
    }else{
      this.bookService.getBook(id_libro).subscribe((res: BookResp) => {
        this.books = res.data;
      })
    }
  }

}
