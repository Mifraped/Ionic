import { Book } from './book';
export class BookResp {
    constructor(public error: boolean, public codigo: number, public message: string, public data: Book[]){}
}
