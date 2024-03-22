import React from 'react'

const TextInputCustom = ({
    Textlabel,
    value,
    placeholder,
    classStyle,
    isRequired,
    handleChange,
    handleBlur,
    type,
    outlined,
    onBlur,
    leftIcon,
    onChangeText,
    boxWidth,
    borderColor,
    asterisksymbol,
    minimumDate,
    maximumDate,
    errorMessage,
    errorColor = 'red',
    bgColor = 'white',
}) => {
    return (
        <div>
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {Textlabel} {asterisksymbol ? <p className='text-red-700 inline'>*</p> : ""}
            </label>
            <input
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                type={type}
                name="email"
                id="email"
                className={`${classStyle} bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                placeholder={placeholder}
                // placeholder={placeholder ? placeholder : label ? `Enter ${label}` : ''}
                required={isRequired}
            />
            {/* {isPasswordVisible ? (
                <AiOutlineEye
                    fill="#949CA9"
                    onClick={togglePasswordVisibility}
                    className="absolute top-0 right-0 mt-4 mr-3"
                />
            ) : (
                <AiOutlineEyeInvisible
                    fill="#949CA9"
                    onClick={togglePasswordVisibility}
                    className="absolute top-0 right-0 mt-4 mr-3"
                />
            )} */}

        </div>
    )
}

export default TextInputCustom