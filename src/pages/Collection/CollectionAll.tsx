import styled from 'styled-components';
import { CollecitionList } from '../../utils/CollectionList';
import { useNavigate } from 'react-router-dom';

const CollectionAll = () => {
  const navigate = useNavigate();

  return (
    <Collection>
      {CollecitionList.map((Collection) => {
        return (
          <Collectionitem
            onClick={() => navigate(`/collection/${Collection.name}`)}
          ></Collectionitem>
        );
      })}
    </Collection>
  );
};

export default CollectionAll;

export const Collection = styled.div``;

export const Collectionitem = styled.div``;
