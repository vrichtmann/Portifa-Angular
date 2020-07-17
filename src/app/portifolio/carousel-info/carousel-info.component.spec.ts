import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInfoComponent } from './carousel-info.component';

describe('CarouselInfoComponent', () => {
  let component: CarouselInfoComponent;
  let fixture: ComponentFixture<CarouselInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
