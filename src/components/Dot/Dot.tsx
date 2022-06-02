type Props = JSX.IntrinsicElements["div"];

const Dot: React.FC<Props> = ({ color, className, ...rest }) => {
    const c = "w-3 h-3 rounded-full " + className;
    return <div {...rest} className={c} />;
};

export default Dot;
