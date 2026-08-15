export const WHATSAPP_NUMBER = "+55 54 9220-1619";

export function waLink(message: string): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  nav: "Olá, Marjana! Gostaria de agendar uma sessão.",
  hero: "Olá, Marjana! Vi seu site e gostaria de agendar minha sessão.",
  metodo: "Olá, Marjana! Quero entender o Método RQE® e agendar uma sessão.",
  faq: "Olá, Marjana! Tenho uma dúvida sobre o processo antes de agendar.",
  footer: "Olá, Marjana! Gostaria de falar com você sobre o atendimento.",
} as const;
