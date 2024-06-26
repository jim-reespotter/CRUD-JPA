import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Person, RestService } from '../rest.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'


@Component({
    selector: 'app-details', // needs app- or will be folded !?!?
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    templateUrl: `./details.component.html`,
    styleUrl: './details.component.css',
    changeDetection: ChangeDetectionStrategy.Default
})
export class DetailsComponent implements OnInit { 

    person: Person;

    constructor(
        private route: ActivatedRoute, 
        private rest: RestService,
        private dialog: MatDialog
    ) {}
    
    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        if (id != null) 
            this.rest.getPerson(id).subscribe(
                person => {this.person = person;}
            );
    }

    update() {
        this.rest.updatePerson(this.person).subscribe(
            person => {this.person = person}
        );
    }

    openDialog() {
        const dialogRef = this.dialog.open(
            DialogComponent, {data: this.person}
        );
      
          dialogRef.afterClosed().subscribe(
            result => {
              this.ngOnInit();
            }
          );
      
    }
}
