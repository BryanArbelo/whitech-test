import React,{Component} from 'react';
import { Input,Dropdown, TextArea} from 'semantic-ui-react'

export default class TextInput extends Component {

  constructor(props) {
    super(props);
  }
  renderDropdown = () => {
    //logger.info(this.props);
    let {title,fieldclasses} = this.props;
    return <div className={fieldclasses || 'field'}>
      {title ? (<h5>{title}</h5>) :''}
      <Dropdown {...this.props} >
        {this.props.children}
      </Dropdown>
    </div>
  }


  render() {
    let itemToRender = '';
    let {type} = this.props;

     if (type == 'dropdown') { //text,className
      itemToRender = this.renderDropdown();
    } else {
      logger.error('the TYPE prop is mandatory',this.props)
    }

    return itemToRender;
  }
}
