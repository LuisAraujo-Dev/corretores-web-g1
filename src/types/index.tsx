import type { LucideIcon } from "lucide-react";

export interface CorretoraInfo {
  nome: string;
  telefone: string;
}

export interface CardDeOfertaProps {
  nomeProduto: string;
  IconComponent: LucideIcon;
  info: string;
  linkWhatsapp: string;
}

export interface SectionProps {
  id: string;
}