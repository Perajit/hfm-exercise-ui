import { screen, waitFor, within } from '@testing-library/react';
import { UserEvent } from '@testing-library/user-event';
import { expect } from 'vitest';

// DOM query
export const getFirstNameInput = () => screen.getByTestId('first-name-input') as HTMLInputElement;
export const getLastNameInput = () => screen.getByTestId('last-name-input') as HTMLInputElement;
export const getCountryCodeSelect = () => screen.getByTestId('country-code-select') as HTMLButtonElement;
export const getPhoneCodeInput = () => screen.getByTestId('phone-code-input') as HTMLInputElement;
export const getPhoneNumberInput = () => screen.getByTestId('phone-number-input') as HTMLInputElement;
export const getEmailInput = () => screen.getByTestId('email-input') as HTMLInputElement;
export const getExperienceSelect = () => screen.getByTestId('experience-select') as HTMLButtonElement;
export const getConditionsAcceptedChk = () => screen.getByTestId('erms-and-conditions-chk') as HTMLInputElement;
export const getSubmitButton = () => screen.getByTestId('submit-button') as HTMLButtonElement;
export const getSelectlist = () => screen.getByTestId('flowbite-dropdown');

// Action
export const fillTextInput = async (input: HTMLInputElement, text: string, user: UserEvent) => {
  await user.type(input, text);

  await waitFor(() => {
    expect(input.value).toEqual(text);
  });
};

export const openSelect = async (dropdown: HTMLButtonElement, user: UserEvent) => {
  await user.click(dropdown);

  await waitFor(() => {
    expect(getSelectlist()).toBeTruthy();
  });
};

export const selectDropdown = async (dropdown: HTMLButtonElement, itemLabel: string, user: UserEvent) => {
  await openSelect(dropdown, user);
  
  const dropdownItem = within(getSelectlist()).getByRole('button', { name: itemLabel });
  await user.click(dropdownItem);

  await waitFor(() => {
    expect(screen.queryByTestId('flowbite-select')).toBeFalsy();
  });

  await waitFor(() => {
    expect(dropdown.textContent).toEqual(itemLabel);
  });
};

// Verify
export const verifyDropdownListItems = async (dropdown: HTMLButtonElement, expectedDropdownItemLabels: string[], user: UserEvent) => {
  await openSelect(dropdown, user);

  const dropdownItems = within(getSelectlist()).getAllByRole('button');
  const actualDropdownItemLabels = dropdownItems.map(option => option.textContent);
  expect(actualDropdownItemLabels).toEqual(expectedDropdownItemLabels);
};
