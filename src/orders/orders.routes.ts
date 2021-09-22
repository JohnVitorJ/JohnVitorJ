import express from 'express';
import {TitlesController} from './orders.controller'

const Controller = new TitlesController();

export default express.Router()
.get('/', Controller.list)