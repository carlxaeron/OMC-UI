'use client';

import { Select as SelectComponent, Input as InputComponent, Option, Menu, MenuHandler, Button, MenuList, MenuItem } from "@material-tailwind/react"

function InputContainer(props:any) {
  return (
    <div className="flex flex-wrap items-end gap-4 px-4 py-3">
      <label className="flex flex-col min-w-40 flex-1">
        <p className="text-[#111418] text-base font-medium leading-normal pb-2">{props.label || 'Label Name'}</p>
        {props.children}
      </label>
    </div>
  )
}

export function Input(props:any) {
  return (
    <InputContainer {...props}>
      <input
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
        {...props}
      />
    </InputContainer>
  )
}

export function Select(props:any) {
  const options = props.options || []

  const selectProps = Object.keys(props).filter(key => 
    key !== 'label'
  ).reduce((acc, key) => {
    const k = key === 'defaultValue' ? 'value' : key
    return {
      ...acc,
      [k]: props[key]
    }
  }, {});

  return (
    <InputContainer {...props}>
      <SelectComponent 
        // value="" 
        {...selectProps}
        // onChange={() => {}}
        // value={selectProps.value || ''}
        // defaultValue={selectProps.value || ''}
      >
        <Option value="">Select</Option>
        {options.map((option:any, index:number) => {
          return (
            <Option key={`select-option-${index}`} 
              onClick={() => props.onChange(option.value)} 
              value={option.value}>{option.label}</Option>
          )
        }
        )}
      </SelectComponent>
    </InputContainer>
  )
}

export function Form(props:any) {
  return (
    <form 
      // onSubmit={submitForm} 
      {...props}
      className="layout-content-container flex flex-col md:max-w-[512px] py-5 flex-1">{props.children}</form>
  )
}

export function SelectWithMenu(props:any) {
  const options = props.options || [];

  const InputProps = Object.keys(props).filter(key => 
    key !== 'label'
  ).reduce((acc, key) => {
    const k = key === 'defaultValue' ? 'value' : key
    return {
      ...acc,
      [k]: props[key]
    }
  }, {});

  const handleInput = (e:any) => {
    props?.onChange(e.target.value);
  }

  return (
    <InputContainer {...props}>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
            >
              {props.optionLabel || 'Select'}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {options.map(({ label, value }, index) => {
              return (
                <MenuItem
                  key={name}
                  value={name}
                  className="flex items-center gap-2"
                  onClick={() => InputProps.onChange(value)}
                >
                  {label}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <InputComponent
          className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
          {...InputProps}
          onChange={handleInput}
        />
      </div>
    </InputContainer>
  )
}

export function ButtonComponent(props:any) {
  return (
    <div className="flex px-4 py-3">
      <Button color="blue" className="w-full" {...props}>{props.children}</Button>
    </div>
  )
}