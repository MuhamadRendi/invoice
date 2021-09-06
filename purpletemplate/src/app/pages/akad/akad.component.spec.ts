import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkadComponent } from './akad.component';

describe('AkadComponent', () => {
  let component: AkadComponent;
  let fixture: ComponentFixture<AkadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
