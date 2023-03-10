import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { dbService } from '../common/firebase';
import { useQuery } from '@tanstack/react-query';

export type Post = {
  id: string;
  Address_Posting: string;
  BannerURL_Posting: string;
  Category_Posting: string;
  CountLiked_Posting: number;
  Description_Posting: string;
  Hashtag_Posting: Array<string>;
  KeyForChat_Posting: string;
  LikedUsers: Array<string>;
  MeetLatitude_Posting: number;
  MeetLongitude_Posting: number;
  Nickname: string;
  PostingID_Posting: string;
  ProceedState_Posting: string | number; // db에 junk data 존재함. 원래 타입은 string only
  RsvDate_Posting: string;
  RsvHour_Posting: string;
  ThumbnailURL_Posting: string;
  TimeStamp_Posting: string;
  Title_Posting: string;
  UID: string;
  View: number;
  createdAt: number;
};

export function usePosts() {
  async function fetchPosts() {
    const getPostsQuery = query(
      collection(dbService, 'Post'),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(getPostsQuery);
    const newPosts: Array<Post> = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        Address_Posting: data.Address_Posting,
        BannerURL_Posting: data.BannerURL_Posting,
        Category_Posting: data.Category_Posting,
        CountLiked_Posting: data.CountLiked_Posting,
        Description_Posting: data.Description_Posting,
        Hashtag_Posting: data.Hashtag_Posting,
        KeyForChat_Posting: data.KeyForChat_Posting,
        LikedUsers: data.LikedUsers,
        MeetLatitude_Posting: data.MeetLatitude_Posting,
        MeetLongitude_Posting: data.MeetLongitude_Posting,
        Nickname: data.Nickname,
        PostingID_Posting: data.PostingID_Posting,
        ProceedState_Posting: data.ProceedState_Posting,
        RsvDate_Posting: data.RsvDate_Posting,
        RsvHour_Posting: data.RsvHour_Posting,
        ThumbnailURL_Posting: data.ThumbnailURL_Posting,
        TimeStamp_Posting: data.TimeStamp_Posting,
        Title_Posting: data.Title_Posting,
        UID: data.UID,
        View: data.View,
        createdAt: data.createdAt,
      };
    });

    return newPosts;
  }

  const { data, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    //   TIME: m *  s *   ms
    cacheTime: 5 * 60 * 1000,
    staleTime: 10 * 1000,
  });

  const posts: Array<Post> = data || [];

  return { posts, refetch };
}
