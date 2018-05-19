import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-choices',
  templateUrl: './question-choices.component.html',
  styleUrls: ['./question-choices.component.css']
})
export class QuestionChoicesComponent implements OnInit {
  qChoices = "Property: Choices Collection"
  constructor() { }

  ngOnInit() {
  }
}
