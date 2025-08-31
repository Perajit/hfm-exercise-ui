import { http, HttpResponse } from 'msw';

export const registerAccountUrlMatcher = new RegExp('/account/register$');

export const handlers = [
  http.post(registerAccountUrlMatcher, async () => {
    return HttpResponse.json({ result: 'success' });
  }),
];
