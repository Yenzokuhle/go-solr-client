import { TopUp } from './types';

export const getTotalTopUps = (incoming: TopUp[]) => {
  return incoming.length
    ? incoming
        .map((item: TopUp) => (item.value > 0 ? item.value : 0))
        .reduce((a: number, b: number) => a + b, 0)
    : [];
};
