import express from 'express';
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from '../controllers/movies.controller';
const router = express.Router();

//CRUd functionality of movies


//R - Read movies
router.get('/',MovieIndex)

//C - for creating movies
router.post('/', MovieCreate)

//U - Update movies
router.put('/:id',MovieUpdate )  

//D - Delete movies
router.delete('/:id', MovieDelete)

export default router;
// This code defines a set of routes for handling CRUD operations on movies in an Express application.