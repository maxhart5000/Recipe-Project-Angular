import { Directive, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective { 
    @HostBinding('style.fontStyle') fontStyle: string = 'normal'
    @HostListener('mouseenter') toggleItalic() {
        this.fontStyle = 'italic';
    }
    @HostListener('mouseleave') toggleNormal() {
        this.fontStyle = 'normal';
    }
}