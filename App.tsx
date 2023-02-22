import { useState, useCallback } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { ClickButton, Row } from './src/components'
import calculator, { initialState, State } from './src/util/calculator'

const App = () => {
  const [state, setState] = useState<State>(initialState)

  const handleTap = useCallback((type: string, value: string | number) => {
    const valueString = typeof value === 'number' ? String(value) : value
    setState((prevState) => calculator(type, valueString, prevState))
  }, [])

  return (
    <View className='flex-1 justify-end bg-[#202020] px-2'>
      <SafeAreaView>
        <View className='items-end pr-4 pb-4'>
          <Text className='text-white text-6xl font-bold'>
            {parseFloat(state.currentValue).toLocaleString()}
          </Text>
        </View>

        <Row>
          <ClickButton
            text='C'
            theme='secondary'
            onPress={() => handleTap('clear', '')}
          />
          <ClickButton
            text='+/-'
            theme='secondary'
            onPress={() => handleTap('posneg', '')}
          />
          <ClickButton
            text='%'
            theme='secondary'
            onPress={() => handleTap('percentage', '')}
          />
          <ClickButton
            text='/'
            theme='accent'
            onPress={() => handleTap('operator', '/')}
          />
        </Row>

        <Row>
          <ClickButton text='7' onPress={() => handleTap('number', '7')} />
          <ClickButton text='8' onPress={() => handleTap('number', '8')} />
          <ClickButton text='9' onPress={() => handleTap('number', '9')} />
          <ClickButton
            text='X'
            theme='accent'
            onPress={() => handleTap('operator', '*')}
          />
        </Row>

        <Row>
          <ClickButton text='5' onPress={() => handleTap('number', '5')} />
          <ClickButton text='6' onPress={() => handleTap('number', '6')} />
          <ClickButton text='7' onPress={() => handleTap('number', '7')} />
          <ClickButton
            text='-'
            theme='accent'
            onPress={() => handleTap('operator', '-')}
          />
        </Row>

        <Row>
          <ClickButton text='1' onPress={() => handleTap('number', '1')} />
          <ClickButton text='2' onPress={() => handleTap('number', '2')} />
          <ClickButton text='3' onPress={() => handleTap('number', '3')} />
          <ClickButton
            text='+'
            theme='accent'
            onPress={() => handleTap('operator', '+')}
          />
        </Row>

        <Row>
          <ClickButton text='0' onPress={() => handleTap('number', '0')} />
          <ClickButton text='.' onPress={() => handleTap('number', '.')} />
          <ClickButton
            text='='
            theme='primary'
            onPress={() => handleTap('equal', '=')}
          />
        </Row>
      </SafeAreaView>
    </View>
  )
}

export default App
