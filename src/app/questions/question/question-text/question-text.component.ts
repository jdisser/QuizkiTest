import {Component} from '@angular/core';
@Component({
  selector: 'question-text',
  templateUrl: './question-text.component.html'
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
