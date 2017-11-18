import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../shared/persons.service';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from '../_animations/fade.animation';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [fadeIn]
})

export class DetailComponent implements OnInit {

    person: any;

  constructor(private personsService: PersonsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.person = this.personsService.getPerson(
        +this.route.snapshot.params['id']
    )
  }

}

//plus sign converts id to a number, snapshot provides the initial value of the route parameters