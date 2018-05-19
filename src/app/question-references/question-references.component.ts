import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-references',
  templateUrl: './question-references.component.html',
  styleUrls: ['./question-references.component.css']
})
export class QuestionReferencesComponent implements OnInit {
  qReferences = "Property: References Collection"
  constructor() { }

  ngOnInit() {
  }
}
