import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatCurrency, isEmpty } from "../../common/util";
import {
    ProductContainer,
    ProductHeader,
    ProductImageGallery,
    MainImage,

    ProductInfo,
    ProductTitle,
    ProductPrice,
    ProductActions,
    ActionButton,

    ProductContent,
    ProductDescription,
    RelatedProductsSection,
    RelatedProductsTitle,
    RelatedProductsGrid,

    Badge,
    ProductRating,
    QuantitySelector,
    QuantityButton,
    QuantityInput,
    Divider,
    DeliveryInfo,
    DeliveryOption,
    SellersListTitle,
    SellersListContainer,
    SellerHeader,
    SellerHeaderItem,
    SellerItem,
    SellerBodyItem,
    SellersListBox, SellersList, SellersListMap, SellersHint,
} from "./Product.styled";


// @ts-ignore
import CustomCard from "../../components/Card/CustomCard";
// @ts-ignore
import image1 from "../../assets/images/Gotchas/001-sanrio-characters.jpeg";
// @ts-ignore
import image2 from "../../assets/images/Gotchas/002-shinchan-machibouke.jpeg";
// @ts-ignore
import image3 from "../../assets/images/Gotchas/003-shinchan-camping.jpeg";
// @ts-ignore
import image4 from "../../assets/images/Gotchas/005-shinchan-oyasumika.jpeg";
// @ts-ignore
import image5 from "../../assets/images/Gotchas/006-shinchan-sanrio.jpeg";

import { Calendar, Heart, MapPin, Star } from "lucide-react";

// Mock data for demonstration
const productData = {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.7,
    reviews: 243,
    location: "Official Brand Store",
    images: ["/product-main.jpg", "/product-angle1.jpg", "/product-angle2.jpg", "/product-detail.jpg"],
    description: `Experience crystal-clear sound with our Premium Wireless Headphones. 
  Featuring the latest Bluetooth 5.2 technology, these headphones provide seamless 
  connectivity up to 10 meters. The ergonomic design ensures comfort during extended 
  listening sessions, while the premium materials guarantee durability.
  
  The built-in noise cancellation technology blocks out ambient noise, allowing you 
  to focus on your music or calls. With up to 30 hours of battery life, you can enjoy 
  your favorite tunes all day long.`,
    specifications: [
        { label: "Brand", value: "SoundMaster" },
        { label: "Model", value: "SM-WH200" },
        { label: "Connectivity", value: "Bluetooth 5.2" },
        { label: "Battery Life", value: "30 hours" },
        { label: "Charging Time", value: "2 hours" },
        { label: "Weight", value: "250g" },
        { label: "Warranty", value: "1 year" },
    ],
    productDetails: [
        { name: "총 품종", value: "7" },
        { name: "제작사", value: "반다이남코코리아" },
    ],
    // New sellers data
    sellers: [
        {
            id: "seller1",
            name: "전자랜드 종로점",
            address: "서울특별시 종로구 종로 123",
            price: 99000,
            updatedAt: "2023-04-15",
            phone: "02-123-4567",
        },
        {
            id: "seller2",
            name: "오디오 전문가",
            address: "서울특별시 강남구 테헤란로 456",
            price: 105000,
            updatedAt: "2023-04-18",
            phone: "02-987-6543",
        },
        {
            id: "seller3",
            name: "할인전자",
            address: "부산광역시 해운대구 센텀중앙로 789",
            price: 89000,
            updatedAt: "2023-04-12",
            phone: "051-234-5678",
        },
        {
            id: "seller4",
            name: "프리미엄 사운드샵",
            address: "대전광역시 서구 둔산로 101",
            price: 110000,
            updatedAt: "2023-04-20",
            phone: "042-321-8765",
        },
        {
            id: "seller5",
            name: "뮤직앤모어",
            address: "대구광역시 수성구 음악길 202",
            price: 96000,
            updatedAt: "2023-04-17",
            phone: "053-456-7890",
        },
        {
            id: "seller6",
            name: "테크 창고",
            address: "인천광역시 연수구 가젯로 303",
            price: 92500,
            updatedAt: "2023-04-19",
            phone: "032-678-1234",
        },
    ],
    relatedProducts: [
        { id: "2", name: "Wireless Earbuds", price: 79.99, image: "/related-product1.jpg" },
        { id: "3", name: "Headphone Stand", price: 24.99, image: "/related-product2.jpg" },
        { id: "4", name: "Bluetooth Speaker", price: 59.99, image: "/related-product3.jpg" },
        { id: "5", name: "Audio Cable", price: 12.99, image: "/related-product4.jpg" },
    ],
};


const cardArrayList = [
    {
        id: "card-9",
        image: image1,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-8",
        image: image2,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-7",
        image: image3,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },
    {
        id: "card-6",
        image: image4,
        title: "산리오 친구들-산리오 친구들(산리오 친구들)산리오 친구들산리오 친구들",
        price: "9000",
        desc: "테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다.테스트 카드입니다."
    },

];

type iProductPage = {}

const ProductPage = () => {
    const { productNo } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("description");
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (isEmpty(productNo)) {
            navigate("/");
            return;
        }

    }, [productNo, navigate]);

    const handleQuantityChange = (value: number) => {
        if (value >= 1) {
            setQuantity(value);
        }
    };

    const handleImageChange = (index: number) => {
        setActiveImage(index);
    };

    return (
        <ProductContainer>
            <ProductHeader>
                <ProductImageGallery>
                    <MainImage src={image1} alt={productData.name}
                               onClick={() => window.open(image1, "_blank", "width=1000,height=800,scrollbars=yes,resizable=yes")}/>

                    <Divider/>

                    <DeliveryInfo>
                        <h4>상품 정보</h4>
                        {productData.productDetails.map((detail, index) => (
                            <DeliveryOption key={index}>
                                <h5>{detail.name}</h5>
                                <p>{detail?.value}</p>
                            </DeliveryOption>
                        ))}
                    </DeliveryInfo>
                </ProductImageGallery>

                <ProductInfo>
                    <ProductTitle>{productData.name}</ProductTitle>
                    <ProductRating>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                fill={i < Math.floor(productData.rating) ? "#FFD700" : "#D1D5DB"}
                                color={i < Math.floor(productData.rating) ? "#FFD700" : "#D1D5DB"}
                            />
                        ))}
                        <span>{productData.rating}</span>
                        <span className="reviews">({productData.reviews} reviews)</span>
                    </ProductRating>


                    <Divider/>

                    <ProductPrice>
                        <Badge>
                            <Heart color="white" fill="white"/>
                            <span style={{ color: "white", fontSize: '1rem' }}>LIKE</span>
                        </Badge>

                        <span className="price ">최저가: {formatCurrency(productData.discountPrice.toFixed(2))}</span>
                    </ProductPrice>

                    <Divider/>

                    <DeliveryInfo>
                        <h4>상점 최저가</h4>
                        <SellersListContainer>
                            <SellerHeader>
                                <SellerHeaderItem flex={1}>상호명</SellerHeaderItem>
                                <SellerHeaderItem flex={1}>가격</SellerHeaderItem>
                                <SellerHeaderItem flex={1}>수정일자</SellerHeaderItem>
                            </SellerHeader>

                            {productData.sellers.map((seller) => (
                                <SellerItem key={seller.id}>
                                    <SellerBodyItem flex={"1"} color={"#333"}>{seller.name}</SellerBodyItem>
                                    <SellerBodyItem flex={"1"}
                                                    color={"#e53935"}>{formatCurrency(seller.price)}</SellerBodyItem>
                                    <SellerBodyItem flex={"1"} color={"#888"}>{seller.updatedAt}</SellerBodyItem>
                                </SellerItem>
                            ))}
                        </SellersListContainer>
                    </DeliveryInfo>
                </ProductInfo>
                <Divider/>
            </ProductHeader>


            <Divider/>

            <ProductContent>
                <SellersList>
                    <SellersListTitle>판매점 상세보기</SellersListTitle>

                    <SellersListBox>
                        <SellersListContainer>
                            <SellerHeader>
                                <SellerHeaderItem flex={1}>상호명</SellerHeaderItem>
                                <SellerHeaderItem flex={2}>주소</SellerHeaderItem>
                                <SellerHeaderItem flex={1}>번호</SellerHeaderItem>
                                <SellerHeaderItem flex={1}>가격</SellerHeaderItem>
                                <SellerHeaderItem flex={1}>수정일자</SellerHeaderItem>
                            </SellerHeader>

                            {productData.sellers.map((seller) => (
                                <SellerItem key={seller.id}>
                                    <SellerBodyItem flex={"1"} color={"#333"}>{seller.name}</SellerBodyItem>
                                    <SellerBodyItem flex={"2"} color={"#666"}>{seller.address}</SellerBodyItem>
                                    <SellerBodyItem flex={"1"} color={"#666"}>{seller.phone}</SellerBodyItem>
                                    <SellerBodyItem flex={"1"}
                                                    color={"#e53935"}>{formatCurrency(seller.price)}</SellerBodyItem>
                                    <SellerBodyItem flex={"1"} color={"#888"}>{seller.updatedAt}</SellerBodyItem>
                                </SellerItem>
                            ))}
                        </SellersListContainer>
                        <SellersListMap/>
                    </SellersListBox>

                    <SellersHint>
                        위에 소개된 판매점마다 상황이 다를 수 있어서, 방문하시기 전에 한 번 전화로 재고를 확인해보시는 걸 추천드려요!
                    </SellersHint>

                </SellersList>
            </ProductContent>

            <ProductContent>
                <ProductDescription>
                    <MainImage src={image1} alt="" style={{ width: '200px', height: "200px", alignSelf: "center" }}/>
                    가챠 상품은 특성상 검품후 출고가 불가하여 제조사 문제로 인한 교환은 기본적으로 불가합니다.
                    <br/>
                    하자의 경우 발송후 2주내에 Q&A에 관련내용을 남겨주시기 바랍니다.
                </ProductDescription>
            </ProductContent>


            <RelatedProductsSection>
                <RelatedProductsTitle>관련 상품</RelatedProductsTitle>


                <RelatedProductsGrid>
                    {
                        cardArrayList.map((card, index) => (
                            <CustomCard key={index} image={card.image} title={card.title} price={card.price}
                                        desc={card.desc} onClick={() => {
                            }}/>
                        ))
                    }
                </RelatedProductsGrid>
            </RelatedProductsSection>
        </ProductContainer>
    );
};

export default ProductPage;
