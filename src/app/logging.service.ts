import {Injectable} from '@angular/core';
/**
 * Created by Adam on 21.05.2017.
 */

@Injectable()
export class LoggingService {
  loggingChangeStatus(message: string) {
    console.log('A server status changed, new status: ' + message);
  }
}
