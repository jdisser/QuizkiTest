export class QuestionChoice {
  constructor(
    public id: number,
    public text: string,
    public isCorrect: boolean,
    public sequence: number
  ){}
}
