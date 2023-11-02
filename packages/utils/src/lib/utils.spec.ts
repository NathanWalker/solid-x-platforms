import { isAndroid, isIOS, isNativeScript } from './utils';

describe('NativeScript Utilities', () => {
  it('standard web: isAndroid', () => {
    expect(isAndroid()).toBe(false);
  });
  it('standard web: isIOS', () => {
    expect(isIOS()).toBe(false);
  });
  it('standard web: isNativeScript', () => {
    expect(isNativeScript()).toBe(false);
  });
});
