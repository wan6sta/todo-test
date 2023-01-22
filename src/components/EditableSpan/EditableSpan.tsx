import cls from './EditableSpan.module.scss'
import { FC, useState } from 'react'
import { TextField } from '@mui/material'

interface Props {
  todoTitle: string
  className?: string
  callback?: (str: string) => void
}

export const EditableSpan: FC<Props> = ({ todoTitle, className, callback }) => {
  const [showInput, setShowInput] = useState(false)
  const [newTitle, setNewTitle] = useState(todoTitle)

  const content = showInput ? (
    <TextField
      onBlur={() => {
        if (!newTitle || !callback) return
        callback(newTitle)
        setShowInput(false)
      }}
      value={newTitle}
      onChange={e => setNewTitle(e.currentTarget.value)}
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
