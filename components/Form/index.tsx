'use client';
import React, {
  ChangeEvent,
  FormEvent,
  TextareaHTMLAttributes,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import clsx from 'clsx';

import { Action, ControlledFormProps, State } from '~@types/components/Form';

import Button from '~@components/Button';
import PasswordField from '~@components/PasswordField';
import TextField from '~@components/TextField';

//#region TextArea
// TODO: Create a component for TextArea
type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  type: 'textarea';
  name: string;
  placeholder: string;
  fullWidth?: boolean;
};

const TextareaField = forwardRef<HTMLTextAreaElement, TTextareaProps>(
  ({ placeholder, name, value, onChange, ...rest }, ref) => {
    return (
      <div>
        <label>
          {placeholder}:
          <textarea name={name} value={value} onChange={onChange} ref={ref} {...rest} />
        </label>
      </div>
    );
  },
);

TextareaField.displayName = 'TextareaField';

//#endregion

const initialState: State = {
  data: {},
  isValid: false,
};

function formReducer(state: State, action: Action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, data: { ...state.data, [action.payload.name]: action.payload.value } };

    case 'VALIDATE_FORM':
      if (action.payload.length === 0) return { ...state, isValid: true };

      const isValid = Object.values(action.payload).every(
        field => state.data[field] && state.data[field] !== '',
      );

      return { ...state, isValid: isValid };

    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
}

const ControlledForm: React.FC<ControlledFormProps> = ({
  fields,
  submitProps: { submitClassName, ...submitProps },
  resetProps,
  onSubmit,
  onValidate,
}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  // const requiredFields = useMemo(
  //   () =>
  //     React.Children.map(children, child => {
  //       if (!React.isValidElement(child)) return;

  //       const { name, required } = child.props;

  //       if (required) return name as string;
  //     }),
  //   [children],
  // );
  const requiredFields = useMemo(
    () =>
      fields.reduce<string[]>((acc, field) => {
        const { name, required } = field;

        if (required) acc.push(name);

        return acc;
      }, []),
    [fields],
  );

  useEffect(() => {
    dispatch({ type: 'VALIDATE_FORM', payload: requiredFields });
  }, [requiredFields, state.data]);

  const renderFields = useCallback(
    () =>
      fields.map(field => {
        if (field.type === 'textarea')
          return (
            <TextareaField
              {...field}
              key={field.name}
              type={field.type}
              name={field.name}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                handleChange(field.name)(event);
                if (field.onChange) field.onChange(event);
              }}
            />
          );

        if (field.type === 'password')
          return (
            <PasswordField
              {...field}
              key={field.name}
              type={field.type}
              name={field.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleChange(field.name)(event);
                if (field.onChange) field.onChange(event);
              }}
            />
          );

        return (
          <TextField
            {...field}
            key={field.name}
            type={field.type}
            name={field.name}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleChange(field.name)(event);
              if (field.onChange) field.onChange(event);
            }}
          />
        );
      }),
    [fields],
  );

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();

      const { value } = event.target;
      dispatch({
        type: 'UPDATE_FIELD',
        payload: { name, value },
      });
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Some field its empty (Should verify if its a optional field)
    if (!state.isValid) return;

    // The custom validation doent was accepted
    if (onValidate && !onValidate(state.data)) return;

    // Every thing fine
    onSubmit(state.data);
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <form className="bg-inherit py-4" onSubmit={handleSubmit} onReset={handleReset}>
      {renderFields()}
      {/* {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return;

        const { name, onChange, ...restProps } = child.props;

        return React.cloneElement(child, {
          name,
          onChange: async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            handleChange(name)(event);
            if (onChange) onChange(event);
          },
          ...restProps,
        });
      })} */}
      <Button
        {...submitProps}
        className={clsx('mt-4', submitClassName)}
        type="submit"
        disabled={!state.isValid}
      />
      {resetProps ? <Button {...resetProps} type="reset" /> : null}
    </form>
  );
};

export default memo(ControlledForm);
