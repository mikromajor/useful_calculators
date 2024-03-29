import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  INIT_ALCO_STATE,
  INIT_MONTH_DATA,
} from "../../constants/alcoConstants";
import {
  tryStorageData,
  saveStateInStorage,
  setDecimal,
  createKey,
} from "./alcoHandlers";
import { LgsName } from "../../types/alcoTypes";

const store = tryStorageData(INIT_ALCO_STATE.currentYear);

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: !!store ? store : INIT_ALCO_STATE,
  reducers: {
    changeLanguage: (
      state,
      action: PayloadAction<LgsName>
    ) => {
      state.currentLang = action.payload;
    },

    changeMonth: (state, action: PayloadAction<string>) => {
      const month = Number(action.payload);
      if (month > 0 && month < 13) {
        state.currentMonth = action.payload;

        if (state.monthsData[month]) {
          state.sumEthanolPerMonth =
            state.monthsData[month].sumEthanolPerMonth;
          state.sumVodkaPerMonth =
            state.monthsData[month].sumVodkaPerMonth;
          state.currentMonth = month + "";
        } else {
          state.sumEthanolPerMonth = 0;
          state.sumVodkaPerMonth = 0;
        }
      }
    },
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;

      const isStoreData = tryStorageData(year);

      Object.assign(
        state,
        !!isStoreData ? isStoreData : INIT_ALCO_STATE,
        {
          currentYear: year,
          currentLang: state.currentLang,
        }
      );
    },

    calculating: (
      state,
      action: PayloadAction<string[]>
    ) => {
      const [volumeDrank, percent] = action.payload;
      const vol = Number(volumeDrank);
      const per = Number(percent);
      let ethanol = 0;

      if (vol && per) {
        ethanol = (vol * per) / 100;

        state.sumEthanolPerMonth = setDecimal(
          state.sumEthanolPerMonth + ethanol,
          0
        );
        state.sumVodkaPerMonth = setDecimal(
          state.sumEthanolPerMonth * 2.5,
          0
        );
        state.monthsData[Number(state.currentMonth)] = {
          month: state.currentMonth,
          sumEthanolPerMonth: state.sumEthanolPerMonth,
          sumVodkaPerMonth: state.sumVodkaPerMonth,
        };

        state.sumEthanolPerYear = setDecimal(
          state.monthsData.reduce(
            (sum, monthData) =>
              !!monthData
                ? sum + monthData.sumEthanolPerMonth
                : 0,
            0
          ),
          0
        );

        state.sumVodkaPerYear = setDecimal(
          state.sumEthanolPerYear * 2.5,
          0
        );
        saveStateInStorage(state);
      }
    },
    clearStorageForYear: (state) => {
      const key = createKey(state.currentYear);
      window.localStorage.removeItem(key);
      Object.assign(state, INIT_ALCO_STATE, {
        currentYear: state.currentYear,
        currentLang: state.currentLang,
      });
    },
    clearMonthData: (state) => {
      const monthData =
        state.monthsData[Number(state.currentMonth)];
      monthData.sumEthanolPerMonth = 0;
      monthData.sumVodkaPerMonth = 0;

      state.sumVodkaPerYear -= state.sumVodkaPerMonth;
      state.sumEthanolPerYear -= state.sumEthanolPerMonth;
      state.sumEthanolPerMonth = 0;
      state.sumVodkaPerMonth = 0;
    },
    // clearAllStor: () => {
    //   window.localStorage.clear();
    // },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
