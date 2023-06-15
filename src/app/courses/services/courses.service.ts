import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Courses } from '../model/courses';
import { delay, first, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Courses[]>(this.API)
    .pipe(
      first(),
      // delay(3000),
      tap(courses => console.log(courses))
    );
  }
}
