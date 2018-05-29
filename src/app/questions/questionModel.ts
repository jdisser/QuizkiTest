import {QuestionTopic} from "./question/question-topics/questionTopicModel"
import {QuestionReference} from "./question/question-references/questionReferenceModel"
import {QuestionChoice} from "./question/question-choices/questionChoiceModel"

export class QuestionModel {
  constructor(
    public id: number,
    public typeId: number,
    public typeText: string,
    public user: string,
    public text: string,
    public description: string,
    public difficulty: Object,
    public topics: QuestionTopic[],
    public references: QuestionReference[],
    public choices: QuestionChoice[]
  ){}
}
