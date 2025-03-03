import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparsaMapComponent } from './comparsa-map.component';

describe('ComparsaMapComponent', () => {
  let component: ComparsaMapComponent;
  let fixture: ComponentFixture<ComparsaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparsaMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparsaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
