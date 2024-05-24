import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person, RestService } from './rest.service';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  title = 'frontend';
  persons: Person[];

  constructor(private rest: RestService) {
  }

  ngAfterViewInit(): void {
    let size = 10

    this.paginator.page.subscribe(
      event => {
        this.rest.getPersons(event.pageIndex, event.pageSize).subscribe(
          persons => {
            this.persons = persons;
          }
        );
      }
    );

    this.rest.getPersons(0, size).subscribe(
      persons => {
        this.persons = persons;
        this.paginator.pageSize = size;
        console.log(this.paginator.pageSize);
      }
    );
    this.rest.getPersonCount().subscribe(
      count => {
        this.paginator.length = count;
      }
    );
  }




}
