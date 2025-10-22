import { createContext, type FC, type ReactNode, useState, useCallback, useContext } from "react";
import type { Product, ProductSegment } from "../types/index.js";
import { productsData } from "./productsData.js";
import { Shield } from 'lucide-react';

interface Promotion {
  produtoNome: string; 
  info: string;       
  IconComponent: Product['icon'];
}

interface AdminData {
  activePromotion: Promotion;
  productVisibility: Record<string, boolean>; 
}

interface AdminDataContextType {
  data: AdminData;
  updatePromotion: (promo: Promotion) => void;
  toggleProductVisibility: (productName: string, isVisible: boolean) => void;
  getVisibleProducts: () => ProductSegment[];
  getProductList: () => ProductSegment[];
}

const createInitialVisibility = (segments: ProductSegment[]): Record<string, boolean> => {
  const visibility: Record<string, boolean> = {};
  segments.forEach(segment => {
    segment.products.forEach(product => {
      visibility[product.name] = true;
    });
  });
  return visibility;
};


const defaultIcon = productsData[0]?.products[0]?.icon || Shield;

const INITIAL_DATA: AdminData = {
  activePromotion: {
    produtoNome: "Seguro Auto Completo", // Mock inicial
    info: "Cobertura total contra roubo, furto e colisão com assistência 24h.",
    IconComponent: defaultIcon,
  },
  productVisibility: createInitialVisibility(productsData),
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


  const value = {
    data,
    updatePromotion,
    toggleProductVisibility,
    getVisibleProducts,
    getProductList,
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