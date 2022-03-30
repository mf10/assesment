import { Address } from './address';
import { Company } from './company';

export interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  website: string;
  phone: number;
  company: Company;
  address: Address;
}
