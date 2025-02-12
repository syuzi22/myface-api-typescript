import { useState, useEffect } from "react";
import { UserModel } from "../../../../src/models/api/userModel";
import { Link } from "react-router-dom";

interface UserListProps {
    setSelectedUserId: React.Dispatch<React.SetStateAction<number|null>>;
}

export const UserList = ({setSelectedUserId}: UserListProps) => {
    const [userlist, setUserlist] = useState<UserModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
    fetch(`http://localhost:3001/users/`)
        .then(response => response.json())
        .then(data => setUserlist(data.results))
        .catch(error => {
            setError(true);
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [])

    const handleUserClick = (id: number) => {
        setSelectedUserId(id);
    }

    if (error) {
        return (<div>Service is temporarily unavailable. Please, try later. </div>)
    }

    if (isLoading) {
        return (<div>User list is loading...</div>)
    }

    return (
        <ul>
            {userlist.map(({name, id}: UserModel, index: number) => {
                return (<li key={`userlist-${index}`} onClick= {() => handleUserClick(id)}>
                    <Link to="/userdetails">
                        {name}
                    </Link>
                </li>)
            })}
        </ul>
    )
}