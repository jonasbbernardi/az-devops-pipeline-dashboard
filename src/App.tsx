import * as React from "react";
import {
  FunctionComponent,
  useState,
  useEffect,
  useContext
} from 'react';
import {
  SplitterDirection,
  SplitterElementPosition,
  Splitter
} from "azure-devops-ui/Splitter";
import {SdkContext} from './context/SdkContext.mok';
import { Page } from "azure-devops-ui/Page";
import { ObservableValue } from 'azure-devops-ui/Core/Observable';
import { WrapBuildTree } from "./components/WrapBuildTree";
import "./App.scss"

export const App: FunctionComponent = () => {
    const collapsedValue = new ObservableValue(false);
    const sdk = useContext(SdkContext);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
      collapsedValue.value = collapsed;
    }, [collapsed]);

    const containerStyle = { height: "100vh", width: "100vw", display: "flex" };

    const _renderNearContent = () => (
        <Page className="release-hub-left flex-column">
          <WrapBuildTree/>
        </Page>
      )
    const _renderFarContent = () => (
        <Page className="release-hub-left flex-column">
          Content
        </Page>
      )
    
    const splitterProps = {
      fixedElement: SplitterElementPosition.Near,
      splitterDirection: SplitterDirection.Vertical,
      initialFixedSize: 300,
      minFixedSize: 100,
      nearElementClassName: "v-scroll-auto custom-scrollbar",
      farElementClassName: "v-scroll-auto custom-scrollbar",
      onCollapsedChanged: (collapsed) => (setCollapsed(collapsed)),
      onRenderNearElement: _renderNearContent,
      onRenderFarElement: _renderFarContent
    }

    return (
        <div style={containerStyle}>
            <SdkContext.Provider value={sdk}>
              <Splitter collapsed={collapsed} {...splitterProps} />
            </SdkContext.Provider>
        </div>
    )
}
