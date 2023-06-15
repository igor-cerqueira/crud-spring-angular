import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorsDialogComponent } from 'src/app/shared/components/errors-dialog/errors-dialog.component';

import { Courses } from '../model/courses';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Courses[]>;
  displayedColumns = ['name', 'category']


  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
    ) {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorsDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }



}
