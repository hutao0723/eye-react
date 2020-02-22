import * as React from "react";
import "@/assets/svg"
import "./style.less"
import { classNames } from "@/untils"

interface props extends React.HTMLAttributes<HTMLElement> {
    type:string
}

const Icon:React.FunctionComponent<props> = (props) => {
    const { type, className, ...restProp } = props;
    return (
        <i className={ classNames("eye-icon",className)}  {...restProp}>
            <svg >
                <use xlinkHref="#loading" />
            </svg>
        </i>   
    )
}

export default Icon;