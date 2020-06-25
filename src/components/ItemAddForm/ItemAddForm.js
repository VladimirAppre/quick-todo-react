import React, {Component} from "react";

import './ItemAddForm.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  //контролируемый элемент, здесь можем прикрутить валидацию (крединтные карты, номера телефонов и т. д. );
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form
        className='ItemAddForm d-flex'
        onSubmit={this.onSubmit}>
        <input type='text'
               className='form-control'
               onChange={this.onLabelChange}
               placeholder='Что должно быть выполнено'
               value={this.state.label}/>
        <button
          className='btn btn-outline-secondary'>
          Добавить
        </button>
      </form>
    );
  };
};
