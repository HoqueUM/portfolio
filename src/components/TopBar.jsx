import React from 'react'

const TopBar = () => {
    return (
        <nav>
            <div className='border flex justify-center space-x-5 py-4'>
                <div>
                    <a>Home</a>
                </div>
                <div>
                    <a>About</a>
                </div>
                <div>
                    <a >Projects</a>
                </div>
                <div>
                    <a >Blog</a>
                </div>
                <div>
                    <a >Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default TopBar