import { ReactElement } from "react";
import moment from "moment";

interface PostProps {
    imageUrl: string;
    postedBy: string;
    createdAt: moment.Moment;
    message: string;
}

export const Post = ({ imageUrl, postedBy, createdAt, message }: PostProps): ReactElement  => {
    const formattedDate = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');
    return (
        (<div>
            <div><img src={imageUrl} /></div>
            <div>{postedBy}</div>
            <div>{formattedDate}</div>
            <div>{message}</div>
        </div>)
    );
}