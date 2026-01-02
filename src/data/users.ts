
import { User } from '../types';

/**
 * Mock users data normally found in a users.json file.
 * In this SCM project, this acts as our static user database.
 */
export const MOCK_USERS: User[] = [
  {
    username: 'admin',
    password: 'password123',
    role: 'Administrator'
  },
  {
    username: 'john_doe',
    password: 'user456',
    role: 'Standard User'
  },
  {
    username: 'jane_scm',
    password: 'scm_expert',
    role: 'Release Manager'
  }
];
