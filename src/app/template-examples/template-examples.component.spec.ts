import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TemplateExamplesComponent } from './template-examples.component';

describe('TemplateExamplesComponent', () => {
  let fixture: ComponentFixture<TemplateExamplesComponent>;
  let component: TemplateExamplesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders interpolation text', () => {
    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Angular Templates + Directives Demo');
    expect(text).toContain('Welcome, Tarv.');
  });

  it('adds a product when clicking Add Product', () => {
    component.newProduct = 'Webcam';
    fixture.detectChanges();

    const addButton = fixture.debugElement
      .queryAll(By.css('button'))
      .find((button) => button.nativeElement.textContent.includes('Add Product'));

    addButton?.nativeElement.click();
    fixture.detectChanges();

    expect(component.products).toContain('Webcam');
  });
});

