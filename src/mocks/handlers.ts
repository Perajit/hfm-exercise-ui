import { http, HttpResponse } from 'msw';

const registerAccountUrlMatcher = new RegExp('/account/register$');

export const handlers = [
  http.post(registerAccountUrlMatcher, async () => {
    return HttpResponse.json({ result: 'success' });
  }),
];
