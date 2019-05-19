import { PlaceDetailsResult, GeocodingResult } from '@google/maps';
import Time from './Time';
import Address from './Address';
import Amount from './Amount';

export interface Timestamp {
  toDate(): Date;
}

export default interface Receipt {
  header?: string[];
  time?: Time | null;
  phone?: string | null;
  paymentMethod?: string | null;
  date?: Date | Timestamp | null;
  amount?: Amount | null;
  address?: Address | null;
  timestamp?: Date | null;
  place?: (GeocodingResult & PlaceDetailsResult) | null;
}

export default class Receipt {
  static getDate(receipt: Receipt): Date | undefined | null {
    if (!receipt.date) {
      return receipt.date;
    }
    return (receipt.date as Timestamp).toDate
      ? (receipt.date as Timestamp).toDate()
      : (receipt.date as Date);
  }
}
