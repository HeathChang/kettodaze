import styled from "styled-components";
import { ImgHTMLAttributes } from "react";

export const HomeBannerContainer = styled.div`
    width: 100%;
    height: auto;
    background-color:  ${({ theme }) => theme.colors.blueGrey05};
`;

export const HomeBannerImage = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
    height: 400px;
    width: 1000px;
    min-width: 1000px;
`;