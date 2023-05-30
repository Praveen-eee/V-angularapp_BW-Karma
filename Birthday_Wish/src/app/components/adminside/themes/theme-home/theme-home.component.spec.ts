import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeHomeComponent } from './theme-home.component';

describe('HomeComponent', () => {
  let component: ThemeHomeComponent;
  let fixture: ComponentFixture<ThemeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeHomeComponent]
    });
    fixture = TestBed.createComponent(ThemeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
