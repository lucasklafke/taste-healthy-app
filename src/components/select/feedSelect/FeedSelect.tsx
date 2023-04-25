import React from 'react'
import Select from 'react-select'
interface Props {
  options: {
    value: string,
    label: string
  }[]
}
export function FeedSelect(props:Props) {
  const {options} = props
  const customStyles:any = {
    container: (provided:any) => ({
      ...provided,
      marginTop: '8px',
      minWidth: '140px'
    }),
    control: (provided:any) => ({
      ...provided,
      borderRadius: '5px',
      borderColor: '#ccc',
      zIndex: 5,
      height:'30px',
      minHeight: '24px',
      fontSize: '12px'
    }),
    option: (provided:any, state:any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ccc' : 'transparent',
      color: '#000',
      zIndex: 5,
      fontSize: '12px',
      ':hover': {
        backgroundColor: '#eee',
      },
      menuPortal: (provided:any) => ({
        ...provided,
        zIndex: 2,
      }),
    }),
    indicatorSeparator: (provided:any) => ({
      ...provided,
      height: '16px', // set the height of the separator
    }),
    indicatorsContainer: (provided:any) => ({
      ...provided,
      height: '100%'
    }),
    dropdownIndicator : (provided:any) => ({
      ...provided,
      paddingTop: '8px', // set the top padding of the arrow
      paddingBottom: '8px', // set the bottom padding of the arrow
      width: '20px', // set the width of the arrow
      height: '20px',
      padding: '2px',
      boxSizing: 'none'
    })
  }
  return (
    <Select
      options={options}
      isClearable={false}
      placeholder=""
      defaultValue={options[0]}
      styles={customStyles}
      menuPosition={'fixed'} 
    />
  )
}