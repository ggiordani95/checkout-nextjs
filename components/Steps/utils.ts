import Personal from "./Personal";
import Shipping from "./Shipping"
import React from 'react'

// Array que coordena números dos steps

const stepValues = [0, 1, 2] as const;

// Tipagem do state steps

export type StepValue = typeof stepValues[number];

// Components que cada step vai retornar

type TSteps = {
    id: number,
    component: React.ReactNode
    button_text: string | null
}

export const steps: Array<TSteps> = [
    {
        id: 1,
        component: React.createElement(Personal),
        button_text: 'Confirmar email'
    },
    {
        id: 2,
        component: React.createElement(Shipping),
        button_text: 'Pagar R$250,00'
    },
    {
        id: 3,
        component: null,
        button_text: null
    }
]

export const countryOptions = [
    { code: "br", name: "Brasil", flag: "/flags/brazil.png" },
];