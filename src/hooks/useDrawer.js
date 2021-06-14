import { useContext } from 'react'
import AppContext from '../context/AppContext'

const useDrawer = () => {
  const context = useContext(AppContext)
  return context
}

export default useDrawer
