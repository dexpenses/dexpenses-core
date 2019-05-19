import { applyPlaceTypeMappings } from '.';

describe('applyPlaceTypeMappings', () => {
  it('should handle empty place types array', () => {
    expect(applyPlaceTypeMappings([])).toEqual(new Set([]));
  });
  it('should create unique set if place types map to duplicate category', () => {
    expect(applyPlaceTypeMappings(['cafe', 'restaurant'])).toEqual(
      new Set(['food'])
    );
  });

  it('should eliminate nulls from result set', () => {
    expect(applyPlaceTypeMappings(['cafe', 'restaurant', 'casino'])).toEqual(
      new Set(['food'])
    );
  });
});
