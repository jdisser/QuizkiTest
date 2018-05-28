import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-description',
  templateUrl: './question-description.component.html',
  styleUrls: ['./question-description.component.css']
})
export class QuestionDescriptionComponent implements OnInit {
  qDescription = "Property: Description"
  constructor() { }

  ngOnInit() {
  }
}
