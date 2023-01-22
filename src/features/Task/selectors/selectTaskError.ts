import { RootState } from '../../../store/store'

export const selectTaskError = (state: RootState) => state.task.error
