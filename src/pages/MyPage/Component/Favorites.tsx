import {
    ContentBody,
    ContentHeader, EmptyState,
    ItemCard, ItemCategory,
    ItemGrid,
    ItemImage,
    ItemInfo,
    ItemName,
    ItemPrice
} from "../MyPage.styled";
import { Heart } from "lucide-react";
import type React from "react";
import { iDefaultInterface } from "../../../types/types";


interface iFavorites extends iDefaultInterface {
    favoriteItems: any[];
}

const Favorites  = (props: iFavorites) => {
    return (
        <>
            <ContentHeader>
                <h2>좋아요 아이템</h2>
                <p>내가 좋아요한 아이템 목록입니다.</p>
            </ContentHeader>
            <ContentBody>
                {props.favoriteItems.length > 0 ? (
                    <ItemGrid>
                        {props.favoriteItems.map((item) => (
                            <ItemCard key={item.id}>
                                <button
                                    className="favorite-button"
                                    onClick={props.onClick}
                                    aria-label="좋아요 취소"
                                >
                                    <Heart size={16} fill="currentColor" />
                                </button>
                                <ItemImage>
                                    {/*<Image*/}
                                    {/*    src={item.image || "/placeholder.svg"}*/}
                                    {/*    alt={item.name}*/}
                                    {/*    fill*/}
                                    {/*    style={{ objectFit: "cover" }}*/}
                                    {/*/>*/}
                                </ItemImage>
                                <ItemInfo>
                                    <ItemName>{item.name}</ItemName>
                                    <ItemPrice>{item.price}</ItemPrice>
                                    <ItemCategory>{item.category}</ItemCategory>
                                </ItemInfo>
                            </ItemCard>
                        ))}
                    </ItemGrid>
                ) : (
                    <EmptyState>
                        <Heart size={48} />
                        <h3>좋아요한 아이템이 없습니다</h3>
                        <p>관심있는 아이템을 찾아 하트를 눌러보세요!</p>
                    </EmptyState>
                )}
            </ContentBody>
        </>
    )
}

export default Favorites