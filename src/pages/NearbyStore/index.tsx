import type React from "react";

import { useState, useEffect } from "react";
import {
    NearbyStoreContainer,
    Header,
    SearchBar,
    Content,
    MapSection,
    MapPlaceholder,
    StoreListSection,
    StoreListHeader,
    FilterSection,
    FilterButton,
    StoreList,
    StoreCard,
    StoreHeader,
    StoreInfo,
    StoreRating,
    NoStores,
    LoadingIndicator,
    CurrentLocationButton,
} from "./NearbyStore.styled";
import { Search, User, Bell, MapPin, Map, Clock, Phone, Star, Inbox, Loader, Crosshair } from "lucide-react";

// Define the Store type
interface Store {
    id: string;
    name: string;
    address: string;
    distance: number; // in meters
    rating: number;
    reviewCount: number;
    openingHours: string;
    phone: string;
    latitude: number;
    longitude: number;
    category: string;
}

// Sample data for demonstration
const sampleStores: Store[] = [
    {
        id: "1",
        name: "가챠 월드 - 신주쿠점",
        address: "도쿄도 신주쿠구 가부키초 1-23-45",
        distance: 350,
        rating: 4.7,
        reviewCount: 128,
        openingHours: "10:00 - 22:00",
        phone: "+81-3-1234-5678",
        latitude: 35.6938,
        longitude: 139.7034,
        category: "가챠",
    },
    {
        id: "2",
        name: "캡슐 토이 파라다이스",
        address: "도쿄도 시부야구 도겐자카 2-34-56",
        distance: 750,
        rating: 4.5,
        reviewCount: 96,
        openingHours: "11:00 - 23:00",
        phone: "+81-3-2345-6789",
        latitude: 35.6598,
        longitude: 139.6998,
        category: "토이",
    },
    {
        id: "3",
        name: "아키하바라 가챠 센터",
        address: "도쿄도 치요다구 소토칸다 3-45-67",
        distance: 1200,
        rating: 4.8,
        reviewCount: 215,
        openingHours: "09:00 - 21:00",
        phone: "+81-3-3456-7890",
        latitude: 35.7022,
        longitude: 139.7741,
        category: "가챠",
    },
    {
        id: "4",
        name: "토이 컬렉션 - 이케부쿠로점",
        address: "도쿄도 토시마구 히가시이케부쿠로 4-56-78",
        distance: 1800,
        rating: 4.3,
        reviewCount: 72,
        openingHours: "10:30 - 20:30",
        phone: "+81-3-4567-8901",
        latitude: 35.7295,
        longitude: 139.7109,
        category: "토이",
    },
    {
        id: "5",
        name: "가챠가챠 스테이션",
        address: "도쿄도 미나토구 롯폰기 5-67-89",
        distance: 2300,
        rating: 4.6,
        reviewCount: 154,
        openingHours: "11:00 - 22:00",
        phone: "+81-3-5678-9012",
        latitude: 35.6628,
        longitude: 139.7315,
        category: "가챠",
    },
];

// Filter categories
const categories = ["전체", "가챠", "토이", "피규어", "카드", "기타"];

const NearbyStorePage = () => {
    const [stores, setStores] = useState<Store[]>([]);
    const [filteredStores, setFilteredStores] = useState<Store[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    // Simulate loading stores
    useEffect(() => {
        const timer = setTimeout(() => {
            setStores(sampleStores);
            setFilteredStores(sampleStores);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Filter stores based on category and search query
    useEffect(() => {
        let result = [...stores];

        // Filter by category
        if (selectedCategory !== "전체") {
            result = result.filter((store) => store.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (store) => store.name.toLowerCase().includes(query) || store.address.toLowerCase().includes(query),
            );
        }

        // Sort by distance
        result.sort((a, b) => a.distance - b.distance);

        setFilteredStores(result);
    }, [stores, selectedCategory, searchQuery]);

    // Handle category filter change
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Format distance for display
    const formatDistance = (meters: number) => {
        return meters < 1000 ? `${meters}m` : `${(meters / 1000).toFixed(1)}km`;
    };

    // Render stars for rating
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star key={i} size={14} fill={i <= rating ? "currentColor" : "none"}
                      strokeWidth={i <= rating ? 0 : 2}/>,
            );
        }
        return stars;
    };

    return (
        <NearbyStoreContainer>
            <Header>
                <SearchBar>
                    <Search size={18} className="search-icon"/>
                    <input type="text" placeholder="매장명, 주소 검색" value={searchQuery} onChange={handleSearchChange}/>
                </SearchBar>


            </Header>

            <Content>
                <MapSection>
                    <MapPlaceholder>


                    </MapPlaceholder>

                    <CurrentLocationButton aria-label="현재 위치로">
                        <Crosshair size={20}/>
                    </CurrentLocationButton>
                </MapSection>

                <StoreListSection>
                    <StoreListHeader>
                        <h2>주변 매장</h2>
                        <p>{filteredStores.length}개의 매장이 검색되었습니다</p>
                    </StoreListHeader>

                    <FilterSection>
                        {categories.map((category) => (
                            <FilterButton
                                key={category}
                                active={selectedCategory === category}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </FilterButton>
                        ))}
                    </FilterSection>

                    <StoreList>
                        {loading ? (
                            <LoadingIndicator>
                                <Loader size={32} className="spinner"/>
                                <p>매장 정보를 불러오는 중...</p>
                            </LoadingIndicator>
                        ) : filteredStores.length > 0 ? (
                            filteredStores.map((store) => (
                                <StoreCard key={store.id}>
                                    <StoreHeader>
                                        <h3>{store.name}</h3>
                                        <span className="distance">{formatDistance(store.distance)}</span>
                                    </StoreHeader>

                                    <StoreInfo>
                                        <p>
                                            <MapPin size={16}/>
                                            {store.address}
                                        </p>
                                        <p>
                                            <Clock size={16}/>
                                            {store.openingHours}
                                        </p>
                                        <p>
                                            <Phone size={16}/>
                                            {store.phone}
                                        </p>
                                    </StoreInfo>

                                    <StoreRating>
                                        <div className="stars">{renderStars(store.rating)}</div>
                                        <span>
                      {store.rating} ({store.reviewCount})
                    </span>
                                    </StoreRating>
                                </StoreCard>
                            ))
                        ) : (
                            <NoStores>
                                <Inbox size={32}/>
                                <h3>검색 결과가 없습니다</h3>
                                <p>다른 검색어나 필터를 시도해보세요</p>
                            </NoStores>
                        )}
                    </StoreList>
                </StoreListSection>
            </Content>
        </NearbyStoreContainer>
    );
};

export default NearbyStorePage;