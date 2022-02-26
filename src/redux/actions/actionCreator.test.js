import { getLoginAction } from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a getLoginAction function", () => {
  describe("When it is called with a token", () => {
    test("Then it should return an object with the action and the token", () => {
      const token = "Im a token";
      const expectedReturn = {
        action: actionTypes.getLogin,
        token,
      };

      const action = getLoginAction(token);

      expect(action).toEqual(expectedReturn);
    });
  });
});
