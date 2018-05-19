import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionText } from './questionText/questionText.component';
import { QuestionDescriptionComponent } from './question-description/question-description.component';
import { QuestionComponent } from './question/question.component';
import { QuestionDifficultyComponent } from './question-difficulty/question-difficulty.component';
import { QuestionTopicsComponent } from './question-topics/question-topics.component';
import { QuestionReferencesComponent } from './question-references/question-references.component';
import { QuestionChoicesComponent } from './question-choices/question-choices.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestionText,
    QuestionDescriptionComponent,
    QuestionComponent,
    QuestionDifficultyComponent,
    QuestionTopicsComponent,
    QuestionReferencesComponent,
    QuestionChoicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
