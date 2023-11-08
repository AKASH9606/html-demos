import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoorComponent } from './coloor.component';

describe('ColoorComponent', () => {
  let component: ColoorComponent;
  let fixture: ComponentFixture<ColoorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoorComponent]
    });
    fixture = TestBed.createComponent(ColoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
