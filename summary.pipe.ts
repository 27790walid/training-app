
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'summary' })

export class SummaryPipe implements PipeTransform {
    transform(value: string, args?: any,xx?:number) {
        debugger;
        console.log(value);
        console.log(args);
        if (!value)
            return null;
        else
            return value.toUpperCase();
    }

}