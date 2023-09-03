import * as React from 'react';
import { Autocomplete, Box, MenuItem, TextField } from '@mui/material';
import { IAutocompleteFieldProps, IAutocompleteFieldState } from './AutocompleteField.Interfaces';

import './AutocompleteField.scss';
import { IInitialObj } from '../../types';

export default class AutocompleteField extends React.PureComponent<
  IAutocompleteFieldProps,
  IAutocompleteFieldState
> {
  selectorRef: React.RefObject<any>;
  constructor(props: IAutocompleteFieldProps) {
    super(props);
    const { value: valueProp, arr, name } = this.props;
    this.state = {
      value: valueProp ? valueProp : null,
      inputValue: valueProp?.Name ? valueProp.Name : '',
    };
    this.selectorRef = React.createRef();
  }

  onChangeHandler = (event, newValue) => {
    console.log('AutocompleteField onChangeHandler');
    this.setState((prevState) => ({
      ...prevState,
      value: newValue,
    }));
    this.props.onChange(event, newValue, this.props.name);
  };
  private onInputChangeHandler = (event, newInputValue) => {
    console.log('AutocompleteField onInputChangeHandler');
    this.setState((prevState) => ({
      ...prevState,
      inputValue: newInputValue,
    }));
  };

  public render(): JSX.Element {
    const { value, inputValue } = this.state;
    const { arr, name } = this.props;
    console.log('AutocompleteField render');

    return (
      <Autocomplete
        ref={this.selectorRef}
        value={value ? value : null}
        onChange={(event: any, newValue: IInitialObj | null) =>
          this.onChangeHandler(event, newValue)
        }
        inputValue={inputValue !== '' ? inputValue : ''}
        onInputChange={(event, newInputValue) => this.onInputChangeHandler(event, newInputValue)}
        options={arr}
        getOptionLabel={(option) => option.Name}
        sx={{ width: '100%', minWidth: 200, height: 35 }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            style={{ fontSize: 12, height: 35 }}
            placeholder="- введите -"
          />
        )}
      />
    );
  }
}
