import React from 'react';
import Label from '../components/react/Others/Label';
import Switcher from '../components/react/Others/Switcher';

class OthersWrapper extends React.Component {
  render() {
    const { disabled } = this.props;

    return (
      <div id="components-container">
        <h3>Label</h3>
        <h4>Clickable Label</h4>
        <div>
          <Label disabled={disabled} text="click me" theme="ghost"/>
          <Label disabled={disabled} text="click me" theme="flat"/>
          <Label disabled={disabled} text="click me" />
        </div>
        <h4>Unclickable Label</h4>
        <div>
          <Label
            disabled={disabled}
            clickable={false}
            text="can not click"
            theme="ghost"/>
          <Label
            disabled={disabled}
            clickable={false}
            text="can not click"
            theme="flat"/>
          <Label
            disabled={disabled}
            clickable={false}
            text="can not click" />
        </div>
        <h4>Label with icon</h4>
        <div>
          <Label
            disabled={disabled}
            icon="code-fork"
            theme="ghost"
            text="fork me"/>
          <Label
            disabled={disabled}
            icon="code-fork"
            theme="flat"
            text="fork me"/>
          <Label disabled={disabled} icon="code-fork" text="fork me" />
        </div>
        <h3>Switcher</h3>
        <h4>Normal size</h4>
        <div>
          <Switcher disabled={disabled} />
          <Switcher disabled={disabled} checked={true} />
        </div>
        <h4>Small size</h4>
        <div>
          <Switcher disabled={disabled} size="small"/>
          <Switcher disabled={disabled} checked={true} size="small"/>
        </div>
        <h4>Mini size</h4>
        <div>
          <Switcher disabled={disabled} size="mini"/>
          <Switcher disabled={disabled} checked={true} size="mini"/>
        </div>
      </div>
    );
  }
}

export default OthersWrapper;
