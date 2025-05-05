import {
    ActivityContent,
    ActivityItem,
    ActivityList,
    ActivityTime,
    ContentBody,
    ContentHeader, EmptyState
} from "../MyPage.styled";
import { Clock } from "lucide-react";
import type React from "react";
import { iDefaultInterface } from "../../../types/types";

interface iActivityPage extends iDefaultInterface{
    recentActivities: any[];
}


const ActivityPage = (props: iActivityPage) => {
    return (
        <>
            <ContentHeader>
                <h2>최근 활동</h2>
                <p>최근 활동 내역을 확인할 수 있습니다.</p>
            </ContentHeader>
            <ContentBody>
                {props.recentActivities.length > 0 ? (
                    <ActivityList>
                        {props.recentActivities.map((activity) => (
                            <ActivityItem key={activity.id}>
                                <div className="icon">{activity.icon}</div>
                                <ActivityContent>
                                    <h4>{activity.title}</h4>
                                    <p>{activity.description}</p>
                                </ActivityContent>
                                <ActivityTime>{activity.time}</ActivityTime>
                            </ActivityItem>
                        ))}
                    </ActivityList>
                ) : (
                    <EmptyState>
                        <Clock size={48}/>
                        <h3>최근 활동 내역이 없습니다</h3>
                        <p>매장을 방문하거나 아이템에 좋아요를 눌러보세요!</p>
                    </EmptyState>
                )}
            </ContentBody>
        </>
    );
}


export default ActivityPage;