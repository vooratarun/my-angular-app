import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngpractice } from './ngpractice';

describe('Ngpractice', () => {
  let component: Ngpractice;
  let fixture: ComponentFixture<Ngpractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngpractice],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngpractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
