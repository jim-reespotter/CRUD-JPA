import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'details',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: `./details.component.html`,
    styleUrl: './details.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent { }
