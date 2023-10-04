import Personal from "./Personal";
import Shipping from "./Shipping"
import React from 'react'

const stepValues = [0, 1, 2] as const;

export type StepValue = typeof stepValues[number];

export type StepProps = {
    isCurrentApproved: (isStepApproved: boolean) => void;
}

export type TSteps = {
    id: number,
    component: React.ReactNode | null,
    button_text: string | null,
    validInputs: boolean
}

export const steps: Array<TSteps> = [
    {
        id: 1,
        component: React.createElement(Personal),
        button_text: 'Confirmar email',
        validInputs: true,
    },
    {
        id: 2,
        component: React.createElement(Shipping),
        button_text: 'Pagar R$250,00',
        validInputs: true
    },
    {
        id: 3,
        component: null,
        button_text: null,
        validInputs: false
    }
]

export const countryOptions = [
    { code: "br", name: "Brasil", flag: "/flags/brazil.png" },
];