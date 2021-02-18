import { Notification } from './notification';

export interface User {
  displayName: string,
  email: string,
  notifications: Notification[]
}
