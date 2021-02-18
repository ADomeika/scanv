import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { ScanService } from './services/scan.service';
import { ResponseObject } from './shared/models/responseObject';

describe('AppComponent', () => {
  let component: AppComponent;
  let service: ScanService;

  beforeEach(() => {
    service = new ScanService(null);
    component = new AppComponent(service);
  });

  it('should set scan and user properties with scan and user items returned from json file', () => {
    let scanItems: ResponseObject = {
      user: {
        displayName: 'Jane Doe',
        email: 'jane.doe@nccgroup.com',
        notifications: [
          {
            id: 232,
            message: 'Scan Complete (Monthly Vulnerability Scan)',
            read: false,
            date: '2020-01-01T00:24:29.000Z'
          }
        ]
      },
      scan: {
        dateStarted: '2020-01-01T00:00:00.000Z',
        datCompleted: '2020-01-01T00:24:29.000Z',
        name: 'Monthly Vulnerability Scan',
        status: 'completed',
        scanners: [
          'Typhon'
        ],
        severityCounts: {
          critical: 0,
          high: 2,
          medium: 2,
          low: 1,
          information: 2
        },
        assets: [
          {
            id: 9,
            name: 'T09277',
            description: 'Email server',
            created: '2018-09-03T13:19:33.000Z',
            scanCount: 20
          },
        ],
        vulnerabilities: [
          {
            id: 1717,
            severity: "high",
            name: "PHP Vulnerability: CVE-2017-12932",
            description: "ext/standard/var_unserializer.re in PHP 7.0.x through 7.0.22 and 7.1.x through 7.1.8 is prone to a heap use after free while unserializing untrusted data, related to improper use of the hash API for key deletion in a situation with an invalid array size. Exploitation of this issue can have an unspecified impact on the integrity of PHP.",
            solution: "Download and apply the upgrade from: Download and apply the upgrade from:",
            references: "https://bugs.php.net/bug.php?id=74103 ",
            cvssBaseScore: "7.5",
            affectedAssets: [
              33
            ]
          }
        ]
      }
    };

    spyOn(service, 'getData').and.returnValue(from([scanItems]));

    component.ngOnInit();

    expect(component.scan).toBe(scanItems.scan);
    expect(component.user).toBe(scanItems.user);
  });
});
