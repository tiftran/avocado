import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
configure({ adapter: new Adapter() });
import ConnectedDatePicker, {
    DatePicker
} from "../../../components/dates/DatePicker";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { List, Map, string } from "immutable";
import thunk from "redux-thunk";

describe("DatePicker component", () => {
  it("should render the datepicker component", () => {
    const wrapper = shallow(
      <DatePicker />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should call setStartDate with value when selecting new date", () => {
    let startDateReceived = null;
    const component = mount(<DatePicker setStartDate = {(selectedStartDate) => { startDateReceived = selectedStartDate }} />);
    const input = component.find('input').at(0);
    input.instance().value = "2019-08-01";
    input.simulate('change');
    expect(startDateReceived).toEqual("2019-08-01");
  });

  it("should mount", () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(
      Map({
        date: Map({
          dates: String("")
        })
      })
    );
    const component = mount(
      <Provider store={store}>
        <ConnectedDatePicker />
      </Provider>
    );
    const input = component.find('input').at(0);
    input.instance().value = "2019-08-01";
    input.simulate('change');
  });
});