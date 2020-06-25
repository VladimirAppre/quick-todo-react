import React, {Component} from "react";
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'Все'},
    {name: 'active', label: 'Актуальные'},
    {name: 'done', label: 'Выполненные'}
  ];

  render() {
    const {filter, onFilterChange} = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => {
                  onFilterChange(name)
                }}>
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  };
};



