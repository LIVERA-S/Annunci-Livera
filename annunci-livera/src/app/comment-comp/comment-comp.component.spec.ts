import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentCompComponent } from './comment-comp.component';

describe('CommentCompComponent', () => {
  let component: CommentCompComponent;
  let fixture: ComponentFixture<CommentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
