import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderArtigosLayoutComponent } from './header-artigos-layout.component';

describe('HeaderArtigosLayoutComponent', () => {
  let component: HeaderArtigosLayoutComponent;
  let fixture: ComponentFixture<HeaderArtigosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderArtigosLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderArtigosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
