import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class CommonService{
    private _url: string = "assets/static-data/";

    constructor (private http: Http){}

    getDropDownList(){
        return this.http.get(this._url+"dropdown-list.json")
                   .map((response: Response) => response.json())
                   .catch(this.errorHandler);
    }

    getHeaderMenu(){
        return this.http.get(this._url+"menu.json")
                   .map((response: Response) => response.json())
                   .catch(this.errorHandler);
    }

    getSearchData(){
        return this.http.get(this._url+"search-data.json")
                   .map((response: Response) => response.json())
                   .catch(this.errorHandler);
    }

    errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server Error");
    }

}

