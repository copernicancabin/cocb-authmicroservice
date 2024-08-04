import { Model, ObjectId } from 'mongoose';
import { QueryResult } from '../plugins/paginate';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  isEmailVerified: boolean;
}

export interface IJSONUser {
  name: string;
  email: string;
  password: string;
  role: string;
  isEmailVerified: boolean;
  id: ObjectId;
}

export interface IUserStatics extends Model<IUser> {
  isEmailTaken(email: string, excludeUserId?: ObjectId): Promise<boolean>;
  isPasswordMatch(password: string): Promise<boolean>;
  paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
  toJSON(): void;
}

export interface UpdateUserBody {
  name?: string;
  email?: string;
  password?: string;
}

export interface NewRegsiteredUser {
  name: string;
  email: string;
  password: string;
}

export interface NewCreatedUser {
  name: string;
  email: string;
  password: string;
  role: string;
}
