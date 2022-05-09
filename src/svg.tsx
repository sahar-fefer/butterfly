import React from 'react'
import './styles/svg.scss'

interface Props {
  color: string
}

export const DonateHart = (props: Props) => {
  return (
    <svg className='hart' xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
      <path fill={props.color ? `${props.color}` : "#ffffff"} fillRule="evenodd" d="M11.676 0c-2.65 0-3.775 1.76-3.775 1.76S6.778 0 4.126 0C1.88 0 0 1.76 0 3.849 0 8.65 7.901 12.5 7.901 12.5s7.902-3.849 7.902-8.651c0-2.09-1.88-3.849-4.127-3.849z" />
    </svg>
  )
}

export const Clock = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 12.83 12.83"
      viewBox="0 0 12.83 12.83"
      width="12.83px"
      height="12.83px"
    >
      <path
        fill="none"
        stroke="#4E4D4D"
        d="M12.33 6.42a5.92 5.92 0 01-5.92 5.92A5.92 5.92 0 01.49 6.42 5.92 5.92 0 016.41.5a5.92 5.92 0 015.92 5.92z"
      ></path>
      <path
        fill="none"
        stroke="#4E4D4D"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.55 2.47L6.55 6.42 8.66 8.52"
      ></path>
    </svg>
  )
}