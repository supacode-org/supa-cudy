// Copyright 2026 Supa Cudy contributors
// SPDX-License-Identifier: Apache-2.0

import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/svelte';

afterEach(() => {
  cleanup();
  localStorage.clear();
  sessionStorage.clear();
  delete document.documentElement.dataset.theme;
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.useRealTimers();
});
