import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { reactionsTypes } from 'App/Utils'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.enum(reactionsTypes),
    postId: schema.number([rules.exists({ table: 'posts', column: 'id' })]),
  })

  public cacheKey = this.ctx.routeKey
  public messages: CustomMessages = {}
}
