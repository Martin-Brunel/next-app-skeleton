"use client";
import { MainState } from "@/interfaceAdapters/state/reducers/mainReducer";
import View from "./View";
import { ReduxUniversalSetter } from "@/types/reduxUniversalSetter";
import { useCallback, useEffect } from "react";
import { User } from "@/domain/entities/user";

type Props = {
  text: string;
  setMainState: ReduxUniversalSetter<MainState>;
  getData: VoidFunction;
  users: User[]
};

const ViewModel: React.FC<Props> = ({ text, setMainState, getData, users }) => {

  useEffect(() => {
    getData()
  }, [getData])
  
  

  const onClickButton = useCallback(() => {
    setMainState({
      text: "New text",
    });
  }, [setMainState]);


  return <View {...{ text, onClickButton, users }} />;
};

export default ViewModel;
