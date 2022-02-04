import React from "react"
import { createGlobalStyle } from "styled-components"
import { GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = createGlobalStyle({
  body: {
    margin: 0
  }
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles