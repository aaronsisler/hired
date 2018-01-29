import { Document } from 'shared/models/document';
import { AppUser } from 'shared/models/app-user';

export class Applicant {
  public $key: string;

  constructor(public user: AppUser, public applicationStatus: string, public applicationDocuments: Document[]){
  }
}
