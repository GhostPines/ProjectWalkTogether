import { atom } from 'recoil';

//Date & Time
export const Time = atom<string>({
  key: 'Time',
  // key의 값은 항상 고유값이어야 합니다.
  default: Date(),
});

export const ReserveDate = atom<any>({
  key: 'ReserveDate',
  // key의 값은 항상 고유값이어야 합니다.
  default: Date(),
});

export const TitleInput = atom<string>({
  key: 'TitleInput',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const DescriptionInput = atom<string>({
  key: 'DescriptionInput',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const Bannerupload = atom<any>({
  key: 'Bannerupload',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const Thunmnailupload = atom<any>({
  key: 'Thunmnailupload',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

//위치
export const myLocation = atom<any>({
  key: 'myLocation',
  // key의 값은 항상 고유값이어야 합니다.
  default: { lat: 36.5, lng: 127.8 },
});

export const selectedAddress = atom<any>({
  key: 'selectedAddress',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const paramsState = atom<any>({
  key: 'paramsState',
  default: '',
});

export const chattingusers = atom<any>({
  key: 'chattingusers',
  default: '',
});
