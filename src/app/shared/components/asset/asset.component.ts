import { Component, Input } from '@angular/core';

import { Asset } from '../../models/asset';

@Component({
  selector: 'asset',
  templateUrl: './asset.component.html'
})
export class AssetComponent {
  @Input('asset') asset: Asset;
}
