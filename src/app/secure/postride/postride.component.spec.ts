import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrideComponent } from './postride.component';

describe('PostrideComponent', () => {
  let component: PostrideComponent;
  let fixture: ComponentFixture<PostrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
