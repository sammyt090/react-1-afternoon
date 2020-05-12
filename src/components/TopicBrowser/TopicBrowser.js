import React, {Component} from 'react';

//topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

class TopicBrowser extends Component{
    render(){
        return(
            // <p>Hello World</p>
            <div>
                <EvenAndOdd />
                <FilterString/>
                <FilterObject/>
                <Palindrome/>
                <Sum/>
            </div>

        )
    }
} 

export default TopicBrowser;