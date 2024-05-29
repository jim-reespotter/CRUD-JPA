import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Person, RestService } from '../rest.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, 
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Person, MatPaginator>;
  
  title = 'list';
  persons: Person[];

  filter: string;
  sortState: Sort;

  constructor(private rest: RestService, private router: Router) {}

  ngAfterViewInit(): void {

    this.getData();

    this.paginator.page.subscribe(
      event => {
        this.getData();
  
      }
    );
    
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
  }

  applySort(sortState: Sort) {
    this.sortState = sortState;
    this.getData();
  }

  showDetail(person: Person) {
    this.router.navigate(["detail", person.id]); //, person.id]);
  }
}
