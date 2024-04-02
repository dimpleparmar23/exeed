import React, { Component } from 'react';
import "./Home1.css"

class ShowFullText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullText: false
    };
  }

  toggleShowFullText = () => {
    this.setState(prevState => ({
      showFullText: !prevState.showFullText
    }));
  };

  render() {
    const { showFullText } = this.state;
    const { text } = this.props;
    return (
      <>
        {showFullText ? (
          <>{text}</>
        ) : (
          <>
            {text.length > 100 ? text.substring(0, 50) + '...' : text}
            <button onClick={this.toggleShowFullText} className="readmore">
              {showFullText ? 'Read Less' : 'Read More'}
            </button>
          </>
        )}
      </>
    );
  }
}

export class Home1 extends Component {
  render() {
    return (
      <div>
        {/* First Card */}
        <div className="card">
        <div className="img"><pre id='harsh'>
        <img src='/pic1.jpeg' height="200px" width="200px" alt="img-1" align="left"></img>
            !!! Congratulation <br/>
            <ShowFullText text="Sharsh Kalal from Parul University Diploma Electrical Engineering! 2024 Susseccfully placed at APOLLO TYRES" />
            </pre>
            </div>
        </div>
        
      
        {/* Second Card */}
        <div className="card">
        <div className="img"><pre id='harsh'>
        <img src='/pic2.jpeg' height="200px" width="200px" alt="img-1" align="left" ></img>
             Congratulation !!! <br/>
            <ShowFullText text="Sumit Khut, Balram Patel and Bhanupratap Deora from Parul University B.Tech(CSE) are successfully placed at SOPHOS" />
            </pre>
            </div>
        </div>

        {/* Third Card */}
        <div className="card">
          <div className="img"><pre id='harsh'>
        <img src='/placement.jpeg' height="200px" width="200px" alt="img-1" align="left"></img>
            Placement Day <br/>
            <ShowFullText text="Dear Pre-Final Year Students,
We are delighted to extend an invitation to all pre-final year students to attend the highly anticipated Placement Day event on 23th march. This event presents an invaluable opportunity for you to explore various career prospects, network with esteemed professionals, and gain insights into the recruitment processes of leading companies. 
This is mandatory for all Pre Final year students." />
</pre>
</div>
          
        </div>
      </div>
    );
  }
}

export default Home1;
