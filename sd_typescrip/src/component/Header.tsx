// Function Component

import React from 'react'

interface Props {
    name: string;
}

const Header:React.FC<Props> = (props: Props) => {
    return (
        <div>
             <h1>Hello, {props.name}</h1>
        </div>
    )
}
Header.defaultProps={
    name: "Huan",
}
export default Header
