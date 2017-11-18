import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { fadeIn } from '../_animations/fade.animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [fadeIn]
})
export class DashboardComponent implements OnInit {

title = 'Pulsar';
panelOpenState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

