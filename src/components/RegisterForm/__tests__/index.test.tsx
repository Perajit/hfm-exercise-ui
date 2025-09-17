import { countries, countrySelectionOptions } from '@/constants/countries';
import { experienceSelectionOptions } from '@/constants/experiences';
import { renderWithWrapper } from '@test/test-utils';
import '@testing-library/jest-dom/vitest';
import { screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import RegisterForm from '../RegisterForm';
import { getConditionsAcceptedChk, getCountryCodeSelect, getEmailInput, getExperienceSelect, getFirstNameInput, getLastNameInput, getPhoneCodeInput, getPhoneNumberInput, getSubmitButton, selectDropdown, verifyDropdownListItems } from './test-helper';

describe('RegisterForm', () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('should render initial state correctly', () => {
    renderWithWrapper(<RegisterForm title="test-title" />);

    // Title
    expect(screen.getByRole('heading', { name: 'test-title' })).toBeTruthy();

    // Form: first name
    const firstNameInput = getFirstNameInput();
    expect(firstNameInput.placeholder).toEqual('First Name');
    expect(firstNameInput.disabled).toBe(false);

    // Form: last name
    const lastNameInput = getLastNameInput();
    expect(lastNameInput.placeholder).toEqual('Last Name');
    expect(lastNameInput.disabled).toBe(false);

    // Form: country
    const countryCodeDropdown = getCountryCodeSelect();
    expect(countryCodeDropdown.textContent).toEqual('Country');
    expect(countryCodeDropdown.disabled).toBe(false);

    // Form: phone code
    const phoneCodeInput = getPhoneCodeInput();
    expect(phoneCodeInput.placeholder).toEqual('Code');
    expect(phoneCodeInput.disabled).toBe(true);

    // Form: phone number
    const phoneNumberInput = getPhoneNumberInput();
    expect(phoneNumberInput.placeholder).toEqual('Phone');
    expect(phoneNumberInput.disabled).toBe(false);

    // Form: phone number
    const emailInput = getEmailInput();
    expect(emailInput.placeholder).toEqual('Email');
    expect(emailInput.disabled).toBe(false);

    // Form: experience
    const experienceDropdown = getExperienceSelect();
    expect(experienceDropdown.textContent).toEqual('Experience');
    expect(experienceDropdown.disabled).toBe(false);

    // Form: conditions accepted
    const conditionsAcceptedChk = getConditionsAcceptedChk();
    expect(conditionsAcceptedChk.checked).toBe(false);
    expect(conditionsAcceptedChk.disabled).toBe(false);

    // Form: subnit button
    const submitButton = getSubmitButton();
    expect(submitButton.textContent).toEqual('JOIN NOW');
    expect(submitButton.disabled).toBe(false);
  });

  it('should render country dropdown items correctly', async () => {
    renderWithWrapper(<RegisterForm title="test-title" />);

    const expectedDropdownItemLabels = countrySelectionOptions.map(option => option.label);
    await verifyDropdownListItems(getCountryCodeSelect(), expectedDropdownItemLabels, user);
  });

  it('should render experience dropdown items correctly', async () => {
    renderWithWrapper(<RegisterForm title="test-title" />);

    const expectedDropdownItemLabels = experienceSelectionOptions.map(option => option.label);
    await verifyDropdownListItems(getExperienceSelect(), expectedDropdownItemLabels, user);
  });

  describe('when selecting country', () => {
    it('should auto fill phone code', async () => {
      renderWithWrapper(<RegisterForm title="test-title" />);

      const itemToSelect = countrySelectionOptions[1];

      await selectDropdown(getCountryCodeSelect(), itemToSelect.label, user);

      const expectedPhoneCode = countries[itemToSelect.value].phoneCode;
      expect(getPhoneCodeInput().value).toEqual(`+${expectedPhoneCode}`);
    });
  });
});
