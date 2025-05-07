import { ContentBody, ContentHeader, EmptyState } from "../MyPage.styled";
import { FileText } from "lucide-react";
import type React from "react";
import { iDefaultInterface } from "../../../types/types";

interface iReviewPage extends iDefaultInterface {

}

const ReviewsPage = (props: iReviewPage) => {
    return (
        <>
            <ContentHeader>
                <h2>내 리뷰</h2>
                <p>작성한 리뷰 목록입니다.</p>
            </ContentHeader>
            <ContentBody>
                <EmptyState>
                    <FileText size={48}/>
                    <h3>작성한 리뷰가 없습니다</h3>
                    <p>방문한 매장에 리뷰를 작성해보세요!</p>
                </EmptyState>
            </ContentBody>
        </>
    );
}


export default ReviewsPage;