import React from 'react';
import {colors} from '../utils/helpers'
const githubImg = require('../Assets/GitHub.png');
const linkedInImg = require('../Assets/LinkedIn.png');
const stackOverflowImg = require('../Assets/StackOverflow.png');

const styles = {
    footerStyle : {
        background: colors.Moonstone,
        fontSize: '20px',
        paddingTop: '8px',
        paddingBottom: '8px',
        
    },
    links : {
        textDecoration: 'none',
        color: colors.Champage
    }
}

//fixed vs stick bottom?  
export default function Footer(){
    return (
        // mt-auto allows footer to have a margin at the top to fill available space until the bottom of the page
<footer className='border text-center mt-auto' style={styles.footerStyle}>
<div className='container'>
    <div className='row'>
        <div className='col-4'>
        <a href="https://github.com/AvivaRubenstein" style={styles.links}>
        Github
        </a>
        </div>
        <div className='col-4'>
        <a href="https://www.linkedin.com/in/aviva-rubenstein-62266a1a2/" style={styles.links}>
        LinkedIn 
        </a>     
        </div>
        <div className='col-4'>
        <a href='https://stackexchange.com/users/27267390/aviva'style={styles.links}>
        StackOverflow   
        </a>   
         
        </div>
    </div>
</div>
</footer>
    );
}