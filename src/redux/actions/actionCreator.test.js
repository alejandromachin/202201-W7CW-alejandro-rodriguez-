import { getLoginAction, registerUserAction } from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a getLoginAction function", () => {
  describe("When it is called with a token", () => {
    test("Then it should return an object with the action and the token", () => {
      const token = "Im a token";
      const expectedReturn = {
        type: actionTypes.getLogin,
        token,
      };

      const action = getLoginAction(token);

      expect(action).toEqual(expectedReturn);
    });
  });
});
describe("Given a registerUserAction function", () => {
  describe("When it is called with the data of a user", () => {
    test("Then it should return an object with the action and the data", () => {
      const userData = "Im a user";
      const expectedReturn = {
        type: actionTypes.registerUser,
        userData,
      };

      const action = registerUserAction(userData);

      expect(action).toEqual(expectedReturn);
    });
  });
});
