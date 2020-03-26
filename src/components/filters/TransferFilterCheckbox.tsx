import React, { ReactElement } from 'react'

interface Props {
    title: string
    value: any
}

export default function TransferFilterCheckbox({ title, value }: Props): ReactElement {
    return (
        <div className="checkbox">
            <input id={"checkbox-" + value} type="checkbox" />
            <label htmlFor={"checkbox-" + value}>{title}</label>
        </div>
    )
}
