import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default class MultiSelect extends React.Component {
  state = {
    name: [],
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form autoComplete="off">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12">
            <div className="form-group">
              <FormControl fullWidth>
                <Select multiple value={this.state.name} onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                  MenuProps={MenuProps} >
                  {names.map(name => (
                    <MenuItem key={name} value={name}>{name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

        </div>
      </form>
    );
  }
}
