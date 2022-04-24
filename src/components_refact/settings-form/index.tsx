import { FC, useEffect, useState } from "react";
import agent from "../../agent";
import {
  LOGOUT,
  SETTINGS_PAGE_UNLOADED,
  SETTINGS_SAVED,
} from "../../constants/actionTypes";
import { Optional } from "../../types/utility-types";

const initState = {
  image: "",
  username: "",
  bio: "",
  email: "",
  password: "",
};

type TUser = Optional<typeof initState, "password">;

//todo : поменять useSelector useDispatch
const mapStateToProps = (state: any) => ({
  ...state.settings,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: (user: any) =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED }),
});

export const SettingsForm: FC<{ [key: string]: any }> = (props) => {
  const [state, setState] = useState<TUser>(initState);

  const updateState = (field: any) => (ev: any) => {
    const newState = Object.assign({}, state, { [field]: ev.target.value });
    setState(newState);
  };
  const submitForm = (ev: any) => {
    ev.preventDefault();

    const user = Object.assign({}, state);
    if (!user.password) {
      delete user.password;
    }
    props.onSubmitForm(user);
  };

  useEffect(() => {
    if (props.currentUser) {
      setState({
        ...state,
        image: props.currentUser.image || "",
        username: props.currentUser.username,
        bio: props.currentUser.bio,
        email: props.currentUser.email,
      });
    }
  }, [props.currentUser]);

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="URL of profile picture"
            value={state.image}
            onChange={updateState("image")}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={updateState("username")}
          />
        </fieldset>

        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows={8}
            placeholder="Short bio about you"
            value={state.bio}
            onChange={updateState("bio")}
          ></textarea>
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={updateState("email")}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="New Password"
            value={state.password}
            onChange={updateState("password")}
          />
        </fieldset>

        <button
          className="btn btn-lg btn-primary pull-xs-right"
          type="submit"
          disabled={props.inProgress}
        >
          Update Settings
        </button>
      </fieldset>
    </form>
  );
};
