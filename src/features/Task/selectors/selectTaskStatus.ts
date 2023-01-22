import { RootState } from '../../../store/store'

export const selectTaskStatus = (state: RootState) => state.task.status
