import { Time } from '../index';

describe('Time.parse', () => {
  it('should parse 12:00:00', () => {
    expect(Time.parse('12:00:00')).toEqual({
      hour: 12,
      minute: 0,
      second: 0,
    });
  });

  it('should parse 12:00', () => {
    expect(Time.parse('12:00')).toEqual({
      hour: 12,
      minute: 0,
      second: null,
    });
  });
});
