export class AppUser {
  $key: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  displayName: string;
  email: string;
  firstName: string;
  isEmployee: boolean;
  isAdmin: boolean;
  lastName: string;
  middleName: string;
  phoneAreaCode: string;
  phoneExt: string;
  phoneLineNumber: string;
  phonePrefix: string;
  postalCode: string;
  state: string;
  userId: string;

  constructor(init?: Partial<AppUser>, userId?: string) {
    Object.assign(this, init);
    if (userId) {
      this.userId = userId;
    }
  }
}
