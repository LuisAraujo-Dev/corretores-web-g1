
export interface Carrier {
    id: number;
    name: string;
    logoUrl: string; 
}

export const carriersData: Carrier[] = [
    { id: 1, name: "Porto Seguro", logoUrl: "PS" },
    { id: 2, name: "Bradesco Seguros", logoUrl: "BS" },
    { id: 3, name: "SulAmérica", logoUrl: "SA" },
    { id: 4, name: "Allianz", logoUrl: "AZ" },
    { id: 5, name: "Itaú Seguros", logoUrl: "IS" },
    { id: 6, name: "Tokio Marine", logoUrl: "TM" },
    { id: 7, name: "HDI Seguros", logoUrl: "HDI" },
    { id: 8, name: "Mapfre", logoUrl: "MF" },
    { id: 9, name: "Liberty Seguros", logoUrl: "LB" },
    { id: 10, name: "Azul Seguros", logoUrl: "AS" },
    { id: 11, name: "Caixa Seguradora", logoUrl: "CS" },
    { id: 12, name: "MetLife", logoUrl: "ML" },
];