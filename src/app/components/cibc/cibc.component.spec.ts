import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CibcComponent } from './cibc.component';

describe('CibcComponent', () => {
  let component: CibcComponent;
  let fixture: ComponentFixture<CibcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CibcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CibcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
