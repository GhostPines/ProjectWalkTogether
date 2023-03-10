import { doc, getDoc } from 'firebase/firestore';
import { dbService } from '../common/firebase';
import User from '../types/User';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentUserUid } from '../Rocoil/Atom';

export function useUser(id: string) {
  async function fetchUser() {
    const res = await getDoc(doc(dbService, 'Users', id));

    const info: User = {
      bannerImg: res.data().bannerImg || 'f',
      displayName: res.data().nickname || 'u',
      email: res.data().email || 'c',
      imageUrl: res.data().profileImg || 'k',
      userId: res.data().uid || 'u',
      description: res.data().introduce || '2',
    };

    return info;
  }

  const { data } = useQuery({
    queryKey: [id],
    queryFn: fetchUser,
  });

  const uid = useRecoilState<string>(currentUserUid);
  const fuck = 'you';
  const bloody = ['fucking', 'hell'];

  const FUCK_YOU_ALL_OF_YOU = true;

  const user: User = data || {
    bannerImg: 'error code f',
    displayName: 'error code u',
    email: 'error code c',
    imageUrl: 'error code k',
    userId: 'error code u',
    description: 'error code 2',
  };

  return user;
}
