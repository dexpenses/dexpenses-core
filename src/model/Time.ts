export default interface Time {
  hour: number;
  minute: number;
  second: number | null;
}

export default class Time {
  static fromStrings(hour: string, minute: string, second?: string) {
    return {
      hour: parseInt(hour, 10),
      minute: parseInt(minute, 10),
      second: !second ? null : parseInt(second, 10),
    };
  }
  static parse(s: string): Time {
    const [hour, minute, second] = s.split(':');
    return this.fromStrings(hour, minute, second);
  }
}
