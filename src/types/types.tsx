// ENUM
export enum eNavList {
    DEFAULT = '',
    Popular = '인기 갓챠',
    Latest = '최신 갓챠',
    ByProduct = '제품별',
    Event = '이벤트 갓챠',
    Random = '랜덤 갓챠',
    HelpMe = '구해줘 갓챠',
    ComingSoon = '입고예정 갓챠',
    AlmostIn = '입고 임박 갓챠',
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

}