import { secondsToTimerFormat } from 'secondsToTimerFormat'

interface FeedProps {
    notificationFeed: {notificationHeading: string, subtext: string, time: number}[]
}

export const Feed = (props: FeedProps) => {
    return (
        <div className="feed">
            <h1>Notifications</h1>
            {[...props.notificationFeed].reverse().map(
                n => <Notification timeOfNotification={n.time} notificationHeading={n.notificationHeading} subtext={n.subtext}></Notification>
            )}
        </div>
    )
}

interface NotificationProps {
    notificationHeading: string
    subtext: string
    timeOfNotification: number
}

export const Notification = (props: NotificationProps ) => {
    return (
        <div className="notification">
            <h1>{props.notificationHeading}</h1>
            <p className="notification-subtext">{props.subtext}</p>
            <p className="notification-time">{secondsToTimerFormat(props.timeOfNotification)}</p>
        </div>
    )
}