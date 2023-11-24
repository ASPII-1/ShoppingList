import { useState } from 'react';
import { useForm } from 'react-hook-form';

function ValidList({ add }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" })

    const send = (e) => {
        add(e)
    }

    const Options = {
        product: {
            required: "Required",
            minLength:
            {
                value: 3,
                message: "Size must be greater then 2"
            }
        },
        quantity: {
            required: "Required",
            min:
            {
                value: 1,
                message: "Size must be greater then 0"
            }
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(send)}>
                <label htmlFor="product">Enter Product</label>
                <input
                    type="text"
                    placeholder='Product name'
                    name='product'
                    id='product'
                    {...register("product", Options.product)}
                />
                <small>
                    {errors.product && errors.product.message}
                </small>
                <label htmlFor="quantity">Enter Quantity</label>
                <input
                    type="number"
                    placeholder='Product size'
                    name='quantity'
                    id='quantity'
                    {...register("quantity", Options.quantity)}
                />
                <small>
                    {errors.quantity && errors.quantity.message}
                </small>
                <button>Submit</button>
            </form>
        </>
    )
}
export default ValidList;