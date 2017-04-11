import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
/**
 * Created by gjoosen on 11/04/2017.
 */

@Injectable()
export class MeetwaardenService {

  constructor(private http: Http){}

  private groupsUrl = 'http://52.28.226.118:3030/last24hour';
  private monthUrl = 'http://52.28.226.118:3030/lastmonth';
  private weekUrl = 'http://52.28.226.118:3030/lastweek';

  public getLast24Hours(): Observable<any>{
    return this.http.get(this.groupsUrl).map(res => res.json()).catch(this.handleError);
  }

  public getLastMonth(): Observable<any>{
    return this.http.get(this.monthUrl).map(res => res.json()).catch(this.handleError);
  }

  public getLastWeek(): Observable<any>{
    return this.http.get(this.weekUrl).map(res => res.json()).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
