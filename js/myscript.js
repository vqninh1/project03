import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const DropDown = ({ options, register, name, setValue }) => {
  const [isShow, setIsShow] = useState(false)
  const [selectOption, setSelectOption] = useState(null)
  const [valueName, setValueName] = useState(options[0].name)
  const optionValue = useRef()
  const isInside = useRef(false)

  const clickValue = useCallback(
    (value) => {
      setSelectOption(value)
      setValueName(value)
    },
    [setSelectOption, setValueName]
  )

  useEffect(() => {
    setValue(name, valueName)
  }, [valueName])

  useEffect(() => {
    const handleClickOutside = () => {
      if (!isInside.current) {
        setIsShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [])

  const handleToggleDropDown = useCallback(() => {
    setIsShow(!isShow)
  }, [isShow])

  const handleMouseEnter = useCallback(() => {
    isInside.current = true
  }, [isInside])

  const handleMouseLeave = useCallback(() => {
    isInside.current = false
  }, [isInside])

  return (
    <>
      <div className='flex flex-col gap-[10px] items-start'>
        <div className='w-[182px] h-[40px]'>
          <div
            onClick={handleToggleDropDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='w-full h-full relative cursor-pointer'
          >
            <div className='h-full border-[1px] border-[#AFAFAF] rounded-[4px] flex justify-between items-center px-[10px]'>
              {valueName}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 29 26'
                fill='none'
                className={isShow ? 'rotate-180' : ''}
              >
                <path
                  d='M17.2063 23.75C16.0035 25.8333 12.9965 25.8333 11.7937 23.75L0.968355 5C-0.234457 2.91667 1.26906 0.312497 3.67469 0.312497L25.3253 0.312499C27.7309 0.3125 29.2345 2.91667 28.0316 5L17.2063 23.75Z'
                  fill='#808080'
                />
              </svg>
            </div>
            <div className='w-[300px] border-[1px] rounded-[4px]'>
              <ul>
                <li className='flex justify-between items-center py-[6px] px-[8px] bg-[#E4E4E4]'>
                  <span className='text-[14px] font-bold'>ご職業</span>
                  <span className='text-[20px]'>×</span>
                </li>
                <li className='flex gap-[6px] border-b-[1px] py-[10px] pl-[8px]'>
                  <span className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='24'
                      viewBox='0 0 30 24'
                      fill='none'
                    >
                      <path
                        d='M3 12.8182L12.1034 21L27 3'
                        stroke='#2F48AF'
                        stroke-width='5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                    自営業
                  </span>
                </li>
              </ul>
            </div>
            {/* {isShow && (
              <div className='absolute left-0 w-[182px] py-[4px] border-[1px] border-[#AFAFAF] flex flex-col rounded-[4px]'>
                {options.map((option) => {
                  return (
                    <>
                      <button
                        key={option.id}
                        className={`w-full text-left pl-[16px] py-[8px] bg-white hover:bg-slate-200 border-l-[4px] hover:border-l-[4px] hover:border-[#2F48AF] 
                        ${
                          selectOption === option.name
                            ? 'border-l-[4px] border-[#2F48AF]'
                            : 'border-transparent'
                        }`}
                        value={option.name}
                        onClick={() => clickValue(option.name)}
                      >
                        {option.name}
                      </button>
                    </>
                  )
                })}
              </div>
            )} */}
          </div>
        </div>
        <input
          ref={optionValue}
          {...register}
          placeholder='value'
          className='border-1 hidden'
        />
      </div>
    </>
  )
}

export default DropDown

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  register: PropTypes.object.isRequired,
  validateRules: PropTypes.shape({
    dropdown: PropTypes.any,
  }),
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

DropDown.defaultProps = {
  name: '参拝',
}
