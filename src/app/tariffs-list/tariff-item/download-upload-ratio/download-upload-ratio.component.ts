import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-upload-ratio',
  templateUrl: './download-upload-ratio.component.html',
  styleUrls: ['./download-upload-ratio.component.scss']
})
export class DownloadUploadRatioComponent {
  @Input() public downloadRatio: number;
  @Input() public uploadRatio: number;
  @Input() public speed: string;

  constructor() { }
}
