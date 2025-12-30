import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaDetail } from './bodega-detail';

describe('BodegaDetail', () => {
  let component: BodegaDetail;
  let fixture: ComponentFixture<BodegaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodegaDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodegaDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
