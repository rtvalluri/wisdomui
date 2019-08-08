import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatCardModule } from '@angular/material';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
    imports: [
        CommonModule,
        MatTabsModule,
        MatCardModule
    ],
    declarations: [
        CarouselComponent
    ],
    exports: [
        CarouselComponent
    ]
})
export class SharedModule {

}