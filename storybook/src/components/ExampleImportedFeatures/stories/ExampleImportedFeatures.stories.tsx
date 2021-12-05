import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
const Readme = require("../README.md");

import ExampleImportedFeatures from "../ExampleImportedFeatures";

export default {
  title: "Newly Generated/ExampleImportedFeatures/Default",
  component: ExampleImportedFeatures,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof ExampleImportedFeatures>;

// ==============================
// Traditional Node Render on Client Side
// ==============================

const Template: ComponentStory<typeof ExampleImportedFeatures> = (args) => (
  <ExampleImportedFeatures {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Hello World",
};
Primary.parameters = {
  readme: {
    sidebar: Readme,
  },
  // jest: ["ExampleImportedFeatures.test.tsx"],
};
