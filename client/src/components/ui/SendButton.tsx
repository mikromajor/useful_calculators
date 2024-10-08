import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import {
  useAppDispatch,
  useAppSelector,
} from "store/hooks/redux";
import { AsyncThunk } from "@reduxjs/toolkit";
import {
  EmailPassword,
  IServerRes,
  ModalOpen,
} from "types/userTypes";
import { fetchUserRegistration } from "store/reducer/http/authActions";

interface ISendButtonProps {
  sendProtector: boolean;
  sendData: EmailPassword;
  sendHandler: AsyncThunk<void, EmailPassword, {}>;
}

export const SendButton = ({
  sendProtector,
  sendData,
  sendHandler,
}: ISendButtonProps) => {
  const { isLoading } = useAppSelector(
    (state) => state.serviceReducer
  );
  const dispatch = useAppDispatch();

  const sendRequest = () => {
    dispatch(sendHandler(sendData));
  };

  return (
    <LoadingButton
      variant='contained'
      startIcon={<SendIcon />}
      loading={isLoading}
      disabled={sendProtector}
      onClick={sendRequest}
    >
      Send
    </LoadingButton>
  );
};
