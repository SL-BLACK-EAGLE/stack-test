

export interface Data {
    skuid: number;
    skunumber: string;
    skuprice: number;
    skuenabled: boolean;
    skuqtyonorder: number;
    skuavailableindays: number;
    skuimageurl: string;
    skuweight: number;
    skuavailableitems: number;
    skulastmodified: string;
    skucreated: string;
    skuretailprice: number;
    skufeatures: string;
    skuname_enGB: string;
    skushortdescription_enGB: string;
    skudescription_enGB: string;
    skunumbersonparts: string;
    skualtcode: string;
    skupath: string;
    oems: {
        name: string;
        partnumbers: string;
        keywords: string;
    }[];
    machineTypes: {
        name: string;
        description: string;
        model: string;
    }[];
    manufacturers: {
        name: string;
        partnumbers: string;
        keywords: string;
    }[];

}

export interface ItemCardContainerProps {
    imgSrc: string;
    title?: string;
    availableItems?: number;
    data?: Data;
    oems?: Oems[];
    machineTypes?: MachineTypes[];
    manufacturers?: Manufacturers[];
}


export interface MainData{
    oems?: Oems[];
    products?: Products[];
    machineTypes?: MachineTypes[];
    manufacturers?: Manufacturers[];
}

export interface Products{
    skuid: number;
    skunumber: string;
    skuprice: number;
    skuenabled: boolean;
    skuqtyonorder: number;
    skuavailableindays: number;
    skuimageurl: string;
    skuweight: number;
    skuavailableitems: number;
    skulastmodified: Date;
    skucreated: Date;
    skuretailprice: number;
    skufeatures: string;
    skuname_enGB: string;
    skushortdescription_enGB: string;
    skudescription_enGB: string;
    skunumbersonparts: string;
    skualtcode: string;
    skupath: string;
}

export interface Oems {
    id: number;
    skuid: number;
    name: string;
    partnumbers: string;
    keywords: string;
}

export interface MachineTypes {
    id: number;
    skuid: number;
    name: string;
    description: string;
    model: string;
}

export interface Manufacturers {
    id: number;
    skuid: number;
    name: string;
    partnumbers: string;
    keywords: string;
}