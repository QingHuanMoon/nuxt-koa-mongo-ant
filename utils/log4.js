/**
 * 日志存储
 */
import log4js from 'log4js'

const levels = {
    'trace': log4js.levels.TRACE,
    'debug': log4js.levels.DEBUG,
    'info': log4js.levels.INFO,
    'warn': log4js.levels.WARN,
    'error': log4js.levels.ERROR,
    'fatal': log4js.levels.FATAL
}

log4js.configure({
    appenders: {
        console: { type: 'console' },
        info: { type: 'file', filename: 'logs/all-logs.log' },
        error: {
            type: 'dataFile',
            filename: 'logs/log',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true,
        }
    },
    categories: {
        default: { appenders: ['console'], level: 'debug' },
        error: {
            appenders: ['console'], level: 'error'
        }
    }
})


/**
 * debug信息的日志输出,debug级别
 * @param {string} content
 */
const debug = (content) => {
    let logger = log4js.getLogger()
    logger.level = levels.debug
    logger.debug(content)
}

/**
 * debug信息的日志输出,error级别
 * @param {string} content
 */
const error = (content) => {
    let logger = log4js.getLogger()
    logger.level = levels.error
    logger.error(content)
}

/**
 * debug信息的日志输出,info级别
 * @param {string} content
 */
const info = (content) => {
    let logger = log4js.getLogger()
    logger.level = levels.info
    logger.info(content)
}

export default {
  debug, error, info
}
