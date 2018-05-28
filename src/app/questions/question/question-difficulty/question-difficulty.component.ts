import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-difficulty',
  templateUrl: './question-difficulty.component.html',
  styleUrls: ['./question-difficulty.component.css']
})
export class QuestionDifficultyComponent implements OnInit {
  qDifficulty = "Property: Difficulty"
  constructor() { }
  ngOnInit() {
  }
}
