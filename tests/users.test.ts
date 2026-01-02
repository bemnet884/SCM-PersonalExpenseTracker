import { describe, it, expect } from 'vitest';
import { MOCK_USERS } from '../src/data/users';

describe('MOCK_USERS', () => {
  it('includes an administrator user', () => {
    const admin = MOCK_USERS.find((u) => u.role === 'Administrator');
    expect(admin).toBeDefined();
    expect(admin?.username).toBe('admin');
  });

  it('includes at least one non-administrator user', () => {
    const nonAdmin = MOCK_USERS.find((u) => u.role !== 'Administrator');
    expect(nonAdmin).toBeDefined();
  });
});
