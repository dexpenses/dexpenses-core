import { Receipt } from '../index';

describe('Receipt.getDate', () => {
  it('should return null if it was null', () => {
    expect(
      Receipt.getDate({
        date: null,
      })
    ).toBeNull();
  });

  it('should return undefined if it was undefined', () => {
    expect(Receipt.getDate({})).toBeUndefined();
  });

  it('should return same JS date if it already is a JS date', () => {
    const date = new Date();
    expect(
      Receipt.getDate({
        date,
      })
    ).toBe(date);
  });

  it('should convert timestamp to date', () => {
    const date = new Date();
    expect(
      Receipt.getDate({
        date: { toDate: () => date },
      })
    ).toBe(date);
  });
});
