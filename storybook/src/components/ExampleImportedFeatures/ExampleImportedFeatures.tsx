import React from "react";
import ExampleImportedFeaturesWrapper from "./ExampleImportedFeatures.styles";

// import { ExampleButtonAppOne } from "@create-rs-domain/example-feature-package-one"
// import { ExampleButtonAppTwo } from "@create-rs-domain/example-feature-package-two";
// @ts-ignore
const RemoteButtonOne = React.lazy(() => import("appOne/ExampleButtonAppOne"));
// @ts-ignore
const RemoteButtonTwo = React.lazy(() => import("appTwo/ExampleButtonAppTwo"));

interface ExampleImportedFeaturesProps {
  /**
   * Button label text
   */
  text?: string;
}

const ExampleImportedFeatures = ({ text }: ExampleImportedFeaturesProps) => {
  return (
    <ExampleImportedFeaturesWrapper>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteButtonOne text="App One" />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteButtonTwo text="App Two" />
      </React.Suspense>
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </ExampleImportedFeaturesWrapper>
  );
};

// export const MemoizedExampleImportedFeatures = React.memo(ExampleImportedFeatures);
// export { ExampleImportedFeatures };
export default ExampleImportedFeatures;
