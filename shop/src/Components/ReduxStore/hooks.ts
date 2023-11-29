import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import { rootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<rootState> = useSelector;
