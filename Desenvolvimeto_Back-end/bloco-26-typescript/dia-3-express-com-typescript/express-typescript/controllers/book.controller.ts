// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/book.service';

class BooksController {

  private bookService: BookService;

  constructor() {
    this.bookService = new BookService()
  }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };
}

export default BooksController;