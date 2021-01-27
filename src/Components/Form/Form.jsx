import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Form.module.css';
import PropTypes from 'prop-types';

/* eslint react/prop-types: 1 */

export default class Form extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func,
  };

  state = { name: '', number: '' };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    console.log(name, number);
    if (name && number) {
      this.props.onSubmitForm(this.state);
    }

    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log({ name, value });
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={style.container}>
        <label htmlFor={this.nameInputId} className={style.item}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId} className={style.item}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
