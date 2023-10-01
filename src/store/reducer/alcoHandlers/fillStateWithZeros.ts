import { StateType } from "../types/alcoTypes";

export const fillStateWithZeros = (state: StateType) => {
  state.totalVodkaPerMonth = 0;
  state.totalPureAlcoholPerMonth = 0;
  state.totalVodkaPerYear = 0;
  state.totalClearAlcoholPerYear = 0;
};