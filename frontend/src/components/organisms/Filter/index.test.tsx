import { screen, render, fireEvent } from "@testing-library/react";
import { Filter } from ".";
describe("Filter component testcases", () => {
  const handleShowAllChangeMock = jest.fn();
  beforeEach(() => {
    render(
      <Filter
        isCandidatesFilter={true}
        handleShowAllChange={handleShowAllChangeMock}
        isCandidateFilterOpen={true}
        isAdverseActionFilterOpen={false}      />
    );
  });

  it("Filter component renders as expected", () => {
    const filter = screen.getByTestId("candidateFilter");
    expect(filter).toBeInTheDocument();
  });
  it("checkbox work as expected", () => {
    const allStatusCheckbox = screen.getByRole("checkbox", {
      name: "All Status",
    });
    fireEvent.click(allStatusCheckbox);
    expect(handleShowAllChangeMock).toHaveBeenCalled();
  });
  it("renders adverse action filter corectly", () => {
    render(<Filter isCandidatesFilter={false} isCandidateFilterOpen={false} isAdverseActionFilterOpen={true}/>);
    const element = screen.getByTestId("adverseActionFilter");
    expect(element).toBeInTheDocument();
  });
});
