import { Component, OnInit } from '@angular/core';
import { TrainingService, UsernameValidators } from './training.service';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { error } from '@angular/compiler/src/util';


@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

    constructor(private trainingService: TrainingService) {

    }

    weatherForeCastData: any = [];
    ngOnInit(): void {
        this.trainingService.getWeatherForecast().subscribe(res => {

            this.weatherForeCastData = res;
        },
            //error => {
            //    debugger;
            //    console.log(error);
            //}
        );

    }

    form = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3),
        UsernameValidators.cannotContainspace], UsernameValidators.shouldBeUnique),
        password: new FormControl()
    });

    form2 = new FormGroup({
        topics: new FormArray([])
    });
    get formArr() {
        return this.form2.get("topics") as FormArray;
    }



    addTopic(topic: HTMLInputElement) {
        this.formArr.push(new FormControl(topic.value));
        topic.value = '';
    }
    removeTopic(topic) {
        let index = this.formArr.controls.indexOf(topic);
        this.formArr.controls.splice(index, 1);
    }

    get username() {
        return this.form.get('username');
    }
    logx(control) {
        debugger;
        console.log(control)
    }
    login() {
        debugger;
        console.log(this.form.value);
        this.form.setErrors({ invalidLogin: true });
    }
}
