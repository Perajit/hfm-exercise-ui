export type UserProfile = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneCode: string;
  phoneNumber: string;
  settings: {
    lang: string;
  };
};
