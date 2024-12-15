import * as React from "react";
import {
  FunctionComponent,
  useState,
  useEffect
} from 'react';
import {
  SplitterDirection,
  SplitterElementPosition,
  Splitter
} from "azure-devops-ui/Splitter";
import {SdkContext, SDK} from './SdkContext';
import { ObservableValue } from 'azure-devops-ui/Core/Observable';
import { BuildFolders } from "./components/BuildFolders";

export const App: FunctionComponent = () => {
    const collapsedValue = new ObservableValue(false);
    const [collapsed, setCollapsed] = useState(false);
    const [sdk, setSdk] = useState(SDK);

    useEffect(() => {
      setSdk(SDK);
    }, [])

    useEffect(() => {
      collapsedValue.value = collapsed;
    }, [collapsed]);

    const containerStyle = { height: "500px", width: "600px", display: "flex" };

    const _renderNearContent = () => (<BuildFolders/>)
    const _renderFarContent = () => (
      <div>Teste</div>
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
