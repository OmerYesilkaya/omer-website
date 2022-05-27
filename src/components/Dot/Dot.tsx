import cn from "classnames";

type Props = JSX.IntrinsicElements["div"];

const Dot: React.FC<Props> = ({ color, className, ...rest }) => {
    return <div {...rest} className={cn("w-3 h-3 rounded-full", className)} />;
};

export default Dot;
