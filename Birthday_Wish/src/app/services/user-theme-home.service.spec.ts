import { TestBed } from '@angular/core/testing';

import { UserThemeHomeService } from './user-theme-home.service';

describe('UserThemeHomeService', () => {
  let service: UserThemeHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserThemeHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
