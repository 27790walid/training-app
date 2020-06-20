import { Directive, HostListener, ElementRef, Input } from '@angular/core'

@Directive({
    selector: '[appInputFormat]'
})

export class InputFormatDirective {
    @Input('appInputFormat') format; 
    textValue:string;
    constructor(private el: ElementRef) {
        
    }
 
    onFocus() {        
        console.log('onfocus');
    }
    @HostListener('blur') onBlur() {   
        this.textValue = this.el.nativeElement.value;
        if (this.format =='u')
            this.el.nativeElement.value = this.textValue.toUpperCase();
        else
            this.el.nativeElement.value = this.textValue.toLowerCase();
        alert(this.textValue)
        console.log('onBlur');
    }

}