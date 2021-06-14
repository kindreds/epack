import { useContext } from 'react'
import AppContext from '../context/AppContext'

const useScroll = () => {
  const { setCurrentScroll, currentScroll } = useContext(AppContext)
  return { setCurrentScroll, currentScroll }
}

export default useScroll
