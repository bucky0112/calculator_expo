import { ClickButton } from "../src/components"
import { render, fireEvent } from "@testing-library/react-native"

describe("ClickButton", () => {
  it("should render correctly", () => {
    const { toJSON } = render(<ClickButton />)
    expect(toJSON()).toMatchSnapshot()
  })

  it("should call onPress when clicked", () => {
    const onPress = jest.fn()
    const { getByTestId } = render(<ClickButton onPress={onPress} />)
    fireEvent.press(getByTestId("click-button"))
    expect(onPress).toHaveBeenCalled()
  })
})
