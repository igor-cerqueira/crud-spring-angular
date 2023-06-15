import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsDialogComponent } from './components/errors-dialog/errors-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErrorsDialogComponent,
    CategoryPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorsDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
