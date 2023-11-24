import { useState } from 'react';

function ShoppingList({ add }) {
    const [bucket, setBucket] = useState({ product: "", quantity: 0 })
    const enter = (evt) => {
        setBucket((oldBucket) => {
            return {
                ...oldBucket,
                [evt.target.name]: evt.target.value
            }
        })
    }
    const send = (e) => {
        e.preventDefault();
        add(bucket)
        setBucket({ product: "", quantity: 0 });
    }
    return (
        <>
            <form onSubmit={send}>
                <label htmlFor="product">Enter Product</label>
                <input
                    type="text"
                    placeholder='Product name'
                    name='product'
                    id='product'
                    onChange={enter}
                    value={bucket.product}
                />
                <label htmlFor="quantity">Enter Quantity</label>
                <input
                    type="text"
                    placeholder='Product size'
                    name='quantity'
                    id='quantity'
                    onChange={enter}
                    value={bucket.quantity}
                />
                <button>Submit</button>
            </form>
        </>
    )
}
export default ShoppingList;