import { Component, Input } from '@angular/core';
import { Tariff } from '../../../interfaces/tariff';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent {
  @Input() public sortingKey: string;
  @Input() public sortingFieldName: string;
  @Input() public tariffs: Tariff[];

  constructor() { }

  /**
   * Ordering
   *
   * @param {string} key Field key
   * @param {string} order sorting order (asc|desc)
   */
  public sortTariffs(key: string, order: string): void {
    this.tariffs.sort((prev, next) => {
      if (prev[key] < next[key] && order === 'desc') {
        return 1;
      }

      if (prev[key] > next[key] && order === 'asc') {
        return 1;
      }

      return 0;
    });
  }
}
