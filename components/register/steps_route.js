import React, { Component } from 'react';
import { Steps, Button, message, Result, Icon } from 'antd';
import BasicDetailsForm from './basic';
import LocationDetailsForm from './location';
import WorkoutDetailsForm from './workout';
import TimeDetailsForm from './time';
import Router from 'next/router'
export default function steps_route(props) {
    const { Step } = Steps;
    var current = Number(props.profile_stage);
    const steps = [
        {
            title: 'Basic Details',
            content: current == 0 ? <BasicDetailsForm /> : <Result status="success" title="Basic Details Done" />,
            icon: <Icon type="shop" />,
        },
        {
            title: 'Location',
            content: current == 1 ? <LocationDetailsForm /> : <Result status="success" title="Location Done" />,
            icon: <Icon type="environment" />,
        },
        {
            title: 'Set Workout',
            content: current == 2 ? <WorkoutDetailsForm /> : <Result status="success" title="Done" />,
            icon: <Icon type="solution" />,
        },
        {
            title: 'Timing',
            content: current == 3 ? <TimeDetailsForm /> : <Result status="success" title="Completed proccess. Thank You" />,
            icon: <Icon type="clock-circle" />,
        },
    ]

    return (
        <div>
            <Steps current={current} >
                {steps.map(item => (
                    <Step key={item.title} title={item.title} icon={item.icon} />
                ))}
            </Steps>
            <div className="steps-content p-5">
                <div className="row">
                    <div className="col-md-12">
                        {steps[current].content}
                    </div>
                </div>
            </div>
        </div>
    )
}


