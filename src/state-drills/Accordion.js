import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    section: []
  }

  state = {
    currentTabIndex: null
  };

  handleButtonClick(index){
    console.log('button clicked!', { index })
    this.setState({
      currentTabIndex: index})
  }

  renderButtonsContent(){
    return this.props.section.map((sec, index) => (
      <li key={index} className="accordion-item">
        <button type='button' onClick={() => this.handleButtonClick(index)}>{sec.title}</button>
        {(this.state.currentTabIndex === index) &&this.props.section.length && <p className='content'>{sec.content}</p>}
      </li>
    ))
  }

  render(){
    return(
      <ul>
        {this.renderButtonsContent()}
      </ul>
    )
  }
}

export default Accordion