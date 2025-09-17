import { countrySelectionOptions } from '@/constants/countries';
import { experienceSelectionOptions } from '@/constants/experiences';
import { handlers, registerAccountUrlMatcher } from '@/mocks/handlers';
import { renderWithWrapper } from '@test/test-utils';
import '@testing-library/jest-dom/vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import RegisterForm from '../RegisterForm';
import { fillTextInput, getConditionsAcceptedChk, getCountryCodeSelect, getEmailInput, getExperienceSelect, getFirstNameInput, getLastNameInput, getPhoneNumberInput, getSubmitButton, selectDropdown } from './test-helper';

describe('RegisterForm > Form Sumission', () => {
  const server = setupServer(...handlers);
  let user: UserEvent;

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('should show success alert if success', async () => {
    renderWithWrapper(<RegisterForm title="test-title" />);

    await fillTextInput(getFirstNameInput(), 'a', user);
    await fillTextInput(getLastNameInput(), 'b', user);
    await selectDropdown(getCountryCodeSelect(), countrySelectionOptions[0].label, user);
    await fillTextInput(getPhoneNumberInput(), '123456789', user);
    await fillTextInput(getEmailInput(), 'mail@mabc.xyz', user);
    await selectDropdown(getExperienceSelect(), experienceSelectionOptions[0].label, user);
    await user.click(getConditionsAcceptedChk());
    await user.click(getSubmitButton());

    await waitFor(() => {
      expect(screen.getByTestId('success-alert')).toBeTruthy();
    });

    expect(screen.queryByTestId('error-alert')).toBeFalsy();
  });

  it('should show success alert if error', async () => {
    server.use(
      http.post(registerAccountUrlMatcher, async () => {
        return HttpResponse.json(
          { message: 'Invalid input' },
          { status: 400 }
        );
      })
    );

    renderWithWrapper(<RegisterForm title="test-title" />);

    await fillTextInput(getFirstNameInput(), 'a', user);
    await fillTextInput(getLastNameInput(), 'b', user);
    await selectDropdown(getCountryCodeSelect(), countrySelectionOptions[0].label, user);
    await fillTextInput(getPhoneNumberInput(), '123456789', user);
    await fillTextInput(getEmailInput(), 'mail@mabc.xyz', user);
    await selectDropdown(getExperienceSelect(), experienceSelectionOptions[0].label, user);
    await user.click(getConditionsAcceptedChk());
    await user.click(getSubmitButton());

    await waitFor(() => {
      expect(screen.getByTestId('error-alert')).toBeTruthy();
    });

    expect(screen.queryByTestId('success-alert')).toBeFalsy();
  });
});
