// ENUM
import { ReactNode } from "react";

export enum eNavList {
    // DEFAULT = '',
    POPULAR = '인기 갓챠', // 인기 갓차
    LATEST = '최신 갓챠', // 최근
    // TYPE = '제품별',
    EVENT = '이벤트 갓챠', // 할인
    // RANDOM = '랜덤 갓챠',
    FIND = '구해줘 갓챠', //필요한 갓챠
    SOON = '입고예정 갓챠' // 곧 입고예정
}



// TYPE
export interface iDefaultInterface {
    onChange?: (params?: any) => void;
    onClear?: (params?: any) => void;
    onBlur?: (params?: any) => void;
    onBack?: (params?: any) => void;
    onClick?: (params?: any) => void;
    onClose?: (params?: any) => void;
    onPress?: (params?: any) => void;
    visible?: boolean;
    children ?: ReactNode;

}