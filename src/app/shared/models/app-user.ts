export class AppUser {
  $key: string;
  displayName: string;
  email: string;
  isEmployee: boolean;
  isAdmin: boolean;
  userId: string;

  constructor(init?: Partial<AppUser>, userId?: string) {
    Object.assign(this, init);
    if (userId) {
      this.userId = userId;
    }
  }
}
