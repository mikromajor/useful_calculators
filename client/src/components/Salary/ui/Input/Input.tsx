import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";

import { salaryActions } from "../../../../store/reducer/salaryReducer";
import { KeysSalaryInit } from "../../../../types/salaryTypes";

type InputProps = {
  payloadsKey: KeysSalaryInit;
};

export const Input = ({ payloadsKey }: InputProps) => {
  const dispatch = useAppDispatch();
  const { salaryReducer, appReducer } = useAppSelector(
    (state) => state
  );

  const currentTheme = appReducer.currentTheme;
  const { getSalary, changeSalaryDate } = salaryActions;

  const handlerInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = Number(e.currentTarget.value);

    if (payloadsKey === "month" || payloadsKey === "year") {
      dispatch(changeSalaryDate({ [payloadsKey]: val }));
    } else {
      dispatch(getSalary({ [payloadsKey]: val }));
    }
  };

  return (
    <input
      className={`salary__input salary__input--${currentTheme}`}
      id={payloadsKey}
      type='number'
      autoComplete='off'
      onChange={handlerInputChange}
      value={String(salaryReducer[payloadsKey])}
    />
  );
};
