import { Component, OnInit, Input } from '@angular/core';
import {Question} from "../questionModel"
import {QuestionDifficulties} from "./question-difficulties/questionDifficultiesEnum"
import {QuestionChoice} from "./question-choices/questionChoiceModel"
import {QuestionReference} from "./question-references/questionReferenceModel"
import {QuestionTopic} from "./question-topics/questionTopicModel"
import {QuestionTypes} from "./question-types/questionTypesEnum"




@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  type: QuestionTypes = this.question.type;
  topics: QuestionTopic[] = this.question.topics;
  references: QuestionReference[] = this.question.references;
  choices: QuestionChoice[] = this.question.choices;
  difficulty: QuestionDifficulties = this.question.difficulty;

  constructor() { }

  ngOnInit() {
  }
}
