import {
  CLOSE_ALL_DRAWERS,
  CLOSE_DRAWER,
  CURRENT_SCROLL,
  OPEN_DRAWER
} from './types'

const initialState = {
  currentScroll: '',
  bancosDrawer: false,
  sidebarDrawer: false,
  ubicanosDrawer: false
}

export const AppReducer = (state, { payload, type }) => {
  switch (type) {
    case OPEN_DRAWER:
      return {
        ...initialState,
        [payload]: true,
        currentScroll: state.currentScroll
      }
    case CLOSE_DRAWER:
      return {
        ...initialState,
        [payload]: false,
        currentScroll: state.currentScroll
      }

    case CLOSE_ALL_DRAWERS:
      return { ...initialState, currentScroll: state.currentScroll }

    case CURRENT_SCROLL:
      return { ...initialState, currentScroll: payload }

    default:
      return state
  }
}
