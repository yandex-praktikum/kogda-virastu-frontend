import { AppDispatch, AppThunk } from "../store/store.types";
import { registerUser } from "../services/api";
import {
  userRegistrationRequested,
  userRegistrationSucceeded,
  userRegistrationFailed,
  setUser
} from "../store";
import makeErrorMessage from "../services/helpers/make-error-message";
import { AxiosError } from "axios";
import { TAPIError } from "../services/api.types";
import { jwt } from '../services/api';
import { batch } from "react-redux";

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
      const data = {
        username: username,
        email: email,
      }
      batch(() => {
        dispatch(setUser(data));
        dispatch(userRegistrationSucceeded())
      })
      jwt.set(token);
    } catch (error) {
      dispatch(
        userRegistrationFailed(makeErrorMessage(error as AxiosError<TAPIError>))
      );
    }
  };

export default registerThunk;
