import Route from '@ioc:Adonis/Core/Route'

Route.post('/follow', 'Follows/Follow.store').middleware('auth')
Route.post('/unfollow', 'Follows/Follow.store').middleware('auth')

Route.get('/following', 'Follows/following.index').middleware('auth')
Route.get('/followers', 'Follows/followers.index').middleware('auth')

Route.delete('/followers:id', 'Follows/followers.destroy').middleware('auth')
