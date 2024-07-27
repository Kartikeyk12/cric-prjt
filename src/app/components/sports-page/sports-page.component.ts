import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ExampleServiceService } from '../../service/example-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllStudents } from '../ngrx-store/student.selectors';
import { loadStudents } from '../ngrx-store/student.action';

@Component({
  selector: 'app-sports-page',
  standalone: true,
  imports: [FooterComponent, NgFor, NgIf, CommonModule],
  templateUrl: './sports-page.component.html',
  styleUrl: './sports-page.component.scss'
})
export class SportsPageComponent {

  studentData: any[] = []
  students$: Observable<any[]>;

  constructor(private exampleService: ExampleServiceService,
    private store: Store
  ) {
    this.students$ = this.store.pipe(select(selectAllStudents));

  }

  ngOnInit() {

    // * This is to get data from hard code data
    this.exampleService.getData().subscribe(data => {
      this.studentData = data.slice(0, 10)
    });

    // ! To Check if stores workinng
    this.store.dispatch(loadStudents());
    this.students$.subscribe(students => {
    //  console.log('Students loaded:', students);
    });

  }
}
