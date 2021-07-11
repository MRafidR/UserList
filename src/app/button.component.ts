import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    template: '<button>This is {{name}}</button>'
})
export class ButtonComponent{
    @Input()
    name:string="";
}