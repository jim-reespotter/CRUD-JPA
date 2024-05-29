import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Person } from '../../rest.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>{{ person.firstname }} {{ person.lastname }}</p><button mat-button (click)="close()">close</button>`,
    styleUrl: './dialog.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent { 

    person: Person;

    constructor(
        @Inject(MAT_DIALOG_DATA) data: Person,
        public dialogRef: MatDialogRef<DialogComponent>
    ) {
        this.person = data;
    }

    close() {
        this.dialogRef.close();
    }
}
