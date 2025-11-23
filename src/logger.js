import log from 'loglevel';

// On définit le niveau par défaut. 
// En dev, on veut tout voir (TRACE/DEBUG). 
// En prod, on pourrait le monter à WARN ou ERROR.
log.setLevel(log.levels.DEBUG);

export default log;