import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpComponent } from './testp.component';

describe('TestpComponent', () => {
  let component: TestpComponent;
  let fixture: ComponentFixture<TestpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestpComponent]
    });
    fixture = TestBed.createComponent(TestpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
