import { RFValue } from 'react-native-responsive-fontsize'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  width: 100%;
  padding: 18px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  background: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_dark};
  border-radius: 5px;

  margin-bottom: 8px;
`
