import { useEffect, useState } from 'react'
import { UserModel } from '../../../../src/models/api/userModel.ts'
import { useParams } from 'react-router-dom';
import './userdetails.scss'

export const UserDetails = () => {
    const [userdata, setUserdata] = useState<UserModel|null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/users/${id}`)
            .then(response => response.json())
            .then(data => setUserdata(data))
            .catch(error => {
                setError(true);
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
        }
    }, [id])

    if (error) {
        return (<div>Service is temporarily unavailable. Please, try later. </div>)
    }

    if (isLoading) {
        return (<div>User details are loading...</div>)
    }
    
    return (<> {userdata
        ?<div className="user-details">
            <div style={{backgroundImage: `url(${userdata.coverImageUrl})`}} className="user-details--coverimage">
                <div className="user-details--profile">
                    <img src={userdata.profileImageUrl} className="user-details--avatar" />
                    <div className="user-details--name-container">
                        <div className="user-details--name">{userdata.name}</div>
                        <div className="user-details--username">{userdata.username}</div>
                        <div className="user-details--email">{userdata.email}</div>
                    </div>
                </div>
            </div>
        </div>
        : <div className="user-details">Information about this user is unavailable</div>
    }</>)
}
