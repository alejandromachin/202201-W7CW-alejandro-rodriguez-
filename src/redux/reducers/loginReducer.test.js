import actionTypes from "../actions/actionTypes";
import loginReducer from "./loginReducer";

describe("Given a loginReducer function", () => {
  describe("When it is called with a getLogin action with a token and a empty current state", () => {
    test("Then it should return the new state with the token", () => {
      const currentState = {};
      const token = "Im a token";
      const expectedNewState = token;
      const action = {
        type: actionTypes.getLogin,
        token,
      };

      const newState = loginReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
