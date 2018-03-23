import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Tariff } from '../../interfaces/tariff';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TariffItemComponent implements OnInit {
  @Input() public index: number;
  @Input() public tariff: Tariff;

  constructor() { }

  ngOnInit() {
    Object.assign(this, { ...this.tariff });
  }
}
