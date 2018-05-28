import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionText } from './questions/question/question-text/question-text.component';
import { QuestionDescriptionComponent } from './questions/question/question-description/question-description.component';
import { QuestionComponent } from './questions/question/question.component';
import { QuestionDifficultyComponent } from './questions/question/question-difficulty/question-difficulty.component';
import { QuestionTopicsComponent } from './questions/question/question-topics/question-topics.component';
import { QuestionReferencesComponent } from './questions/question/question-references/question-references.component';
import { QuestionChoicesComponent } from './questions/question/question-choices/question-choices.component';
import { QuestionsComponent } from '../app/questions/questions.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestionText,
    QuestionDescriptionComponent,
    QuestionComponent,
    QuestionDifficultyComponent,
    QuestionTopicsComponent,
    QuestionReferencesComponent,
    QuestionChoicesComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
