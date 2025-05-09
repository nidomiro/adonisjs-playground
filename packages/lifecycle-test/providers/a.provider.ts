import { logger } from '#services/logger'
import { ApplicationService } from '@adonisjs/core/types'

import { setTimeout } from 'node:timers/promises'

export default class AProvider {
  constructor(protected app: ApplicationService) {
    logger.info('A Provider constructor')
    logger.info('A Provider constructor finished')
  }

  register() {
    logger.info('A Provider register')
    logger.info('A Provider register finished')
  }

  async boot() {
    logger.info('A Provider boot')
    const b = await this.app.container.make('b')
    logger.info('DI: calling b in a')
    b()
    logger.info('A Provider boot finished')
  }

  async start() {
    logger.info('A Provider start')
    await setTimeout(500)
    logger.info('A Provider start finished')
  }

  async ready() {
    logger.info('A Provider ready')
    await setTimeout(500)
    logger.info('A Provider ready finished')
  }

  async shutdown() {
    logger.info('A Provider shutdown')
    await setTimeout(500)
    logger.info('A Provider shutdown finished')
  }
}
