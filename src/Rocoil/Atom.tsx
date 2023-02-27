import { atom } from 'recoil';
import CategoryAll from '../pages/MainPage/CategoryAll/CategoryAll';

//Date & Time
export const Time = atom<string>({
  key: 'Time',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const ReserveDate = atom<any>({
  key: 'ReserveDate',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
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

export const ThumbnailUpload = atom<any>({
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

export const CategoryAllInput = atom<any>({
  key: 'CategoryAllInput',
  default: '',
});

export const SelectedCategoryInput = atom<any>({
  key: 'SelectedCategoryInput',
  default: '',
});

export const DateAllInput = atom<any>({
  key: 'DateAllInput',
  default: '',
});

export const SelectedDateInput = atom<any>({
  key: 'SelectedDateInput',
  default: '',
});

export const LocationAllInput = atom<any>({
  key: 'LocationAllInput',
  default: '',
});

export const SelectedLocationInput = atom<any>({
  key: 'SelectedLocationInput',
  default: '',
});

export const DateSortInput = atom<any>({
  key: 'DateSortInput',
  default: '',
});

export const ViewSortInput = atom<any>({
  key: 'ViewSortInput',
  default: '',
});

export const LikeSortInput = atom<any>({
  key: 'LikeSortInput',
  default: '',
});

export const NewSortInput = atom<any>({
  key: 'NewSortInput',
  default: '',
});

export const chattingusers = atom<any>({
  key: 'chattingusers',
  default: '',
});

export const isLoggedIn = atom<boolean>({
  key: 'isLoggedIn',
  default: false,
});

export const currentUserUid = atom<string>({
  key: 'currentUserUid',
  default: '',
});

export const username = atom<string>({
  key: 'username',
  default: '',
});

export const userForChat = atom<any>({
  key: 'userForChat',
  default: '',
});
