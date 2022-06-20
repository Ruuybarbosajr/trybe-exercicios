import express from 'express'

const router = express.Router()
import BookController from '../controllers/book.controller'

const bookController = new BookController()

router.get('/', bookController.getAll)

export default router