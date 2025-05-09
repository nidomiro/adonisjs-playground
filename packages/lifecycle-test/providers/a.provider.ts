import { ApplicationService } from '@adonisjs/core/types'

import { setTimeout } from 'node:timers/promises'

export default class AProvider {
  constructor(protected app: ApplicationService) {
    console.log('A Provider constructor')
  }

  register() {
    console.log('A Provider register')
  }

  async boot() {
    console.log('A Provider boot')
    const b = await this.app.container.make('b')
    console.log('calling b in a')
    b()
  }

  async start() {
    console.log('A Provider start')
  }

  async ready() {
    console.log('A Provider ready')
  }

  async shutdown() {
    console.log('A Provider shutdown started')
    await setTimeout(2000)
    console.log('A Provider shutdown finished')
  }
}
