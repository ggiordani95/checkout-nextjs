export type INameInputInput = {
    title?: string;
    placeholder?: string;
    confirmed: (e:boolean) => void;
};

export type TIsError = {
    message: boolean;
    valid: boolean;
};
