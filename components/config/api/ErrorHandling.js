import React, { Component, Router } from 'react';
import { Alert } from 'antd';
export default function ErrorHandling(message, errorData, type = 'error') {
    const errors = [];
    if (errorData) {
        const errorDatas = Object.entries(errorData).map(([key, value]) => {
            return (
                errors.push(<li>{key} : {value.toString()}</li>)
            );
        })
    }
    return (<Alert
                message={message}
                description={errors}
                type={type}
                showIcon
            />
            );

}
