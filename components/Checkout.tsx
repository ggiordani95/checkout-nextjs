'use client'
import React, { useState } from 'react'
import CheckoutSteps from './Steps/CheckoutSteps'
import { StepValue, steps } from './Steps/utils'


export default function Checkout() {

  const [currentStep, setCurrentStep] = useState<StepValue>(2)  

  return (
    <section className="p-24 w-full shadow-md rounded-lg">
        <CheckoutSteps/>
        {steps && steps.find(step => step.id === currentStep)?.component}
    </section>
  )
}