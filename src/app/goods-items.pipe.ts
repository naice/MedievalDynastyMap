import { Pipe, PipeTransform } from '@angular/core';
import { Good, Item, ItemData, } from './static-data';

@Pipe({
  name: 'goodsToItems'
})
export class GoodsToItemsPipe implements PipeTransform {

  constructor(
    private _itemData: ItemData,
  ) {
  }

  transform(value: Good[]): Item[] {
    return value.map(good => {
      const item: Item = { ...this._itemData.getItemByGood(good) };
      item.price = good.price;
      return item;
    });
  }

}
