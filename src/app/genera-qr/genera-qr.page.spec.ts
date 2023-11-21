import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneraQRPage } from './genera-qr.page';

describe('GeneraQRPage', () => {
  let component: GeneraQRPage;
  let fixture: ComponentFixture<GeneraQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeneraQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
