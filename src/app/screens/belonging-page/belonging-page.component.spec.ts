import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelongingPageComponent } from './belonging-page.component';

describe('BelongingPageComponent', () => {
  let component: BelongingPageComponent;
  let fixture: ComponentFixture<BelongingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BelongingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BelongingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
