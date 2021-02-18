import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AssetComponent } from './asset.component';
import { Asset } from '../../models/asset';

describe('AssetComponent', () => {
  let component: AssetComponent;
  let fixture: ComponentFixture<AssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetComponent);
    component = fixture.componentInstance;
  });

  it('should render an asset with all its fields', () => {
    const asset: Asset = {
      id: 1,
      name: 'test asset',
      created: '2018-09-03T13:19:33.000Z',
      description: 'asset description',
      scanCount: 5
    };

    component.asset = asset;
    
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.card-title'));

    expect(de.nativeElement.innerText).toContain(asset.name);

    de = fixture.debugElement.query(By.css('.card-text'));

    expect(de.nativeElement.innerText).toContain(asset.description);
  });
});
