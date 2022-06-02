import { Dot } from "components";
import { Props } from "./types";

const ListItem: React.FC<Props> = ({ color = "sky", children }) => {
    const className = `bg-${color}-500`;
    return (
        <div className="flex gap-x-2 items-center text-2xl">
            <Dot className={className} />
            {children}
        </div>
    );
};

export default ListItem;
