import { useState } from 'react';
import ShoppingList from './ShoppingList';
import { v4 as uuid } from 'uuid'
import ValidList from './validList';
export default function Shopping() {
    const [item, SetItem] = useState([])
    const add = (bucket) => {
        SetItem((items) => {
            return (
                [...items,
                { ...bucket, id: uuid() }
                ]
            )
        })
    }
    return (
        <>
            <h1>Shopping List</h1>
            <ul>
                {
                    item.map((i) => (
                        <li key={i.id}>{i.product}-{i.quantity}</li>
                    ))
                }
            </ul>
            <ValidList add={add} />
        </>
    )
}