import React, { Dispatch, SetStateAction } from 'react';
import * as S from './Style';
import { Tag } from '@components/base';
import { IMockData } from '@types';

interface TagListProps {
  supplementInfo?: IMockData[];
  setUserInput: Dispatch<SetStateAction<string>>;
  setCheckedBrand: Dispatch<SetStateAction<string>>;
  currentId: string;
  setCurrentId: Dispatch<SetStateAction<string>>;
}

const TagList = ({
  supplementInfo,
  setUserInput,
  setCheckedBrand,
  currentId,
  setCurrentId,
}: TagListProps) => {
  const tagList: string[] = [];

  if (supplementInfo) {
    supplementInfo.forEach((item: IMockData) => {
      const brand = item.브랜드;

      if (brand && tagList.indexOf(brand) < 0) {
        tagList.push(brand);
      }
    });
  }

  return (
    <S.TagList>
      {tagList.length > 0 &&
        React.Children.toArray(
          tagList.map((item) => (
            <Tag
              item={item}
              currentId={currentId}
              setUserInput={setUserInput}
              setCurrentId={setCurrentId}
              setCheckedBrand={setCheckedBrand}
            />
          ))
        )}
    </S.TagList>
  );
};

export default TagList;
