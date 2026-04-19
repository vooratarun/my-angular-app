import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DiExamplesComponent } from './di-examples.component';

function getValueFromTestId(fixture: ComponentFixture<DiExamplesComponent>, testId: string): string {
  const element = fixture.nativeElement.querySelector(`[data-testid="${testId}"]`) as HTMLElement | null;
  return element?.textContent?.trim() ?? '';
}

describe('DiExamplesComponent', () => {
  let fixture: ComponentFixture<DiExamplesComponent>;
  let component: DiExamplesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shares SelectionService singleton across parent and children', () => {
    component.sharedMessageInput = 'Shared from test';
    component.setSharedMessage();
    fixture.detectChanges();

    const parentId = getValueFromTestId(fixture, 'parent-singleton-id');
    const defaultId = getValueFromTestId(fixture, 'default-singleton-id');
    const overrideId = getValueFromTestId(fixture, 'override-singleton-id');

    expect(parentId).toEqual(defaultId);
    expect(parentId).toEqual(overrideId);

    expect(getValueFromTestId(fixture, 'default-shared-message')).toContain('Shared from test');
    expect(getValueFromTestId(fixture, 'override-shared-message')).toContain('Shared from test');
  });

  it('shows DI hierarchy for providers with scoped override', () => {
    const parentScopedId = getValueFromTestId(fixture, 'parent-scoped-id');
    const defaultScopedId = getValueFromTestId(fixture, 'default-scoped-id');
    const overrideScopedId = getValueFromTestId(fixture, 'override-scoped-id');

    expect(parentScopedId).toEqual(defaultScopedId);
    expect(overrideScopedId).not.toEqual(parentScopedId);

    const parentLabel = getValueFromTestId(fixture, 'parent-provider-label');
    const defaultLabel = getValueFromTestId(fixture, 'default-provider-label');
    const overrideLabel = getValueFromTestId(fixture, 'override-provider-label');

    expect(parentLabel).toContain('Parent provider');
    expect(defaultLabel).toContain('Parent provider');
    expect(overrideLabel).toContain('Override child provider');
  });

  it('shares parent scoped service with child A but not child B', () => {
    const buttons = fixture.debugElement
      .queryAll(By.css('button'))
      .map((button) => button.nativeElement as HTMLButtonElement);

    const defaultIncrementButton = buttons.find((button) => button.textContent?.includes('Increment scoped counter'));
    defaultIncrementButton?.click();
    fixture.detectChanges();

    expect(getValueFromTestId(fixture, 'parent-scoped-count')).toContain('1');
    expect(getValueFromTestId(fixture, 'default-scoped-count')).toContain('1');
    expect(getValueFromTestId(fixture, 'override-scoped-count')).toContain('0');
  });
});

