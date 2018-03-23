import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffItemComponent } from './tariff-item/tariff-item.component';
import { TariffsPageComponent } from './tariffs-page/tariffs-page.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DownloadUploadRatioComponent } from './tariff-item/download-upload-ratio/download-upload-ratio.component';
import { TariffPriceDetailsComponent } from './tariff-item/tariff-price-details/tariff-price-details.component';
import { SortButtonComponent } from './tariffs-page/sort-button/sort-button.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    TariffItemComponent,
    TariffsPageComponent,
    DownloadUploadRatioComponent,
    TariffPriceDetailsComponent,
    SortButtonComponent,
  ],
  exports: [
    TariffItemComponent,
    TariffsPageComponent
  ]
})
export class TariffsListModule { }
