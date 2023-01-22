import cls from './EditableSpan.module.scss'
import { FC, useState } from 'react'
import { TextField } from '@mui/material'

interface Props {
  todoTitle: string
  className?: string
}

export const EditableSpan: FC<Props> = ({ todoTitle, className }) => {
  const [showInput, setShowInput] = useState(false)

  const content = showInput ? (
    <TextField
      onBlur={() => {
        setShowInput(false)
      }}
      autoFocus={true}
      style={{ width: '100%' }}
      variant='standard'
      color='secondary'
    />
  ) : (
    <h2>{todoTitle.slice(0, 14)}</h2>
  )

  return (
    <div
      onClick={() => setShowInput(true)}
      className={`${cls.EditableSpan} ${className}`}
    >
      {content}
    </div>
  )
}
