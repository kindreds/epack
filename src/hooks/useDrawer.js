import { useContext } from 'react'
import AppContext from '../context/AppContext'

const useDrawer = () => {
  const {
    /* States */
    bancosDrawer,
    sidebarDrawer,
    currentScroll,
    ubicanosDrawer,
    /* Functions */
    onOpen,
    onClose,
    closeAll,
    setCurrentScroll
  } = useContext(AppContext)
  return {
    /* States */
    bancosDrawer,
    sidebarDrawer,
    currentScroll,
    ubicanosDrawer,
    /* Functions */
    onOpen,
    onClose,
    closeAll,
    setCurrentScroll
  }
}

export default useDrawer
