import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person, RestService } from './rest.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Person, MatPaginator>;
  
  title = 'frontend';
  persons: Person[];

  filter: string;
  sortState: Sort;

  constructor(private rest: RestService) {}

  ngAfterViewInit(): void {
//    let size = 10

    this.getData();

    this.paginator.page.subscribe(
      event => {
        this.getData();
        /*
        this.rest.getPersons(event.pageIndex, event.pageSize, this.filter, this.sort).subscribe(
          persons => {
            this.persons = persons;
            this.dataSource = new MatTableDataSource(this.persons);
            this.dataSource.sort = this.sort;
          }
        );
        */
      }
    );
    
//    this.paginator.pageSize = size;
    /*
    this.rest.getPersons(0, size, this.filter, this.sort).subscribe(
      persons => {
        this.persons = persons;
        this.dataSource = new MatTableDataSource(this.persons);
        this.paginator.pageSize = size;
        this.dataSource.sort = this.sort;
      }
    );
    */

    this.getSize();
  }
  
  getSize() {
    this.rest.getPersonCount(this.filter).subscribe(
      count => {
        this.paginator.length = count;
      }
    );
  }

  getData() {
    this.rest.getPersons(this.paginator.pageIndex, this.paginator.pageSize, this.filter, this.sort).subscribe(
      persons => {
        this.persons = persons;
        this.dataSource = new MatTableDataSource(this.persons);
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filter = filterValue.toLowerCase();
    this.getSize();
    this.getData();
    /*
    this.rest.getPersons(0, this.paginator.pageSize, this.filter, this.sort).subscribe(
      persons => {
        this.persons = persons;
        this.dataSource = new MatTableDataSource(this.persons);
      }
    );
    */
    /*
    this.rest.getPersonCount(this.filter).subscribe(
      count => {
        this.paginator.length = count;
      }
    );
    */
  }

  applySort(sortState: Sort) {
    this.sortState = sortState;
    this.getData();
  }
}
