/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AuthService } from './auth.service';

describe('Auth Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthService]
    });
  });

  it('should ...',
      inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
