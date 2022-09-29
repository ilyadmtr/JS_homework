export class Goods {
  name: string = '';
  count: number = 0;
  mcalc:string = '';
  constructor(name:string, count: number, mcalc: string) {
    this.name = name;
    this.count =count;
    this.mcalc = mcalc;
  }
}
