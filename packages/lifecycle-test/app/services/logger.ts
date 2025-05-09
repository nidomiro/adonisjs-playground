import loggerConfig from '#config/logger'
import { Logger } from '@adonisjs/core/logger'

export const logger = new Logger(loggerConfig.loggers[loggerConfig.default])
