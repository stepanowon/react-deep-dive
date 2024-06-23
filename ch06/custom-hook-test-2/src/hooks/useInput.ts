import { ChangeEvent, useState } from "react";

const useInputString = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return [value, changeHandler] as const;
};

const useInputNoSpecialChar = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // 특수문자, 괄호, 점 제거를 위한 정규식
    // eslint-disable-next-line
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    setValue(e.target.value.replace(reg, ""));
  };

  return [value, changeHandler] as const;
};

const useInputNumber = (initialValue: number) => {
  const [value, setValue] = useState<number>(initialValue);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value, 10);
    setValue(isNaN(number) ? 0 : number);
  };

  return [value, changeHandler] as const;
};

export { useInputString, useInputNumber, useInputNoSpecialChar };
