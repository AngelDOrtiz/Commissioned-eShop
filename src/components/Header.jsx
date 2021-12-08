import React, { Component } from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                
                <div className={styles.left}>

                  <a>  
                    <div className={styles.logo}> </div>
                  </a>
                  
                </div>

                <div className={styles.right}>

                    <p>|</p>

                <a>
                    <p>Stickers</p>
                </a>

                    <p>|</p>

                <a>
                    <p>Accessories</p>
                </a>
                    
                    <p>|</p>

                <a>
                    <p>Magic</p>
                </a>
                    
                    <p>|</p>

                <a>
                    <p>+R18</p>
                </a>

                    <p>|</p>

                <a>
                    <p>About Us</p>
                </a>    
                    
                    <p>|</p>

                <a>
                    <i class="fa fa-search"></i>
                </a>    
                    
                    <p>|</p>

                <a>
                    <i class="fa-solid fa-user"></i>
                </a>
               
                </div>
            </div>
        )
    }
}
