import { screen,fireEvent, render } from '@testing-library/react';
import CandidateInfoHeader from '.';
import exportIcon from "../../../../public/assets/images/export.svg";
import backIcon from "../../../../public/assets/images/Back.svg";
import { ENGAGE_BTN_LABEL, EXPORT_BUTTON_LABEL, MANUALORDER, PRE_ADVERSE_ACTION_BUTTON_LABEL } from '../../../constants';

describe('CandidateInfoHeader', () => {
    it('should render without errors', () => {
        render(<CandidateInfoHeader />);
    });

    it('should display the header label correctly', () => {
        const headerLabel = 'Candidate Info';
        const { getByText } = render(<CandidateInfoHeader headerLabel={headerLabel} />);
        const headerElement = getByText(headerLabel);
        expect(headerElement).toBeInTheDocument();
    });

    it('should display the first button icon correctly when firstButtonIconSrc is provided', () => {
        const firstButtonIconSrc = exportIcon;
        const { getByAltText } = render(
            <CandidateInfoHeader secondaryButtonIconSrc={firstButtonIconSrc} secondaryButtonIconAltText="Export Icon" />
        );
        const firstButtonIconElement = getByAltText('Export Icon');
        expect(firstButtonIconElement).toBeInTheDocument();
    });

    it('should not display the first button icon when firstButtonIconSrc is not provided', () => {
        const { queryByAltText } = render(<CandidateInfoHeader />);
        const firstButtonIconElement = queryByAltText('Export Icon');
        expect(firstButtonIconElement).not.toBeInTheDocument();
    });

    it('should display the second button icon correctly when secondButtonIonSrc is provided', () => {
        const secondButtonIonSrc = exportIcon;
        const { getByAltText } = render(
            <CandidateInfoHeader primaryButtonIonSrc={secondButtonIonSrc} primaryButtonIconAltText="Add Box Icon" />
        );
        const secondButtonIconElement = getByAltText('Add Box Icon');
        expect(secondButtonIconElement).toBeInTheDocument();
    });

    it('should not display the second button icon when secondButtonIonSrc is not provided', () => {
        const { queryByAltText } = render(<CandidateInfoHeader />);
        const secondButtonIconElement = queryByAltText('Add Box Icon');
        expect(secondButtonIconElement).not.toBeInTheDocument();
    });

    it('should call onBackButtonClick when the back button is clicked', () => {
        const onBackButtonClick = jest.fn();
        const backButtonIcon = backIcon;
        const backButtonIconAltText = 'Back Icon';
        const { getByAltText } = render(
            <CandidateInfoHeader
                backButtonIcon={backButtonIcon}
                backButtonIconAltText={backButtonIconAltText}
                onBackButtonClick={onBackButtonClick}
            />
        );
        const backButton = getByAltText(backButtonIconAltText);
        fireEvent.click(backButton);
        expect(onBackButtonClick).toHaveBeenCalled();
    });
    it("onclick handlers work as expected", () => {
        const mockHandleEngage = jest.fn();
        const mockHandleAdverseAction = jest.fn();
        render(
          <CandidateInfoHeader
            handleEngage={mockHandleEngage}
            handlePreAdverseAcion={mockHandleAdverseAction}
            secondaryButtonLabel={PRE_ADVERSE_ACTION_BUTTON_LABEL}
            primaryButtonLabel={ENGAGE_BTN_LABEL}
          />
        );
        const preadvsereBtn = screen.getByRole("button", {
          name: "Pre-Adverse Action",
        });
        fireEvent.click(preadvsereBtn);
        expect(mockHandleAdverseAction).toHaveBeenCalled();
        const engageBtn = screen.getByRole("button", {
          name: "Engage",
        });
        fireEvent.click(engageBtn);
        expect(mockHandleEngage).toHaveBeenCalled();
    });
    it("onclick handlers work as expected", () => {
        const mockHandleExport = jest.fn();
        render(
          <CandidateInfoHeader
            handleExport={mockHandleExport}
            secondaryButtonLabel={EXPORT_BUTTON_LABEL}
          />
        );
        const exportBtn = screen.getByText(EXPORT_BUTTON_LABEL);
        expect(exportBtn).toBeInTheDocument();
        fireEvent.click(exportBtn);
        expect(mockHandleExport).toHaveBeenCalled();
    });
    it("onclick handlers work as expected", () => {
        render(
          <CandidateInfoHeader
          secondaryButtonLabel={EXPORT_BUTTON_LABEL}
          primaryButtonLabel={MANUALORDER}
          />
        );
        const exportBtn = screen.getByText(EXPORT_BUTTON_LABEL);
        expect(exportBtn).toBeInTheDocument();
        fireEvent.click(exportBtn);
    });
});
