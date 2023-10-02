export type TCardNumber = {
    placeholder?: string;
    inputTailwind?: string;
    id: string;
};

export type CardType = {
    [key: string]: string;
  };

export const PIN_CARDS: CardType = {
    VISA: "4",
    MASTERCARD: "5",
};
