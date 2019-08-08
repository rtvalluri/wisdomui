import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MatTabsModule, MatCardModule } from '@angular/material';

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