
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../providers/serverconfig';

import { Expensive } from './domainobjects';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

    private actionUrl: string;

    public expensiveList: Expensive[];

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.expensiveList = [];
    }

    public getExpensiveDataList(): Promise<Expensive[]> {
        return this._http
            .get(this.actionUrl + "getexpensivedata").toPromise().then(this.extractData);            
    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    public handleGetGridColumnsError(error: Response) {
        console.log(error);
        let message = `Error status ${error.status} at ${error.url}`;
        return Observable.throw(message);
    }

}

