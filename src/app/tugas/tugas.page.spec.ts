import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TugasPage } from './tugas.page';

describe('TugasPage', () => {
  let component: TugasPage;
  let fixture: ComponentFixture<TugasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TugasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
