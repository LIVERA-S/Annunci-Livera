import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnunciCompComponent } from './annunci-comp.component';

describe('AnnunciCompComponent', () => {
  let component: AnnunciCompComponent;
  let fixture: ComponentFixture<AnnunciCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnunciCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnunciCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
