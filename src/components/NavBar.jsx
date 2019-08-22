import React, {Component} from 'react'
import {DIV, UL, LI, A} from '../styles/Navbar'

class NavBar extends Component {
    render() {
        return (
            <DIV>
                <UL>
                    <LI><A href="#">Menu 1</A></LI>
                    <LI><A href="#">Menu 1</A></LI>
                    <LI><A href="#">Menu 1</A></LI>
                    <LI><A href="#">Menu 1</A></LI>
                </UL>
            </DIV>
        )
    }
}

export default NavBar