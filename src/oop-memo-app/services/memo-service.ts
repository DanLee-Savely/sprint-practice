import { MemoRepository } from "../repositories/memo-repository.js";

export class MemoService {
  private memoRepository: MemoRepository;

  constructor() {
    this.memoRepository = new MemoRepository();
  }
}
