import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from '../services/hooks'
import {useNavigate} from 'react-router-dom'
import React, {FC} from 'react';

export const ProfileFavorites:FC = () => {
    const { isLoggedIn } = useSelector((state) => state.system);
    const { username } = useSelector((state) => state.profile);
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn){
            navigate('/')
        }
    }, [isLoggedIn])
    return (
        <ul className="nav nav-pills outline-active">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    to={`${username}`}>
                    My Articles
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link active"
                    to={`/${username}/favorites`}>
                    Favorited Articles
                </Link>
            </li>
        </ul>
    )
}

export default ProfileFavorites