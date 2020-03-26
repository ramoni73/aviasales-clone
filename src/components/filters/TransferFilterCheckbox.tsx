import React, { ReactElement } from 'react'

interface Props {
    title: string
}

export default function TransferFilterCheckbox({ title }: Props): ReactElement {
    return (
        <div>
            <input type="checkbox" /> {title}
        </div>
    )
}
