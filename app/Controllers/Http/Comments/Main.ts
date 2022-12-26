import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Store}

export default class MainsController {
  public async store({ request, auth }: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
