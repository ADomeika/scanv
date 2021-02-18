import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AssetComponent } from './components/asset/asset.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [
  HeaderComponent,
    NotificationComponent,
    AssetComponent
  ],
  exports: [
    AssetComponent,
    HeaderComponent,
    CommonModule,
    NgbModule,
    
  ],
  providers: []
})
export class SharedModule { }
