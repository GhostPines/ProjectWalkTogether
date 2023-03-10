import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: '',
  storage: sessionStorage,
});

//* ---------------postpage------------------ *//
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

//* ---------------Map page------------------ *//

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

//* ---------------Map catgory page------------------ *//
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

export const Cetegory = atom<any>({
  key: 'Cetegory',
  default: '전체',
});

export const FilterSelectedDateForMapPage = atom<any>({
  key: 'FilterSelectedDateForMapPage',
  default: '',
});

export const FilterMeetDateForMapPage = atom<any>({
  key: 'FilterMeetDateForMapPage',
  default: '',
});

export const dateType1ForMapPage = atom<any>({
  key: 'dateType1ForMapPage',
  default: '',
});

export const dateType2ForMapPage = atom<any>({
  key: 'dateType2ForMapPage',
  default: '',
});

export const viewCountForMapPage = atom<any>({
  key: 'viewCountForMapPage',
  default: '최신순',
});

//* ---------------MapPage Catefory------------------ *//

export const chattingusers = atom<any>({
  key: 'chattingusers',
  default: '',
});

export const filterDatename = atom<any>({
  key: 'filterDatename',
});

export const isLoggedIn = atom<boolean>({
  key: 'isLoggedIn',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const currentUserUid = atom<string>({
  key: 'currentUserUid',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const username = atom<string>({
  key: 'username',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const NewpostTag = atom<string[]>({
  key: 'NewpostTag',
  // key의 값은 항상 고유값이어야 합니다.
  default: [],
});

export const currentKakaoId = atom<string>({
  key: 'currentKakaoId',
  default: '',
});

export const kakaoState = atom({
  key: 'kakaoState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const kakaoUserState = atom({
  key: 'kakaoUserState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const FilterSelectedDate = atom<any>({
  key: 'FilterSelectedDate',
  // key의 값은 항상 고유값이어야 합니다.
  default: '',
});

export const userForChat = atom<any>({
  key: 'userForChat',
  default: '',
});

//* ---------------Chatting page------------------ *//

//채팅리스트에서 채팅박스로 채팅방id를 보냄
export const tochattingboxroomid = atom<string>({
  key: 'tochattingboxroomid',
  default: '',
});

//채팅리스트에서 채팅박스로 채팅방 닉네임을 보냄
export const tochattingboxnickname = atom<string>({
  key: 'tochattingboxnickname',
  default: '',
});

//채팅리스트에서 채팅박스로 채팅방 닉네임을 보냄
export const tochattingboxprofileimg = atom<string>({
  key: 'tochattingboxprofileimg',
  default: '',
});

//* ---------------postEdit page------------------ *//

export const ReserveEditDate = atom<any>({
  key: 'ReserveEditDate',
  default: '',
});

export const TimeEdit = atom<any>({
  key: 'TimeEdit',
  default: '',
});
export const UserNickName = atom<string>({
  key: 'UserNickName',
  default: '',
});
