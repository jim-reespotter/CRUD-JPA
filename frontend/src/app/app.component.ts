import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person, RestService } from './rest.service';

import { NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  persons: Person[];

  constructor(private rest: RestService) {
    
    this.rest.getPersons().subscribe(
      persons => {this.persons = persons}
    )
  }
}
