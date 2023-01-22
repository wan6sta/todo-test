import { FC } from 'react'
import { EditableSpan } from '../EditableSpan/EditableSpan'

interface Props {
  todoTitle: string
}

export const EditTitle: FC<Props> = ({ todoTitle }) => {
  return <EditableSpan todoTitle={todoTitle} />
}
