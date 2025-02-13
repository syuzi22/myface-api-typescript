import { useEffect, useState } from 'react'
import { UserModel } from '../../../../src/models/api/userModel.ts'
import { useParams } from 'react-router-dom';

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
        ?<div>
            <div><img src={userdata.coverImageUrl}/></div>
            <div><img src={userdata.profileImageUrl}/></div>
            <div>{userdata.name}</div>
            <div>{userdata.username}</div>
            <div>{userdata.email}</div>
        </div>
        : <div>Information about this user is unavailable</div>
    }</>)
}
