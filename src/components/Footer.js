import React from 'react';

//fixed vs stick bottom?  
export default function Footer(){
    return (
        // mt-auto allows footer to have a margin at the top to fill available space until the bottom of the page
<footer className='border text-center mt-auto'>
<div className='container'>
    <div className='row'>
        <div className='col-4'>
        <p>Github</p>
        </div>
        <div className='col-4'>
        <p>LinkedIn</p>       
        </div>
        <div className='col-4'>
        <p>StackOverflow</p>        
        </div>
    </div>
</div>
</footer>
    );
}