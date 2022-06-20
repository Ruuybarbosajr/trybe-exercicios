import mysql from 'mysql2/promise'
import Book from '../interfaces/book.interface'

export default class BookModel {
  constructor (public connection: mysql.Pool) {
    this.connection = connection
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection
      .execute('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.execute<mysql.ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}

const person = {
  name: 'ruy',
  age: 23
}