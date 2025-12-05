// Create reusable ProfileCard components that take props like name, image, and description.
import React from 'react'
import { ProfileCard } from './ProfileCard'

const Taskone = () => {
    return (
        <div>
            <div className="container">
                <ProfileCard
                    name="shyam"
                    image="/man.jpeg"
                    description="full stack Developer"
                />

                <ProfileCard
                    name="vasu"
                    image="/man.jpeg"
                    description="backend developer"
                />
            </div>
        </div>
    )
}

export default Taskone
