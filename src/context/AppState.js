import React, { useEffect, useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import AppContext from './AppContext'
import { AppReducer } from './AppReducer'
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

const AppState = ({ children }) => {
  const [windowLoaded, setWindowLoaded] = useState(false)
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    window.addEventListener('load', () => {
      setWindowLoaded(true)
      console.log('loaded')
    })
    return () =>
      window.addEventListener('load', () => {
        setWindowLoaded(false)
        console.log('not-loaded')
      })
  }, [])

  const onOpen = (drawer) => {
    dispatch({ type: OPEN_DRAWER, payload: drawer })
  }
  const onClose = (drawer) => {
    dispatch({ type: CLOSE_DRAWER, payload: drawer })
  }
  const closeAll = () => {
    dispatch({ type: CLOSE_ALL_DRAWERS })
  }
  const setCurrentScroll = (payload) => {
    dispatch({ type: CURRENT_SCROLL, payload })
  }

  const exports = {
    /* Window loaded */
    windowLoaded,
    /* States */
    bancosDrawer: state.bancosDrawer,
    sidebarDrawer: state.sidebarDrawer,
    currentScroll: state.currentScroll,
    ubicanosDrawer: state.ubicanosDrawer,
    /* Functions */
    onOpen,
    onClose,
    closeAll,
    setCurrentScroll
  }

  return <AppContext.Provider value={exports}>{children}</AppContext.Provider>
}

AppState.propTypes = {
  children: PropTypes.node
}

export default AppState
