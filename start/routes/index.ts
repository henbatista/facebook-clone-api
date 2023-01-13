import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'
import './uploads'
import './posts'
import './comments'
import './reactions'
import './follows'
import './profiles'
import './messages'
import './conversations'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/test', async ({ view }) => {
  return view.render('emails/test')
})

Route.get('/user-register', async ({ view }) => {
  return view.render('emails/register')
})

Route.get('/forgot-password', async ({ view }) => {
  return view.render('emails/forgot-password')
})

Route.get('/uploads', async ({ view }) => {
  return view.render('uploads')
})
