import {
  Dimensions,
  Text,
  TouchableOpacity,
  TextProps,
  TouchableOpacityProps,
  StyleSheet
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

const screen = Dimensions.get('window')
const buttonWidth = screen.width / 4

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#ffc107",
  },
});
