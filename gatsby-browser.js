import 'hiq/dist/hiq.min.css'
import 'normalize.css'
import React from 'react'

import LoadingWrapper from './src/components/loading-wrapper'

export const wrapPageElement = ({ element, props }) => (
  <LoadingWrapper {...props}>{element}</LoadingWrapper>
)
