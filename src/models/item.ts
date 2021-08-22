import * as uuid from 'uuid';
export class Item {
  uId: string;
  color?: string;
  imageUrl?: string;

  constructor(options: { color?: string; imageUrl?: string }) {
    this.uId = uuid.v4();
    this.color = options.color;
    this.imageUrl = options.imageUrl;
  }
}
