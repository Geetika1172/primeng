import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BindModule } from 'primeng/bind';

@Component({
    standalone: true,
    selector: 'passhthrough',
    imports: [CommonModule, BindModule],
    template: `
        <div
            class="hello world"
            [attr.aria-expanded]="true"
            (mousemove)="onMouseOver($event)"
            [pBind]="{ 'aria-label': 'deneme-123', 'aria-labelledby': 'hello-worlddd', style: { backgroundColor: 'red', borderRadius: '10px', fontSize: '3rem', height: '10rem', width: '10rem' }, onclick: myconsole, class: 'text-3xl' }"
        >
            hello world
        </div>
    `
})
export class Passthrough {
    myconsole() {
        console.log('clickev');
    }

    onMouseOver(event) {
        console.log('mouseover', event);
    }
}
