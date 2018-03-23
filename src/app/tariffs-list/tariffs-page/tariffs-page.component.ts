import { Component } from '@angular/core';
import { ApiService } from '../../_services/api-service.service';
import { Tariff } from '../../_interfaces/tariff';
import { Tariffs } from '../../_interfaces/tariffs';

@Component({
  selector: 'app-tariffs-page',
  templateUrl: './tariffs-page.component.html',
  styleUrls: ['./tariffs-page.component.scss']
})
export class TariffsPageComponent {
  public tariffs: Tariff[];
  public sortingData: Array<any>;

  constructor(
    private readonly api: ApiService
  ) {
    this._fetchTariffs();
    this.sortingData = [
      { sortingKey: 'download_speed', sortingFieldName: 'Download speed' },
      { sortingKey: 'upload_speed', sortingFieldName: 'Upload speed' },
      { sortingKey: 'title', sortingFieldName: 'Title' },
      { sortingKey: 'price', sortingFieldName: 'Price' },
    ];
  }

  /**
   * Fetch tariffs list
   *
   * @private
   */
  private _fetchTariffs() {
    this.api.getTariffsList().subscribe(({ tariffs }: Tariffs) => this.tariffs = tariffs);
  }
}
