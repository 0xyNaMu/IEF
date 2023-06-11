import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import './start.css'
import Tooltip from '../components/Tooltip'
import Button from '../components/Button'

import User from '../contexts/User'

export default observer(() => {
    const userContext = React.useContext(User)

    // if (!userContext.userState) {
    //     return (
    //     <div className="container">
    //         Validating...
    //     </div>
    //     )
    // }

    return (
        <>
            <div className="bg">
                <img
                    src={require('../../public/Wage.png')}
                    alt="gbird at a flower"
                />
            </div>
            <div className="content">
                <div style={{ fontSize: '50px', fontWeight: '600' }}>
                Impact measured, merit rewarded, ecosystem advanced
                </div>
                <div className="attester">
                    <div style={{ marginRight: '12px' }}>
                        Contribute with your expertise{' '}
                    </div>
                    <Tooltip text="You've been there. Endorse or reject how your peers have evaluated their impact, and help us provide insightful information to Optimism's badgeholders." />
                </div>
                <p>
                    Clicking 'Sign-up' will check if your project has been whitelisted to evaluate other projects.
                    </p>
                    <p>
                    Whitelisting is based on on-chain profile submissions to the <a style={{ marginLeft: "0" }}href="https://app.optimism.io/retropgf-discovery?tab=All%20projects" target="blank">
                    Optimism app. 
                    </a>
                </p>
                <div className="join">
                    {!userContext.hasSignedUp ? (
                        <Button
                            onClick={() => {
                                if (!userContext.userState) return
                                return userContext.signup()
                            }}
                        >
                            {userContext.userState ? 'Sign-up' : 'Validating...'}
                            <span style={{ marginLeft: '12px' }}>
                                <img
                                    src={require('../../public/arrow.svg')}
                                    alt="right arrow"
                                />
                            </span>
                        </Button>
                    ) : (
                        <div>
                            <p
                                style={{
                                    fontWeight: '400',
                                    lineHeight: '.5em',
                                }}
                            >
                                EVALUATOR ADDED!
                            </p>
                            <Link to="/dashboard">
                                <Button>
                                    Dashboard
                                    <span style={{ marginLeft: '12px' }}>
                                        <img
                                            src={require('../../public/arrow.svg')}
                                            alt="right arrow"
                                        />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
                <p>
                    Come back and check your Dashboard for updates once the project creation period is over.{' '}
                </p>
                <p>
                    You will be asigned 5 projects at random, please complete the anonymous review of their impact.
                </p>
            </div>
        </>
    )
})
