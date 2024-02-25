import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    collapsed = true;
    @Output() outputFeature = new EventEmitter<string>();

    constructor() {}

    onSelect(feature: string) {
        this.outputFeature.emit(feature);
    }
}