import { Component, OnInit } from '@angular/core';
import {QuestionDataService} from "../questionData/question-data.service"
import {Question} from "./questionModel"

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question: Question;
  questionService: QuestionDataService;

  constructor( questionService: QuestionDataService) {

    this.questionService = questionService;

  }

  ngOnInit() {

    //initialize the question with a default type for now.
    this.question = this.questionService.getQuestionTypeData("single");

  }

}
