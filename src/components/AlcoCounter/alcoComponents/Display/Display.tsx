import { useAppSelector } from "../../../../store/hooks/redux";
import { LgsName } from "../../../../types/alcoTypes";
import {
  DISPLAY_LINE,
  ALCO_CONTENT,
} from "../../../../constants/alcoConstants";

export const Display = () => {
  const alcoState = useAppSelector(
    (state) => state.alcoReducer
  );

  // add compatibility V1 & V2
  const lang =
    alcoState.currentLang.toUpperCase() as LgsName;

  const trs = DISPLAY_LINE.map((key, i) => (
    <tr key={key + i}>
      <th>{ALCO_CONTENT[lang][key]}</th>
      <td>{alcoState[key]}</td>
    </tr>
  ));

  return (
    <table
      className='alcoCounter-display'
      data-testid='display'
    >
      <caption id='caption'>
        {ALCO_CONTENT[lang].caption}
      </caption>
      <tbody>{trs}</tbody>
    </table>
  );
};
