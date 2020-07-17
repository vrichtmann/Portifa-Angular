import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioContentComponent } from './portifolio-content.component';

describe('PortifolioContentComponent', () => {
  let component: PortifolioContentComponent;
  let fixture: ComponentFixture<PortifolioContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortifolioContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortifolioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
