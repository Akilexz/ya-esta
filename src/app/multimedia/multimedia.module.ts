import { DeleteComponent } from '../publicaciones/delete/delete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MultimediaEditComponent } from './multimediaEdit/multimediaEdit.component';
import { MultimediaListComponent } from './multimediaList/multimediaList.component';
import { MultimediaDeleteComponent } from './multimediaDelete/multimediaDelete.component';
import { MultimediaCreateComponent } from './multimediaCreate/multimediaCreate.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';





@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ToastModule,
        InputMaskModule,
        CalendarModule,
        PaginatorModule,
        FieldsetModule
    ],
    declarations: [
        MultimediaEditComponent,
        MultimediaListComponent,
        MultimediaDeleteComponent,
        MultimediaCreateComponent
    ],
    exports: [
        MultimediaEditComponent,
        MultimediaListComponent,
        MultimediaDeleteComponent,
        MultimediaCreateComponent
    ]
})
export class MultimediaModule { }
