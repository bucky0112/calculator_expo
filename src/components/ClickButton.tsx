import {
  Text,
  TouchableOpacity,
  TextProps,
  TouchableOpacityProps,
} from 'react-native'
import classNames from 'classnames'

type ClickButtonProps = TouchableOpacityProps & {
  text: string
  size?: 'double'
  theme?: 'primary' | 'secondary' | 'accent'
  textProps?: TextProps
}

const ClickButton = ({
  onPress,
  text,
  size,
  theme = 'primary',
  textProps,
  ...rest
}: ClickButtonProps) => {
  

  return (
    <TouchableOpacity
      onPress={onPress}
      className={classNames({
        "rounded-full flex-1 items-center justify-center m-2": true,
        "h-[84px]": true,
        "w-[84px]": true,
        'w-full': size === 'double',
        'bg-primary-btn': theme === 'primary',
        'bg-secondary-btn': theme === 'secondary',
        'bg-accent-btn': theme === 'accent'
      })}
      {...rest}
      testID='click-button'
    >
      <Text
        className={classNames({
          'text-3xl font-bold text-center': true,
          'text-white': theme === 'secondary' || theme === 'primary',
        })}
        {...textProps}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export { ClickButton }
