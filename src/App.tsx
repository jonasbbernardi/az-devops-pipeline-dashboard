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
import {SdkContext} from './context/SdkContext';
import { Page } from "azure-devops-ui/Page";
import { ObservableValue } from 'azure-devops-ui/Core/Observable';
import { BuildFolders } from "./components/BuildFolders";

export const App: FunctionComponent = () => {
    const collapsedValue = new ObservableValue(false);
    const sdk = useContext(SdkContext);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
      collapsedValue.value = collapsed;
    }, [collapsed]);

    const containerStyle = { height: "500px", width: "600px", display: "flex" };

    const _renderNearContent = () => (
        <Page className="release-hub-left flex-column">
          <BuildFolders/>
        </Page>
      )
    const _renderFarContent = () => (
        <Page className="release-hub-left flex-column">
          Content
        </Page>
      )

    return (
        <div style={containerStyle}>
            <SdkContext.Provider value={sdk}>
              <Splitter
                  collapsed={collapsed}
                  fixedElement={SplitterElementPosition.Near}
                  splitterDirection={SplitterDirection.Vertical}
                  initialFixedSize={300}
                  minFixedSize={100}
                  nearElementClassName="v-scroll-auto custom-scrollbar"
                  farElementClassName="v-scroll-auto custom-scrollbar"
                  onCollapsedChanged={collapsed => (setCollapsed(collapsed))}
                  onRenderNearElement={_renderNearContent}
                  onRenderFarElement={_renderFarContent}
              />
            </SdkContext.Provider>
        </div>
    )
}
