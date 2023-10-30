import { render, fireEvent } from '@testing-library/react';
import ButtonAtom from '.';


describe('ButtonAtom component', () => {
  test('renders button with provided text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<ButtonAtom buttonText={buttonText} buttonColor={''} buttonWidth={0} buttonHeight={0} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies provided variant to button', () => {
    const buttonVariant = 'contained';
    const { container } = render(<ButtonAtom buttonVariant={buttonVariant} buttonColor={''} buttonText={''} buttonWidth={0} buttonHeight={0} />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass(`MuiButton-${buttonVariant}`);
  });

  test('triggers onClick callback when button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<ButtonAtom buttonText="Click me" onClick={onClick} buttonColor={''} buttonWidth={0} buttonHeight={0} />);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('applies provided color to button', () => {
    const buttonColor = 'red';
    const { container } = render(<ButtonAtom buttonColor={buttonColor} buttonText={''} buttonWidth={0} buttonHeight={0} />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveStyle(`color: ${buttonColor}`);
  });

  test('applies provided width and height to button', () => {
    const buttonWidth = 200;
    const buttonHeight = 50;
    const { container } = render(<ButtonAtom buttonWidth={buttonWidth} buttonHeight={buttonHeight} buttonColor={''} buttonText={''} />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveStyle(`width: ${buttonWidth}px`);
    expect(buttonElement).toHaveStyle(`height: ${buttonHeight}px`);
  });

  test('applies provided background color to button', () => {
    const backgroundColor = 'blue';
    const { container } = render(<ButtonAtom backgroundColor={backgroundColor} buttonColor={''} buttonText={''} buttonWidth={0} buttonHeight={0} />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  test('applies provided border to button', () => {
    const buttonBorder = '1px solid black';
    const { container } = render(<ButtonAtom buttonBorder={buttonBorder} buttonColor={''} buttonText={''} buttonWidth={0} buttonHeight={0} />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveStyle(`border: ${buttonBorder}`);
  });

  test('applies provided border radius to button', () => {
    const borderRadius = 5;
    const { container } = render(<ButtonAtom bordeRadius={borderRadius} buttonColor={''} buttonText={''} buttonWidth={0} buttonHeight={0} />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveStyle(`border-radius: ${borderRadius}px`);
  });

});
