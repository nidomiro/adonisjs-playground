import { ApplicationService } from '@adonisjs/core/types'
import { setTimeout } from 'node:timers/promises'

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    b: () => void
  }
}

export default class BProvider {
  constructor(protected app: ApplicationService) {
    console.log('B Provider constructor')
  }

  register() {
    console.log('B Provider register')
    this.app.container.singleton('b', async (resolver) => {
      console.log('b Factory called')
      const c = await resolver.make('c')
      console.log('calling c in b')
      c()
      return () => {
        console.log('singelton from BProvider called')
      }
    })
  }

  async boot() {
    console.log('B Provider boot')
  }

  async start() {
    console.log('B Provider start')
  }

  async ready() {
    console.log('B Provider ready')
  }

  async shutdown() {
    console.log('B Provider shutdown started')
    await setTimeout(2000)
    console.log('B Provider shutdown finished')
  }
}
