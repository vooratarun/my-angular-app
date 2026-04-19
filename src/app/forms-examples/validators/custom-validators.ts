import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenDomainValidator(domain: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = `${control.value ?? ''}`.trim().toLowerCase();
    if (!value || !value.includes('@')) {
      return null;
    }

    return value.endsWith(`@${domain.toLowerCase()}`)
      ? { forbiddenDomain: { domain } }
      : null;
  };
}

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (!password || !confirmPassword) {
    return null;
  }

  return password === confirmPassword ? null : { passwordMismatch: true };
};

