import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import Image from 'react-bootstrap/Image';


class AboutPage extends Component {

  render () {
    return (
      <div className="container-fluid">
        <div className="about-container">
            <div className="about-text">
              <div className="my-picture">
                <Image
                roundedCircle
                src="https://www.go-raiders.com/sports/mvball/2018-19/photos/0001/Christensen-J_headshot.jpg?max_width=160&max_height=210"
                alt="my-face"/>
              </div>
              <h1>
                Jacob Christensen
              </h1>
              <p>
                Recent graduate from the Milwaukee School of Engineering where I studied Computer Engineering and competed in NCAA D3 as a member of the men's volleyball team.
                I have accepted an offer to be a part of the Digital Technnology Leadership Program with GE Healthcare as a full time employee. <br/>
                I have previous experience working in internship positions on a software development team as well as an applications engineering team with Brady Corporation.
              </p>
            </div>
            <div className="resume-container">
              <Document
                file={process.env.PUBLIC_URL + "JacobChristensenResumePDF.pdf"}
              >
                <Page pageNumber={1} />
              </Document>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
