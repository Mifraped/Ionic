import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookResp } from '../models/book-resp';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/books"

  public getAllBooks():Observable<BookResp>{
    return this.http.get<BookResp>(this.url + "?id_user=2");
  }

  public getBook(id_libro: number):Observable<BookResp>{    
    return this.http.get<BookResp>(this.url + "?id_user=2" + "&id_book=" + id_libro);
  }

  public deleteBook(id_libro: number):Observable<BookResp>{
    return this.http.delete<BookResp>(this.url + "?id_user=2" + "&id_book=" + id_libro)
  }

  public addBook(newBook: Book):Observable<BookResp>{
    return this.http.post<BookResp>(this.url, newBook)
  }

  public updateBook(newBook: Book):Observable<BookResp>{
    return this.http.put<BookResp>(this.url, newBook)
  }
}
