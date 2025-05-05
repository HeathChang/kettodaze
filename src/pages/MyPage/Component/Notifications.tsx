import { iDefaultInterface } from "../../../types/types";
import {
    ContentBody,
    ContentHeader, EmptyState, NotificationActions,
    NotificationContent,
    NotificationHeader,
    NotificationItem,
    Tab,
    TabGroup
} from "../MyPage.styled";
import { Bell } from "lucide-react";
import type React from "react";

interface iNotificationsPage extends iDefaultInterface {
    activeTab: string;
    setActiveTab: (params: string) => void;
    notifications: any[];

    onClick: ({ flag, id }: any) =>  void;
}

const NotificationsPage = (props: iNotificationsPage) => {
    return (
        <>
            <ContentHeader>
                <h2>알림</h2>
                <p>중요한 알림과 업데이트를 확인할 수 있습니다.</p>
            </ContentHeader>
            <TabGroup>
                <Tab active={props.activeTab === "all"} onClick={() => props.setActiveTab("all")}>
                    전체
                </Tab>
                <Tab active={props.activeTab === "unread"} onClick={() => props.setActiveTab("unread")}>
                    읽지 않음
                </Tab>
            </TabGroup>
            <ContentBody>
                {props.notifications.length > 0 ? (
                    props.notifications
                        .filter((notification) => (props.activeTab === "unread" ? notification.unread : true))
                        .map((notification) => (
                            <NotificationItem key={notification.id}
                                              className={notification.unread ? "unread" : ""}>
                                <NotificationHeader>
                                    <h4>{notification.title}</h4>
                                    <span className="time">{notification.time}</span>
                                </NotificationHeader>
                                <NotificationContent>{notification.content}</NotificationContent>
                                <NotificationActions>
                                    {notification.unread && (

                                        <button onClick={() => props.onClick?.({flag: true, id: notification.id})}>읽음
                                            표시</button>
                                    )}
                                    <button onClick={() => props.onClick?.( {flag: false, id: notification.id})}>삭제
                                    </button>
                                </NotificationActions>
                            </NotificationItem>
                        ))
                ) : (
                    <EmptyState>
                        <Bell size={48}/>
                        <h3>알림이 없습니다</h3>
                        <p>새로운 알림이 오면 여기에 표시됩니다.</p>
                    </EmptyState>
                )}
            </ContentBody>
        </>
    );
};

export default NotificationsPage;