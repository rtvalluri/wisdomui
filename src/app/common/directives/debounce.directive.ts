import { Directive, OnInit, HostListener, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
    selector: '[debouncer]'
})
export class DebounceDirective implements OnInit, OnDestroy {
    private hostClickHanler = new Subject();
    private hostClickSubscription: Subscription
    @Input() debounceTime: number;
    @Output() debouncedEventHandler = new EventEmitter();


    ngOnInit() {
        this.hostClickSubscription = this.hostClickHanler
            .pipe(debounceTime(this.debounceTime))
            .subscribe(hostClickEvent => {
                this.debouncedEventHandler.emit(hostClickEvent);
            })
    }

    @HostListener('click', ['$event'])
    clickTriggeredOnHost(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.hostClickHanler.next();
    }

    ngOnDestroy() {
        this.hostClickSubscription.unsubscribe();
    }
}   