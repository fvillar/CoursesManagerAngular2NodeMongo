export default class Course {
  constructor(
    public Id: number,
    public title: string,
    public authorId: number,
    public length: string,
    public category: string,
    public username: string,
    public authorName?: string
  ) {  }
}