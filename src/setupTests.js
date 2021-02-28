// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
// allows you to write clean and simple snapshot tests. enzyme-to-json
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
