

export interface PropsTypes {
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
}

export default function CustomImage(props: PropsTypes) {
    return (
        <img src={props.src} alt={props.alt} width={props.width} height={props.height} data-testid="image" />
    );
}