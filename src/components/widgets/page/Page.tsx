import { ChildProps } from "../../../types/PropTypes";
import classes from "./Page.module.scss";

export const Page = ({ children }: ChildProps) => {
    return (
        <div className={classes.page}>
            <div className={classes.block} />
            {children}
        </div>
    );
}