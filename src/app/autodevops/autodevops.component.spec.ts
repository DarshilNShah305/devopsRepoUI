import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodevopsComponent } from './autodevops.component';

describe('AutodevopsComponent', () => {
  let component: AutodevopsComponent;
  let fixture: ComponentFixture<AutodevopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutodevopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutodevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
