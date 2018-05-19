import {Component} from '@angular/core';
@Component({
  selector: 'question-text',
  templateUrl: './questionText.component.html'
})

export class QuestionText {
  qText = "Property: Text";
  showEditor: boolean;

  ngOnInit(){
    this.showEditor = false;
  }

  onEditClick(){
    this.showEditor = true;
    console.log(this.qText);
  }

  onDoneClick(){
    this.showEditor = false;
  }

}
