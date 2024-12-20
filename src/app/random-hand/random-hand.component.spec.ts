import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomHandComponent } from './random-hand.component';

describe('RandomHandComponent', () => {
  let component: RandomHandComponent;
  let fixture: ComponentFixture<RandomHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomHandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
