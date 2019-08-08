import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatCardModule } from '@angular/material';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DebounceDirective } from './directives/debounce.directive';

@NgModule({
    imports: [
        CommonModule,
        MatTabsModule,
        MatCardModule
    ],
    declarations: [
        CarouselComponent,
        DebounceDirective
    ],
    providers: [
    ],
    exports: [
        CarouselComponent,
        DebounceDirective
    ],
})
export class SharedModule {

}