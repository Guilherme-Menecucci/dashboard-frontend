type Fields = TInputProps | TTextareaProps;

interface ControlledFormProps<FieldsProps extends Fields = Fields> {
  fields: FieldsProps[];
  onSubmit: (state: StateData<FieldsProps['name']>) => void;
  onValidate?: (data: StateData<FieldsProps['name']>) => boolean;
  submitProps: TButtonProps;
  resetProps?: TButtonProps;
}

type StateData<T extends string> = {
  [key in T]: string;
};

interface State {
  data: StateData<string>;
  isValid: boolean;
}

type Action =
  | {
      type: 'UPDATE_FIELD';
      payload: {
        name: string;
        value: string;
      };
    }
  | {
      type: 'VALIDATE_FORM';
      payload: string[];
    }
  | { type: 'RESET_FORM' };

export { Action, ControlledFormProps, Fields, State, StateData };
