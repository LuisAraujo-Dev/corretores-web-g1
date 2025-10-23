import { Shield } from "lucide-react";
import { createContext, type FC, type ReactNode, useState, useCallback, useContext } from "react";
import type { Product, ProductSegment } from "../types/index.js";
import { carriersData, type Carrier } from "./carriersData.js";
import { productsData } from "./productsData.js";


interface Promotion {
  produtoNome: string; 
  info: string;        
  IconComponent: Product['icon'];
}

interface AdminData {
  activePromotion: Promotion;
  productVisibility: Record<string, boolean>; 
  carrierVisibility: Record<string, boolean>; 
}

interface AdminDataContextType {
  data: AdminData;
  updatePromotion: (promo: Promotion) => void;
  toggleProductVisibility: (productName: string, isVisible: boolean) => void;
  getVisibleProducts: () => ProductSegment[];
  getProductList: () => ProductSegment[];
  toggleCarrierVisibility: (carrierName: string, isVisible: boolean) => void; 
  getVisibleCarriers: () => Carrier[]; 
  getCarrierList: () => Carrier[]; 
}

const createInitialProductVisibility = (segments: ProductSegment[]): Record<string, boolean> => {
  const visibility: Record<string, boolean> = {};
  segments.forEach(segment => {
    segment.products.forEach(product => {
      visibility[product.name] = true;
    });
  });
  return visibility;
};

const createInitialCarrierVisibility = (carriers: Carrier[]): Record<string, boolean> => {
  const visibility: Record<string, boolean> = {};
  carriers.forEach(carrier => {
    visibility[carrier.name] = true; 
  });
  return visibility;
};

const defaultIcon = productsData[0]?.products[0]?.icon || Shield; 

const INITIAL_DATA: AdminData = {
  activePromotion: {
    produtoNome: "Seguro Auto Completo", 
    info: "Cobertura total contra roubo, furto e colisão com assistência 24h.",
    IconComponent: defaultIcon, 
  },
  productVisibility: createInitialProductVisibility(productsData),
  carrierVisibility: createInitialCarrierVisibility(carriersData), 
};

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

export const AdminDataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AdminData>(INITIAL_DATA);

  const updatePromotion = useCallback((promo: Promotion) => {
    setData(prev => ({
      ...prev,
      activePromotion: promo,
    }));
  }, []);
  
  const toggleProductVisibility = useCallback((productName: string, isVisible: boolean) => {
    setData(prev => ({
      ...prev,
      productVisibility: {
        ...prev.productVisibility,
        [productName]: isVisible,
      },
    }));
  }, []);

  const getVisibleProducts = useCallback((): ProductSegment[] => {
    return productsData.map(segment => ({
      ...segment,
      products: segment.products.filter(product => 
        data.productVisibility[product.name]
      ),
    })).filter(segment => segment.products.length > 0); 
  }, [data.productVisibility]);
  
  const getProductList = useCallback((): ProductSegment[] => productsData, []);

  
  const toggleCarrierVisibility = useCallback((carrierName: string, isVisible: boolean) => {
    setData(prev => ({
      ...prev,
      carrierVisibility: {
        ...prev.carrierVisibility,
        [carrierName]: isVisible,
      },
    }));
  }, []);

  const getVisibleCarriers = useCallback((): Carrier[] => {
    return carriersData.filter(carrier => 
        data.carrierVisibility[carrier.name]
    );
  }, [data.carrierVisibility]);
  
  const getCarrierList = useCallback((): Carrier[] => carriersData, []);


  const value = {
    data,
    updatePromotion,
    toggleProductVisibility,
    getVisibleProducts,
    getProductList,
    toggleCarrierVisibility, 
    getVisibleCarriers,
    getCarrierList,
  };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = () => {
  const context = useContext(AdminDataContext);
  if (context === undefined) {
    throw new Error('useAdminData deve ser usado dentro de um AdminDataProvider');
  }
  return context;
};