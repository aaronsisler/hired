import { Document } from 'shared/models/document';
import { AppUser } from 'shared/models/app-user';

export class Applicant {
  public $key: string;
  public userId: string;
  public user: AppUser;
  public applicationStatus: string;
  public applicationDocuments: Document[];

  constructor(init?: Partial<Applicant>) {
    Object.assign(this, init);
  }
}
