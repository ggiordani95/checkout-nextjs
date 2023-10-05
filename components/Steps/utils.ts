
import Confirmation from "./Confirmation";
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
}

export enum Step {
    Personal = 1,
    Shipping = 2,
    Confirmation = 3,
}

export const steps: Array<TSteps> = [
    {
        id: Step.Personal,
        component: React.createElement(Personal),
        button_text: 'Confirmar email',
    },
    {
        id: Step.Shipping,
        component: React.createElement(Shipping),
        button_text: 'Pagar R$250,00',
    },
    {
        id: Step.Confirmation,
        component: React.createElement(Confirmation),
        button_text: null,
    }
]

export const countryOptions = [
    { code: "br", name: "Brasil", flag: "/flags/brazil.png" },
];