import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { User } from '../../models/user';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a user with all its fields', () => {
    const user: User = {
      displayName: 'Display Name',
      email: 'email@gmail.com',
      notifications: [{
        id: 1,
        date: '2018-09-03T13:19:33.000Z',
        message: 'Message',
        read: false
      }]
    };

    component.user = user;
    
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.display-name'));

    expect(de.nativeElement.innerText).toContain(user.displayName);

    de = fixture.debugElement.query(By.css('.email'));

    expect(de.nativeElement.innerText).toContain(user.email);
  });
});
