import { Component, OnInit, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../sahared/book-service.service';
import { BookResp } from '../models/book-resp';
import { Book } from '../models/book';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  private bookService!: BookServiceService;

  public id_libro?: number;
  public title?: string;
  public author?: string;
  public type?: string;
  public price?: number;
  public photo?: string;

  constructor(private injector: Injector) { }

  ngOnInit() {
    this.bookService = this.injector.get(BookServiceService);
  }

  public deleteBook(id_libro: number){
    this.bookService.deleteBook(id_libro).subscribe((res: BookResp) => {
      alert(res.message)
      this.id_libro = undefined
    })
  }

  public addBook(){
    let newBook = new Book(this.title, this.type, this.author, this.price, this.photo, undefined, 2)
    this.bookService.addBook(newBook).subscribe((res: BookResp) => {
      alert(res.message)
      this.title = undefined
      this.author = undefined
      this.type = undefined
      this.price = undefined
      this.photo = undefined
    })
  }

  public updateBook(){
    let newBook = new Book(this.title, this.type, this.author, this.price, this.photo, this.id_libro, 2)
    this.bookService.updateBook(newBook).subscribe((res: BookResp) => {
      alert(res.message)
      this.title = undefined
      this.author = undefined
      this.type = undefined
      this.price = undefined
      this.photo = undefined
      this.id_libro = undefined
    })
  }

  public alert(){
    alert("Faltan campos por rellenar")
  }

}
