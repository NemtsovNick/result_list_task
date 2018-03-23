import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tariff-price-details',
  templateUrl: './tariff-price-details.component.html',
  styleUrls: ['./tariff-price-details.component.scss']
})
export class TariffPriceDetailsComponent {
  @Input() public price: number;
  @Input() public currency: string;

  constructor() {}

  public viewTariff(): void {
    alert('Not yet implemented');
  }
}
