import { SearchByTitle, SearchContainer, SearchResultItems } from "./SearchPage.styled";
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CustomCard from "../../components/Card/CustomCard";
import { cardArrayList } from "../../dummy/data";


const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const searchBy = searchParams.get('searchBy');
    const navigate = useNavigate();

    // MOUNTED::
    useEffect(() => {
        const fetchData = async () => {};

        fetchData();




    }, [searchBy]);

    return (
        <SearchContainer>
            <SearchByTitle>

            </SearchByTitle>
            <SearchResultItems>
                {
                    cardArrayList.map((card, index) => (
                        <CustomCard key={index} image={card.image} title={card.title} price={card.price}
                                    desc={card.desc} onClick={() => navigate(`/product/${card.id}`)}/>
                    ))
                }
            </SearchResultItems>
        </SearchContainer>
    )
}

export default  SearchPage;