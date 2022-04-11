import * as S from './Style';
import { ItemBrandBtn, Input, ResetBtn } from '@components/base';
import { Dispatch, SetStateAction } from 'react';

interface HeaderPops {
  userSelect: boolean;
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  setUserSelect: Dispatch<SetStateAction<boolean>>;
  initFilteredList: () => void;
  setCurrentId: Dispatch<SetStateAction<string>>;
}

const Header = ({
  userSelect,
  setUserSelect,
  userInput,
  setUserInput,
  initFilteredList,
  setCurrentId,
}: HeaderPops) => {
  return (
    <S.Header>
      <ItemBrandBtn
        userSelect={userSelect}
        setUserSelect={setUserSelect}
        setUserInput={setUserInput}
        initFilteredList={initFilteredList}
      />
      <Input
        setUserInput={setUserInput}
        userInput={userInput}
        setCurrentId={setCurrentId}
      />
      <ResetBtn
        setUserInput={setUserInput}
        initFilteredList={initFilteredList}
        setCurrentId={setCurrentId}
      />
    </S.Header>
  );
};

export default Header;
