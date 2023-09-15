import ShippingAddress from "./ShippingAddress"
import React from 'react'

const stepValues = [1, 2, 3] as const;

export type StepValue = typeof stepValues[number];

interface ISteps {
    id: number,
    component: React.ReactNode
}

export const steps: Array<ISteps> = [
    {
        id: 1,
        component: React.createElement(ShippingAddress)
    },
    {
        id: 2,
        component: React.createElement(ShippingAddress)
    },
    {
        id: 3,
        component: React.createElement(ShippingAddress)
    }
]
