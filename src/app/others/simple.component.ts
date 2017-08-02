import { Component,Input } from '@angular/core';

@Component({
    selector: 'simple',
    template:`you entered: {{content}}`


})


export class SimpleComponent {

    @Input() content: string;

}