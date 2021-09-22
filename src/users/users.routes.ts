import express from 'express';
import {UsersController} from './users.controller'

const Controller = new UsersController();

export default express.Router()
.get('/', Controller.list)
.get('/:id', Controller.getById)
.post('/', Controller.create)
