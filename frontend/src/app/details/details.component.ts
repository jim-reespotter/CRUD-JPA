import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
export class DetailsComponent { 

    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot.paramMap.get('id'));
    }
}
