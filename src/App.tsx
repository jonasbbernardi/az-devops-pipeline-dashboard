import * as React from "react";
import {
  FunctionComponent,
  useState
} from 'react';
import {
    SplitterDirection,
    SplitterElementPosition,
    Splitter
} from "azure-devops-ui/Splitter";
import { ObservableValue } from 'azure-devops-ui/Core/Observable';

export const App: FunctionComponent = () => {
    const collapsedValue = new ObservableValue(false);
    const [collapsed, setCollapsed] = useState(false);

    React.useEffect(() => {
      collapsedValue.value = collapsed;
    }, [collapsed])

    const containerStyle = { height: "500px", width: "600px", display: "flex" };

    const _renderNearContent = () => (<></>)
    const _renderFarContent = () => (<></>)

    return (
        <div style={containerStyle}>
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
        </div>
    )
}
