import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomepageComponent } from './user-homepage.component';

describe('HomepageComponent', () => {
  let component: UserHomepageComponent;
  let fixture: ComponentFixture<UserHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
