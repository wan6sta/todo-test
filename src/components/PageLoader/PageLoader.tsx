import { LinearProgress } from '@mui/material'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectIsLoading } from '../../features/Task/selectors/selectIsLoading'

export const PageLoader = () => {
  const isLoading = useAppSelector(selectIsLoading)

  if (isLoading) {
    return (
      <div className='loader'>
        <LinearProgress color='secondary' />
      </div>
    )
  }

  return null
}
