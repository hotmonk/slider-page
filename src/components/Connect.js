import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram , faYoutube} from '@fortawesome/free-brands-svg-icons'
export default class Connect extends Component {
    render() {
        return (
            <div class="container-fluid padding">
                <div class="row text-center padding">
                    <div class="col-12">
                        <h2>Connect</h2>
                    </div>
                    <div class="col-12 social padding">
                        <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} size="2x"></FontAwesomeIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#"><FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;
                     </div>
                </div>
                
            </div>
        )
    }
}
