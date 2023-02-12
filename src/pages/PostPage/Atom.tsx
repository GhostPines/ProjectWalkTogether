import { atom } from 'recoil';

export const Time = atom<string>({
  key: 'Time',
  // key의 값은 항상 고유값이어야 합니다.
  default: Date(),
});
