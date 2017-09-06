import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbtronComponent } from './jumbtron.component';

describe('JumbtronComponent', () => {
  let component: JumbtronComponent;
  let fixture: ComponentFixture<JumbtronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbtronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbtronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
