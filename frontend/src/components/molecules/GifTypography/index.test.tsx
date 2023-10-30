import { render, screen } from '@testing-library/react';
import GifTypography from '.';

describe('GifTypography component', () => {
    const mockProps = {
        gifTypographyLabel: 'Test Label',
        gifSrc: 'test-image.jpg',
    };

    it('renders the component with the provided label and image', () => {
        render(<GifTypography {...mockProps} />);
        const imageElement = screen.getByAltText('test-image') as HTMLImageElement;
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.src).toContain(mockProps.gifSrc);
        const typographyElement = screen.getByText('Test Label');
        expect(typographyElement).toBeInTheDocument();
    });

});
