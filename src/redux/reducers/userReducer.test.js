import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
  describe("When it is called with a userInfo action with the info of the user and a empty current state", () => {
    test("Then it should return the new state with the info of the user", () => {
      const currentState = {};
      const userData = { name: "alejandro" };
      const expectedNewState = userData;
      const action = {
        type: actionTypes.userInfo,
        userData,
      };

      const newState = userReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
  describe("When it is called with a userInfo no action", () => {
    test("Then it should return the same state", () => {
      const currentState = {};

      const action = {
        type: actionTypes.userInfodas,
      };

      const newState = userReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
