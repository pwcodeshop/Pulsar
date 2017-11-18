import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PersonsService } from '../shared/persons.service';
import { fadeIn } from '../_animations/fade.animation';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [fadeIn]
})

export class GalleryComponent implements OnChanges {
    persons:any[];

    @Input() filterBy?: string = 'all'

    visiblePersons: any[] = [];

  constructor(private personsService: PersonsService) {
    this.visiblePersons = this.personsService.getPersons();
  }

  ngOnChanges() {
    this.visiblePersons = this.personsService.getPersons();
  }

}
