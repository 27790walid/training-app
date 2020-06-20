import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import { json } from "ngx-custom-validators/src/app/json/validator";



@Injectable()
export class TrainingService {

    private url: string = "https://localhost:44318/weatherforecast"
    constructor(private http: HttpClient) {

    }
    getWeatherForecast(): Observable<any> {
        return this.http.get(this.url);
        //    .catch((error: Response) => {
        //    return Observable.throw(error);
        //});
    }
    getHeros() {
        return ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    }

}

export class UsernameValidators {
    static cannotContainspace(control: AbstractControl): ValidationErrors | null {
        if ((<string>control.value).indexOf(' ') > 0) {
            return { 'cannotContainSpace': true }
        }
        else
            return null
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                debugger;
                if (control.value === 'waleed')
                    resolve({ shouldBeUnique: true })
                else
                    resolve(null);
            }, 2000);
        });


    }

}