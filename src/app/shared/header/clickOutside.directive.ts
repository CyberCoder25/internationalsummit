import { Directive, ElementRef, EventEmitter, HostListener, Output, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
      selector: '[clickOutside]'
})
export class ClickOutsideDirective implements OnDestroy {
      @Output() closeMenuOutside = new EventEmitter<void>();
      @Output() openMenuOutside = new EventEmitter<void>();

      documentClickSubscription: Subscription | undefined;

      constructor(
            private element: ElementRef,
            @Inject(DOCUMENT) private document: Document
      ) { }

      @HostListener('document:click', ['$event'])
      onClick(event: MouseEvent): void {
            if (!this.isInside(event.target as HTMLElement)) {
                  if (this.element.nativeElement.classList.contains('show')) {
                        this.closeMenuOutside.emit();
                  } else {
                        this.openMenuOutside.emit();
                  }
            }
      }

      ngOnDestroy(): void {
            this.documentClickSubscription?.unsubscribe();
      }

      isInside(elementToCheck: HTMLElement): boolean {
            return (
                  elementToCheck === this.element.nativeElement ||
                  this.element.nativeElement.contains(elementToCheck)
            );
      }
}
