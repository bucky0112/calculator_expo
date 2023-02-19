import { View } from 'react-native'

type RowProps = {
  children: React.ReactNode;
};

const Row = ({ children, ...rest }: RowProps) => {
  return (
    <View className='flex-row items-center gap-1' {...rest}>
      {children}
    </View>
  )
}

export { Row }
