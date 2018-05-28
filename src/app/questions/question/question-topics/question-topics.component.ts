import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-topics',
  templateUrl: './question-topics.component.html',
  styleUrls: ['./question-topics.component.css']
})
export class QuestionTopicsComponent implements OnInit {
  qTopics = "Property: Topic Collection"
  constructor() { }

  ngOnInit() {
  }
}
