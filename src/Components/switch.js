import React from 'react';
import Switch from 'react-switch'

export default class SwitchBtn extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        checked: this.props.checked || false
      }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(checked){
    this.setState({checked})
  }
  render(){
    return(
      <div>
        <Switch className="react-switch" 
          onChange={this.handleChange}
          checked={this.state.checked}
          height={20}
          width={40}
        />
      </div>
    )
  }
}