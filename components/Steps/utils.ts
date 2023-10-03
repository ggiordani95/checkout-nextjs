import ShippingInfo from "./ShippingInfo"
import React, { SetStateAction } from 'react'

// Array que coordena números dos steps

const stepValues = [0, 1, 2] as const;

// Tipagem do state steps

export type StepValue = typeof stepValues[number];

// Components que cada step vai retornar

type TSteps = {
    id: number,
    component: React.ReactNode
}

export const steps: Array<TSteps> = [
    {
        id: 1,
        component: React.createElement(ShippingInfo)
    },
    {
        id: 2,
        component: React.createElement(ShippingInfo)
    },
    {
        id: 3,
        component: null 
    }
]

export const countryOptions = [
    { code: "br", name: "Brasil", flag: "/flags/brazil.png" },

];