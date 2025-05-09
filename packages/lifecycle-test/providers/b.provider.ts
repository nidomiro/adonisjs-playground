import { logger } from '#services/logger'
import { ApplicationService } from '@adonisjs/core/types'
import { setTimeout } from 'node:timers/promises'

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    b: () => void
  }
}

export default class BProvider {
  constructor(protected app: ApplicationService) {
    logger.info('B Provider constructor')
    logger.info('B Provider constructor finished')
  }

  register() {
    logger.info('B Provider register')
    this.app.container.singleton('b', async (resolver) => {
      logger.info('DI: b Factory called')
      const c = await resolver.make('c')
      logger.info('DI: calling c in b Factory')
      c()
      return () => {
        logger.info('DI: singleton from BProvider called')
      }
    })
    logger.info('B Provider register finished')
  }

  async boot() {
    logger.info('B Provider boot')
    await setTimeout(500)
    logger.info('B Provider boot finished')
  }

  async start() {
    logger.info('B Provider start')
    await setTimeout(500)
    logger.info('B Provider start finished')
  }

  async ready() {
    logger.info('B Provider ready')
    await setTimeout(500)
    logger.info('B Provider ready finished')
  }

  async shutdown() {
    logger.info('B Provider shutdown')
    await setTimeout(500)
    logger.info('B Provider shutdown finished')
  }
}
