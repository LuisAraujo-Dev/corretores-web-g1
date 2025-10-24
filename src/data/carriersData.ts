import PortoSeguroLogo from '../images/porto-seguro.avif';
import BradescoSegurosLogo from '../images/Bradesco.avif';
import SulAmericaLogo from '../images/SULAMERICA.avif'
import AllianzLogo from '../images/allianz.webp'
import ItauLogo from '../images/ITAU.avif'
import TokioLogo from '../images/tokio.avif'
import HDILogo from '../images/HDI.avif'
import MafreLogo from '../images/MAFRE.png'
import ZurichLogo from '../images/ZURICH.avif'
import AlfaLogo from '../images/Alfa.avif'
import AzulLogo from '../images/Azul.avif'
import LibertyLogo from '../images/LIBERTY.avif'

export interface Carrier {
    id: number;
    name: string;
    logoUrl: string;
    logoImg: string;
}

export const carriersData: Carrier[] = [
    { id: 1, name: "Porto Seguro", logoUrl: "PS", logoImg: PortoSeguroLogo },
    { id: 2, name: "Bradesco Seguros", logoUrl: "BS", logoImg: BradescoSegurosLogo},
    { id: 3, name: "SulAmérica", logoUrl: "SA", logoImg: SulAmericaLogo },
    { id: 4, name: "Allianz", logoUrl: "AZ", logoImg: AllianzLogo },
    { id: 5, name: "Itaú Seguros", logoUrl: "IS", logoImg: ItauLogo },
    { id: 6, name: "Tokio Marine", logoUrl: "TM", logoImg: TokioLogo },
    { id: 7, name: "HDI Seguros", logoUrl: "HDI", logoImg: HDILogo },
    { id: 8, name: "Mapfre", logoUrl: "MF", logoImg: MafreLogo },
    { id: 9, name: "Liberty Seguros", logoUrl: "LB", logoImg: LibertyLogo },
    { id: 10, name: "Azul Seguros", logoUrl: "AS", logoImg: AzulLogo },
    { id: 11, name: "Alfa Seguros", logoUrl: "AF", logoImg: AlfaLogo },
    { id: 12, name: "Zurich", logoUrl: "ZC", logoImg: ZurichLogo },
];