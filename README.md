This is an implementation for the Front-end Exercise of HF Markets.

# Getting Started
## Install dependencies
```bash
npm install
```
## Serve application
```bash
npm run dev
```
The application will run at http://localhost:5173
## Run unit-testing
```bash
npm run test
```

# Technologies
- **Build tool**: Vite
- **Unit-testing**: Vitest (Jest is not supported by Vite)
- **UI & styling**: Flobite React, Tailwind CSS
- **API Request**: React Query, MSW (for mocking)

# Scope and Assumptions
- There is only 1 page with no links to other routes.
- Only the logic in the registration form has been implemented.
- Localization is NOT included.
- Unit-testing is included.
- Data such as dropdown options, list items, and table entries are declared as constants.
- The meaning of “Experience” was unclear, so dummy values are used in the list.
- Phone code is only displayed in UI but excluded from the request payload. (Better to leave let the server side lookup value from country code.)
- Adjustments from the Figma design:
  - The icons used are from Lucide, which are diffrent from the design and get too thick when resized.
  - Dropdown arrow icon: Flowbite’s default icon was used to maintain consistency with other components.
  - The last social icon couldn't be found, so a custom SVG was created for it.
  - Adjust the padding of "Login" button and "Register" in the header to be consistent. (The paddings of these 2 button are different in Figma.)

# Functionalities
- Fully responsive layout for all screen sizes.
- Displays Terms and Conditions modal when "Terms and Conditions" is clicked.
- Displays Privacy Policy modal when "Privacy Policy" is clicked.
- Field validations:
  - **First Name**: required, no special characters
  - **Last Name**: required, no special characters
  - **Country**: required
  - **Phone**: required, numeric
  - **Email**: required, email pattern
  - **Experience**: required
  - **Accept Policy Privacy / Terms and Conditions**: required
- Async handling:
  - Disable submit button and show spinner while requet is pending.
    To check this functionality, open developer console and set network throtting to "Slow 4G".
  - Shows success feedback on the form when submission is successful.
  - Shows error feedback on the form when submission fails.
- Updates feedback when field values change.

# Notes
- React Routers is used here for future extension.
- MSW is used for testing purpose.
- Unit-testing:
  - Only test cases for `RegisterForm` are added. Testing file path: "src/components/RegisterForm/__test__/".
  - All test case are passed
    but there is an error in console when forcing http error response to test the error handling.
    This is due to calling `console.error()` from React Query.

# Folder structure
```
hfm-exercise-ui/
├── flowbite-react/
├── .vscode/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── _base/                                        /* Base components without business logic */
│   │   ├── _icon/                                        /* Any custom svg icon wrapped as a component */
│   │   ├── AppFooter/
│   │   ├── AppHeader/
│   │   ├── FaqsSection/
│   │   ├── HeroSection/
│   │   ├── IntroSection/
│   │   ├── PrizesSection/
│   │   ├── RegisterForm/
│   │   │   └── __tests__/                                /* Folder for unit-testing files, including her */
│   │   │   |   ├── form-submission.test.tsx              /* Test cases for submission handling */
│   │   │   |   ├── form-validation.test.tsx              /* Test cases for validation handling */
│   │   │   |   └── index.test.tsx                        /* Test cases for core functionalities */
│   │   │   |   └── test-helper.tsx                       /* Test helper for executing test cases, including DOM query and user actions */
│   │   │   ├── PrivacyPolicyModalTrigger.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── TermsAndConditionsModalTrigger.tsx
│   │   └── TradingGainSection/
│   ├── constants/                                        /* Static data */
│   ├── hooks/                                            /* Custom hooks */
│   ├── lib/                                              /* Scripts related to 3rd party libraries */
│   ├── mocks/                                            /* For MSW */
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── App.tsx
│   ├── fonts.css
│   ├── index.css
│   ├── main.tsx
│   ├── utils.d.ts
│   └── vite-env.d.ts
├── test/                                                 /* Test setup & test utils */
├── .env
├── .gitignore
├── eslint.config.js
└── index.html
```
