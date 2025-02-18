import { ReactElement } from "react";
import moment from "moment";
import './post.scss'

interface PostProps {
    imageUrl: string;
    postedBy: string;
    createdAt: moment.Moment;
    message: string;
}

export const Post = ({ imageUrl, postedBy, createdAt, message }: PostProps): ReactElement  => {
    const formattedDate = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');
    return (
        (<div className="post">
            <img className="post--image" src={imageUrl} />
            <div className="post-container">
                <div className="post--author">{postedBy}</div>
                <div className="post--date">{formattedDate}</div>
                <div className="post--message">{message}</div>
            </div>
        </div>)
    );
}