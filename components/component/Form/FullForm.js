'use client'

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input, TextArea } from '@/components/index'

import { arrowRight } from '@/public/icons/arrows';

import './fullForm.scss';

const fullSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min(2, 'Minimum 2 characters')
        .max(60, 'Maximum 60 characters'),
    phone: yup
        .string()
        .required()
        .matches(/^[+]{0,1}380([0-9]{9})$/, 'The phone number must be +38 (XXX) XXX - XX - XX'),
    email: yup
        .string()
        .min(2, 'Minimum 2 characters')
        .max(60, 'Maximum 60 characters')
        .required()
        .matches(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/, 'The email must be a valid email address.'),
    subject: yup
        .string()
        .min(2, 'Minimum 2 characters')
        .max(60, 'Maximum 60 characters'),
    message: yup
        .string()
        .required()
        .min(2, 'Minimum 2 characters')
        .max(500, 'Maximum 60 characters'),
})

export const FullForm = () => {

    const [form, setForm] = useState([])

    const {
        register,
        setValue,
        getValues,
        formState: {
            errors,
            isValid,
            dirtyFields
        },
        handleSubmit,
        reset
    } = useForm(
        {
            defaultValues: {
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: ""
            },
            mode: "onChange",
            resolver: yupResolver(fullSchema)
        }
    )

    const formSubmit = () => {
        setForm(getValues())
        reset();
    }

    useEffect(() => {
        console.log(form);
    }, [form])

    return (
        <form
            className='form form__contacts'
            onSubmit={handleSubmit(formSubmit)}
        >
            <Input
                label='Имя'
                assignment='name'
                errors={errors?.name}
                register={register}
                dirtyFields={dirtyFields.name}
                required={false}
            />

            <Input
                label='Номер телефона'
                assignment='phone'
                errors={errors?.phone}
                register={register}
                dirtyFields={dirtyFields.phone}
                required={true}
            />

            <Input
                label='E-mail'
                assignment='email'
                errors={errors?.email}
                register={register}
                dirtyFields={dirtyFields.email}
                required={true}
            />

            <Input
                label='Интересующий товар/услуга'
                assignment='subject'
                errors={errors?.subject}
                register={register}
                dirtyFields={dirtyFields.subject}
                required={false}
            />

            <TextArea
                label='Сообщение'
                assignment='message'
                errors={errors?.message}
                register={register}
                dirtyFields={dirtyFields.message}
                required={true}
            />

            <div className='submit__first submit__first-contacts'>
                <p className='form-text'>
                    Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
                </p>

                <button
                    id="btn"
                    type='submit'
                    className='btn btn-black '
                    onClick={formSubmit}
                    disabled={!isValid}
                    aria-label='button'
                >
                    <span id='dark'></span>
                    <span className='btn-text'>
                        {'oтправить'.toUpperCase()}
                        {arrowRight}
                    </span>
                </button>

            </div>
        </form>
    )
}

