import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UpdateValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    key: schema.string({ trim: true }, [rules.exists({ table: 'user_keys', column: 'key' })]),
    password: schema.string({ trim: true }, [rules.confirmed('passwordConfirmation')]),
    name: schema.string({ trim: true }),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
