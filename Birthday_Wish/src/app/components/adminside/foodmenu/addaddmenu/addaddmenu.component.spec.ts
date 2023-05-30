import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaddmenuComponent } from './addaddmenu.component';

describe('AddaddmenuComponent', () => {
  let component: AddaddmenuComponent;
  let fixture: ComponentFixture<AddaddmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddaddmenuComponent]
    });
    fixture = TestBed.createComponent(AddaddmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
