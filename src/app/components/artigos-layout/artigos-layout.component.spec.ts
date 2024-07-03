import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosLayoutComponent } from './artigos-layout.component';

describe('ArtigosLayoutComponent', () => {
  let component: ArtigosLayoutComponent;
  let fixture: ComponentFixture<ArtigosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigosLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtigosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
