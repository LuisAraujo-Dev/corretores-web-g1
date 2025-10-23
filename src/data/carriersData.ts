import PortoSeguroLogo from '../images/porto-seguro.avif';

export interface Carrier {
    id: number;
    name: string;
    logoUrl: string;
    logoImg: string;
}

export const carriersData: Carrier[] = [
    { id: 1, name: "Porto Seguro", logoUrl: "PS", logoImg: PortoSeguroLogo },
    { id: 2, name: "Bradesco Seguros", logoUrl: "BS", logoImg: "PLACEHOLDER" },
    { id: 3, name: "SulAmérica", logoUrl: "SA", logoImg: "PLACEHOLDER" },
    { id: 4, name: "Allianz", logoUrl: "AZ", logoImg: "PLACEHOLDER" },
    { id: 5, name: "Itaú Seguros", logoUrl: "IS", logoImg: "PLACEHOLDER" },
    { id: 6, name: "Tokio Marine", logoUrl: "TM", logoImg: "PLACEHOLDER" },
    { id: 7, name: "HDI Seguros", logoUrl: "HDI", logoImg: "PLACEHOLDER" },
    { id: 8, name: "Mapfre", logoUrl: "MF", logoImg: "PLACEHOLDER" },
    { id: 9, name: "Liberty Seguros", logoUrl: "LB", logoImg: "PLACEHOLDER" },
    { id: 10, name: "Azul Seguros", logoUrl: "AS", logoImg: "PLACEHOLDER" },
    { id: 11, name: "Caixa Seguradora", logoUrl: "CS", logoImg: "PLACEHOLDER" },
    { id: 12, name: "MetLife", logoUrl: "ML", logoImg: "PLACEHOLDER" },
];