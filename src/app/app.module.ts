import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VulnerabilityComponent } from './shared/components/vulnerability/vulnerability.component';
import { ScanService } from './services/scan.service';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LinksPipe } from './pipes/links.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VulnerabilityComponent,
    LinksPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ScanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
