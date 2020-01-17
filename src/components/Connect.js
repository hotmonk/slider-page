import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram , faYoutube, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import './Connect.css';

export default class Connect extends Component {
    render() {
        return (
            <div class="container-fluid padding">
                <hr class="my-4"></hr>
                <div class="row text-center padding">
                    <div class="col-12">
                        <h2>Connect</h2>
                    </div>
                    <div class="col-12 social padding">
                        <a href="#"><FontAwesomeIcon className="fa tw" icon={faTwitter} size="4x"></FontAwesomeIcon></a>
                        <a href="#"><FontAwesomeIcon className="fa fb" icon={faFacebookF} size="4x"></FontAwesomeIcon></a>
                        <a href="#"><FontAwesomeIcon className="fa ig" icon={faInstagram} size="4x"></FontAwesomeIcon></a>
                        <a href="#"><FontAwesomeIcon className="fa yt" icon={faYoutube} size="4x"></FontAwesomeIcon></a>
                        <a href="#"><FontAwesomeIcon className="fa gp" icon={faGooglePlus} size="4x"></FontAwesomeIcon></a>
                     </div>
                </div>
                
            </div>
        )
    }
}
