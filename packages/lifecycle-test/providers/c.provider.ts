import { ApplicationService } from '@adonisjs/core/types'
import { setTimeout } from 'node:timers/promises'

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    c: () => void
  }
}

export default class CProvider {
  constructor(protected app: ApplicationService) {
    console.log('C Provider constructor')
    this.app.container.singleton('c', () => {
      console.log('c Factory called')
      return () => {
        console.log('singelton from C Provider called')
      }
    })
  }

  register() {
    console.log('C Provider register')
  }

  async boot() {
    console.log('C Provider boot')
  }

  async start() {
    console.log('C Provider start')
  }

  async ready() {
    console.log(' CProvider ready')
  }

  async shutdown() {
    console.log('C Provider shutdown started')
    await setTimeout(2000)
    console.log('C Provider shutdown finished')
  }
}
