import { FormControl, FormGroup } from '@angular/forms';
import { forbiddenDomainValidator, passwordMatchValidator } from './custom-validators';

describe('custom validators', () => {
  it('rejects forbidden email domain', () => {
    const control = new FormControl('name@blocked.com');
    const validator = forbiddenDomainValidator('blocked.com');

    expect(validator(control)).toEqual({ forbiddenDomain: { domain: 'blocked.com' } });
  });

  it('returns passwordMismatch when passwords differ', () => {
    const form = new FormGroup(
      {
        password: new FormControl('abc123'),
        confirmPassword: new FormControl('abc124'),
      },
      { validators: [passwordMatchValidator] },
    );

    expect(form.errors).toEqual({ passwordMismatch: true });
  });
});

