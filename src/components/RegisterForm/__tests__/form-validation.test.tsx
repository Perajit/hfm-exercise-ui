import { countrySelectionOptions } from '@/constants/countries';
import { experienceSelectionOptions } from '@/constants/experiences';
import { renderWithWrapper } from '@test/test-utils';
import '@testing-library/jest-dom/vitest';
import { screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import RegisterForm from '../RegisterForm';
import { fillTextInput, getCountryCodeSelect, getEmailInput, getExperienceSelect, getFirstNameInput, getLastNameInput, getPhoneNumberInput, getSubmitButton, selectDropdown } from './test-helper';

describe('RegisterForm > Form Validation', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('should show required error if invalid', async () => {
    renderWithWrapper(<RegisterForm title="test-title" />);

    await user.click(getSubmitButton());

    expect(screen.getByText('First name is required.'));
    expect(screen.getByText('Last name is required.'));
    expect(screen.getByText('Country is required.'));
    expect(screen.getByText('Phone is required.'));
    expect(screen.getByText('Email is required.'));
    expect(screen.getByText('Experience is required.'));
    expect(screen.getByText('Privacy Policy and Terms and Conditions must be accepted.'));
  });

  it('should show error for pattern matching if invalid', async () => {
    renderWithWrapper(<RegisterForm title="test-title" />);

    await fillTextInput(getFirstNameInput(), 'a@', user);
    await fillTextInput(getLastNameInput(), 'b@', user);
    await fillTextInput(getPhoneNumberInput(), '1a', user);
    await fillTextInput(getEmailInput(), 'a@b', user);
    await user.click(getSubmitButton());

    expect(screen.getByText('First name must not contain special character.'));
    expect(screen.getByText('Last name must not contain special character.'));
    expect(screen.getByText('Phone must be numeric.'));
    expect(screen.getByText('Email format is invalid.'));
  });

  it('should clear error after updating', async () => {
    renderWithWrapper(<RegisterForm title="test-title" />);

    // Trigger validation error
    await user.click(getSubmitButton());

    // Update form
    await fillTextInput(getFirstNameInput(), 'a', user);
    await fillTextInput(getLastNameInput(), 'b', user);
    await selectDropdown(getCountryCodeSelect(), countrySelectionOptions[0].label, user);
    await fillTextInput(getPhoneNumberInput(), '123456789', user);
    await fillTextInput(getEmailInput(), 'mail@mabc.xyz', user);
    await selectDropdown(getExperienceSelect(), experienceSelectionOptions[0].label, user);

    expect(screen.queryByText('First name is required.')).toBeFalsy();
    expect(screen.queryByText('Last name is required.')).toBeFalsy();
    expect(screen.queryByText('Country is required.')).toBeFalsy();
    expect(screen.queryByText('Phone is required.')).toBeFalsy();
    expect(screen.queryByText('Email is required.')).toBeFalsy();
    expect(screen.queryByText('Experience is required.')).toBeFalsy();
  });
});
