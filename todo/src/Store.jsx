import {createContext} from 'react'
import { Provider } from 'react-redux'

const StoreContex = createContext()

export const Provider = ({store, children}) => {
   <StoreContex value={store}>
    {children}
   </StoreContex>
}

export const useDispatch = (action) => {

}