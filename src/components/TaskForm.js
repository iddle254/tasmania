import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.task ? props.task.description : '',
      note: props.task ? props.task.note : '',
      days_to_complete: props.task ? props.task.days_to_complete : '',
      deadline: props.task ? moment(props.task.deadline) : moment(),
      calendarFocused: false,
      error: '',
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onDaysToCompleteChange = (e) => {
    const days_to_complete = e.target.value;

    this.setState(() => ({ days_to_complete }));

    // if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
    //   this.setState(() => ({ days_to_complete }));
    // }
  };
  onDeadlineChange = (deadline) => {
    if (deadline) {
      this.setState(() => ({ deadline }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.days_to_complete) {
      this.setState(() => ({
        error: 'Please provide description and days required to complete.',
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        days_to_complete: parseFloat(this.state.days_to_complete, 10),
        deadline: this.state.deadline.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          type='text'
          placeholder='Description'
          autoFocus
          className='text-input'
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type='text'
          placeholder='Days to complete'
          className='text-input'
          value={this.state.days_to_complete}
          onChange={this.onDaysToCompleteChange}
        />
        <SingleDatePicker
          date={this.state.deadline}
          onDateChange={this.onDeadlineChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder='Add a note for your task (optional)'
          value={this.state.note}
          onChange={this.onNoteChange}
          className='textArea'
        ></textarea>
        <div>
          <button className='button '>Save Task</button>
        </div>
      </form>
    );
  }
}
