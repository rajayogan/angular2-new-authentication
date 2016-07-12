/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('Auth Service', () => {
  beforeEachProviders(() => [AuthService]);

  it('should ...',
      inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
