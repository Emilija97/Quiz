export interface IQuestion {
  id: number;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: string;
}

export class Question implements IQuestion {
  public id: number;
  public question: string;
  public answer1: string;
  public answer2: string;
  public answer3: string;
  public answer4: string;
  public correctAnswer: string;

  public constructor() {
    this.id = -1;
    this.question = "";
    this.answer1 = "";
    this.answer2 = "";
    this.answer3 = "";
    this.answer4 = "";
    this.correctAnswer = "";
  }
}
