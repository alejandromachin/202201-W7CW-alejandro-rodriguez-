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
});
