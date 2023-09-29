import { SelectChangeEvent } from '@mui/material';
import { IInitialObj, InitialObjOrNull } from '../../types';

export interface IAutocompleteFieldProps {
  value?: IInitialObj;
  arr: IInitialObj[];
  onChange: (e: SelectChangeEvent<string>, value: IInitialObj, name: string) => void;
  name: string;
}
export interface IAutocompleteFieldState {
  value: InitialObjOrNull;
  inputValue: string;
}
