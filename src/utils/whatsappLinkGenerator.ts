import type { CorretoraInfo } from "../types/index.js";

export const generateWhatsappLink = (telefone: string, mensagem: string): string => {
    if (!telefone || !mensagem) {
        console.error("Telefone ou mensagem ausentes para gerar o link do WhatsApp.");
        return "https://wa.me/"; 
    }
    const encodedMessage = encodeURIComponent(mensagem);
    return `https://wa.me/${telefone}?text=${encodedMessage}`;
};

export const CORRETORA_INFO: CorretoraInfo = {
    nome: "Corretora Digital Pro",
    telefone: "5561998765432" 
};