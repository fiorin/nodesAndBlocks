import React from "react";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ConnectedBlocks from "./Blocks";
import { create } from "react-test-renderer";

describe("<Blocks />", () => {
    const actions = {
        getBlocks: jest.fn()
    }

    const blocks = {
        list: [
            {
                id: 1,
                attributes: {
                    data: 'description'
                }
            }
        ]
    }

    it("should match snapshot", () => {
      const middlewares = [thunk];
      const store = configureMockStore(middlewares)({blocks});
      const component = create(
        <Provider store={store}>
          <ConnectedBlocks />
        </Provider>
      );
      const tree = component.toJSON();
  
      expect(tree).toMatchSnapshot();
    });
});
