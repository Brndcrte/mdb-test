import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringReverseComponent } from './string-reverse.component';

describe('StringReverseComponent', () => {
  let component: StringReverseComponent;
  let fixture: ComponentFixture<StringReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringReverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
