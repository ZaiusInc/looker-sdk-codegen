/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React from 'react'
import styled from 'styled-components'
import { Code, Paragraph, Table, CodeBlock } from '@looker/components'

/**
 * Common styled components used by DocMarkdown
 */

export const MDCode = styled(Code)`
  background-color: ${({ theme }) => theme.colors.ui1};
  border: 1px solid ${({ theme }) => theme.colors.ui2};
  border-radius: 4px;
`
MDCode.defaultProps = {
  fontSize: 'small',
  mb: 'large',
  pl: 'xxsmall',
  pr: 'xxsmall',
}

// Temp fix for release build failure
export const MDCodeBlock = styled(CodeBlock)`
  max-width: 800px;
`
MDCodeBlock.defaultProps = {
  fontSize: 'small',
  mb: 'large',
}

export const MDParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.text5};
  max-width: 600px;
`
MDParagraph.defaultProps = {
  mb: 'large',
}

const OListInternal = styled.ol`
  max-width: 600px;
  margin-bottom: 20px;
`

const UListInternal = styled.ul`
  max-width: 600px;
  margin-bottom: 20px;
`

export const MDList: React.FC<any> = ({ ordered, ...rest }) => {
  return ordered ? <OListInternal {...rest} /> : <UListInternal {...rest} />
}

export const MDListItem = styled.li`
  max-width: 600px;
  margin-bottom: 4px;
`

export const MDTable = styled(Table)``
MDTable.defaultProps = { mb: 'large' }
