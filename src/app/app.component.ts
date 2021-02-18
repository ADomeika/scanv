import { Component, OnInit } from '@angular/core';
import { ScanService } from './services/scan.service';
import { Scan } from './shared/models/scan';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  scan: Scan;
  user: User;

  constructor(private scanService: ScanService) {}

  ngOnInit() {
    this.scanService.getData().subscribe((data) => {
      this.scan = data.scan;
      this.user = data.user;  
    });
  }
}
