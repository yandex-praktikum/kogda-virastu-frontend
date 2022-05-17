import { Navigate, useLocation  } from 'react-router-dom';
import { jwt } from '../services/api';
import { useSelector } from '../services/hooks';

export const ProtectedRoute = ({ children,  ...rest }:any) => {
    const location = useLocation()
    const isLogin  =  useSelector((state) => state.system.isLoggedIn && !!state.profile.username) && jwt.test();
    return ((isLogin) ? children : <Navigate replace to= "/login" state={location.pathname}/>
    )};
export default ProtectedRoute