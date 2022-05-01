import { AppDispatch, AppThunk } from "../store/store.types";
import { registerUser } from "../services/api";
import {
  userRegistrationRequested,
  userRegistrationSucceeded,
  userRegistrationFailed,
} from "../store";
import makeErrorMessage from "../services/helpers/make-error-message";
import { AxiosError } from "axios";
import { TAPIError } from "../services/api.types";

const registerThunk: AppThunk =
  (usernameReg: string, emailReg: string, passwordReg: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(userRegistrationRequested());
    try {
      const {
        data: {
          user: { username, email, token },
        },
      } = await registerUser(usernameReg, emailReg, passwordReg);
      console.log(username, email, token);
      dispatch(userRegistrationSucceeded);
    } catch (error) {
      dispatch(
        userRegistrationFailed(makeErrorMessage(error as AxiosError<TAPIError>))
      );
    }
  };

export default registerThunk;
