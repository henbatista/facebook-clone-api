import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    content: schema.string({ trim: true }),
    postId: schema.number([rules.exists({ table: 'post', column: 'id' })]),
  })

  public cacheKey = this.ctx.routeKey

  public messages: CustomMessages = {}
}
