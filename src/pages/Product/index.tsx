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
    SellerName,
    SellerAddress, SellerPrice, SellerDate, SellersListBox, SellersList, SellersListMap,
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
    deliveryOptions: [
        { name: "Standard Delivery", price: "Free", time: "3-5 business days" },
        { name: "Express Delivery", price: "$9.99", time: "1-2 business days" },
    ],
    // New sellers data
    sellers: [
        {
            id: "s1",
            name: "Electronics Superstore",
            address: "123 Main St, New York, NY 10001",
            price: 99.99,
            updatedAt: "2023-04-15",
        },
        {
            id: "s2",
            name: "Audio Experts",
            address: "456 Tech Blvd, San Francisco, CA 94107",
            price: 105.5,
            updatedAt: "2023-04-18",
        },
        {
            id: "s3",
            name: "Discount Electronics",
            address: "789 Budget Ave, Chicago, IL 60007",
            price: 89.99,
            updatedAt: "2023-04-12",
        },
        {
            id: "s4",
            name: "Premium Sound Shop",
            address: "101 Quality Rd, Boston, MA 02108",
            price: 109.99,
            updatedAt: "2023-04-20",
        },
        {
            id: "s5",
            name: "Music & More",
            address: "202 Melody Lane, Austin, TX 78701",
            price: 95.99,
            updatedAt: "2023-04-17",
        },
        {
            id: "s6",
            name: "Tech Warehouse",
            address: "303 Gadget St, Seattle, WA 98101",
            price: 92.5,
            updatedAt: "2023-04-19",
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
                    <MainImage src={image1} alt={productData.name}/>

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
                        <h4>상품 설명</h4>
                        {productData.deliveryOptions.map((option, index) => (
                            <DeliveryOption key={index}>
                                {/*<Truck size={16} />*/}
                                <div>
                                    <h5>{option.name}</h5>
                                    <p>
                                        {option.price} • {option.time}
                                    </p>
                                </div>
                            </DeliveryOption>
                        ))}
                    </DeliveryInfo>
                    <Divider/>
                </ProductInfo>
                <Divider/>
            </ProductHeader>



            <Divider/>


            <SellersList>
                <h4>근처 판매점</h4>

                <SellersListBox>
                    <SellersListContainer>
                        <SellerHeader>
                            <SellerHeaderItem style={{ flex: 2 }}>Store</SellerHeaderItem>
                            <SellerHeaderItem style={{ flex: 3 }}>Address</SellerHeaderItem>
                            <SellerHeaderItem style={{ flex: 1 }}>Price</SellerHeaderItem>
                            <SellerHeaderItem style={{ flex: 1 }}>Updated</SellerHeaderItem>
                        </SellerHeader>

                        {productData.sellers.map((seller) => (
                            <SellerItem key={seller.id}>
                                <SellerName>
                                    {seller.name}
                                </SellerName>
                                <SellerAddress>
                                    <MapPin size={14}/>
                                    {seller.address}
                                </SellerAddress>
                                <SellerPrice>${seller.price.toFixed(2)}</SellerPrice>
                                <SellerDate>
                                    <Calendar size={14}/>
                                    {seller.updatedAt}
                                </SellerDate>
                            </SellerItem>
                        ))}
                    </SellersListContainer>
                    <SellersListMap/>
                </SellersListBox>
            </SellersList>



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
                    {/*    {productData.relatedProducts.map((product) => (*/}
                    {/*        <RelatedProductCard key={product.id} onClick={() => navigate(`/product/${product.id}`)}>*/}
                    {/*            <RelatedProductImage*/}
                    {/*                src={`/placeholder.svg?height=200&width=200&query=electronics ${product.name}`}*/}
                    {/*                alt={product.name}*/}
                    {/*            />*/}
                    {/*            <RelatedProductName>{product.name}</RelatedProductName>*/}
                    {/*            <RelatedProductPrice>${product.price.toFixed(2)}</RelatedProductPrice>*/}
                    {/*        </RelatedProductCard>*/}
                    {/*    ))}*/}


                </RelatedProductsGrid>
            </RelatedProductsSection>
        </ProductContainer>
    );
};

export default ProductPage;
