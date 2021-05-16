export class StringStorage {
  private innerList: string[] = ['Hello Angular'];

  add(data: string) {
    this.innerList.push(data);
  }

  get list() {
    return [...this.innerList]
  }
}
