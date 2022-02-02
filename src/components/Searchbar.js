import React, {Component} from 'react';
import '../css/Searchbar.css';

class Searchbar extends Component {
    render() {
        return (
            <div className="d-flex justify-content-end my-4">
                <form>
                    <label htmlFor="search" className="text-white">Search: </label>
                    <input type="text" name="search" id="search" />
                    <input type="button" defaultValue="Go" id="button" />
                </form>
            </div>
        );
    }
}

export default Searchbar;