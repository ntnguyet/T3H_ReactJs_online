import React, {Component} from 'react'
import PropTypes from 'prop-types';

export const Header = class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>{this.props.branding}</div>
    )
  }
}
 
export const HeaderTwo = (props) => {
  const{branding} = props;
  return (
    <div>
      <nav></nav>
      <div>{branding}</div>
    </div>
    
  )
}

HeaderTwo.defaultProps={
  branding: 'My App'
}
HeaderTwo.prototype = {
  branding: PropTypes.string.isRequired
}