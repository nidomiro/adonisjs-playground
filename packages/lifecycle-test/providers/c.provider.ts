import { logger } from '#services/logger'
import { ApplicationService } from '@adonisjs/core/types'
import { setTimeout } from 'node:timers/promises'

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    c: () => void
  }
}

export default class CProvider {
  constructor(protected app: ApplicationService) {
    logger.info('C Provider constructor')
    this.app.container.singleton('c', () => {
      logger.info('DI: c Factory called')
      return () => {
        logger.info('DI: singleton from CProvider called')
      }
    })
    logger.info('C Provider constructor finished')
  }

  register() {
    logger.info('C Provider register')
    logger.info('C Provider register finished')
  }

  async boot() {
    logger.info('C Provider boot')
    await setTimeout(500)
    logger.info('C Provider boot finished')
  }

  async start() {
    logger.info('C Provider start')
    await setTimeout(500)
    logger.info('C Provider start finished')
  }

  async ready() {
    logger.info('C Provider ready')
    await setTimeout(500)
    logger.info('C Provider ready finished')
  }

  async shutdown() {
    logger.info('C Provider shutdown')
    await setTimeout(500)
    logger.info('C Provider shutdown finished')
  }
}
