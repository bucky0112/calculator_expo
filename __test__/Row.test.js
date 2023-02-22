import { Row } from "../src/components/Row"
import { render } from "@testing-library/react-native"

describe("Row", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<Row />)
    expect(toJSON()).toMatchSnapshot()
  })
})
