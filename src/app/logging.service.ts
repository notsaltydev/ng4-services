/**
 * Created by Adam on 21.05.2017.
 */

export class LoggingService {
  loggingChangeStatus(message: string) {
    console.log('A server status changed, new status: ' + message);
  }
}
