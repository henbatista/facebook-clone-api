/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.get('/conversations', 'Conversation/Main.index').middleware('auth')
Route.delete('/conversations', 'Conversation/Main.show').middleware('auth')