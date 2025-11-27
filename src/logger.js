import log from 'loglevel';

/**
 * Application logger configuration.
 * Uses 'loglevel' to manage log levels (DEBUG, INFO, WARN, ERROR).
 * @module logger
 */


// Set default level to DEBUG for development
log.setLevel(log.levels.DEBUG);

export default log;