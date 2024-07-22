import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConteudoTextosLayoutComponent } from './conteudo-textos-layout.component';


describe('ConteudoTextosLayoutComponent', () => {
  let component: ConteudoTextosLayoutComponent;
  let fixture: ComponentFixture<ConteudoTextosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoTextosLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoTextosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
