import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Clear mocks
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
