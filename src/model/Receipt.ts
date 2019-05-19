import { PlaceDetailsResult, GeocodingResult } from '@google/maps';
import Time from './Time';
import Address from './Address';
import Amount from './Amount';

export interface Timestamp {
  toDate(): Date;
}

export default interface Receipt {
  header?: string[];
  time?: Time;
  phone?: string;
  paymentMethod?: string;
  date?: Date | Timestamp;
  amount?: Amount;
  address?: Address;
  timestamp?: Date;
  place?: GeocodingResult & PlaceDetailsResult;
}
