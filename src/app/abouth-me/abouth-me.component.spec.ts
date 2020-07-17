import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthMeComponent } from './abouth-me.component';

describe('AbouthMeComponent', () => {
  let component: AbouthMeComponent;
  let fixture: ComponentFixture<AbouthMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouthMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouthMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
