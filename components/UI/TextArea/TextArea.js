'use client'

export const TextArea = ({ assignment, label, register, errors, dirtyFields, required }) => {

    return (
        <div className='form__item'>
            <div className={errors
                ? `form__input ${'error__border'}`
                : 'form__input'}>
                <textarea
                    rows={3}
                    cols={33}
                    id={assignment}
                    autoComplete="off"
                    {...register(`${assignment}`)}
                />
                <label
                    htmlFor={assignment}
                    className={errors
                        ? (dirtyFields
                            ? 'form__input-small error__text'
                            : 'form__input-big error__text')
                        : (dirtyFields
                            ? 'form__input-small'
                            : 'form__input-big ')}>
                    {label}
                    {required
                        ? <span className='form__required-star'>*</span>
                        : null
                    }
                </label>

                {errors && <span className="form__input-error ">{errors?.message || "Error!"}</span>}
            </div>
        </div>
    )
}
