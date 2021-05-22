import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComponentComponent } from './hijo-component.component';

describe('HijoComponentComponent', () => {
  let component: HijoComponentComponent;
  let fixture: ComponentFixture<HijoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
