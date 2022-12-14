import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'
import './uploads'
import './posts'
import './comments'
import './reactions'
import './follows'
import './profiles'

Route.get('/', async () => {
  return { hello: 'world' }
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
