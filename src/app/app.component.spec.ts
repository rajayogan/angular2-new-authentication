/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

describe('App: angular2-new-authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent]
    });
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('app works!');
    }));
});
