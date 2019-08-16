import { NgModule } from "@angular/core";
import { SideNavBarComponent } from './sidenavbar.component';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        MatSidenavModule,
        MatListModule,
    ],
    declarations: [
        SideNavBarComponent
    ],
    exports: [
        SideNavBarComponent
    ]
})
export class SideNavBarModule {

}