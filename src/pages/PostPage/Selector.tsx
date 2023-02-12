import { selector } from 'recoil';
import { Time } from './Atom';

const timeSelector = selector({
  key: 'Time',
  get: ({ get }) => {
    const TimeValue = get(Time);
  },
});

export default timeSelector;
