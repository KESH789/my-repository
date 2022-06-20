import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Welcome to Keshav's single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <h1>About Me:</h1>
            <p> My name is Keshav Mooruth. I have recently completed my IT : Applications Development course
                at the Durban University Of Technology in Durban. I am 22 years of age and with many years ahead of me, I am looking to further
                my career in the IT industry.</p>

            <p>I want to join the SovTech Graduate Programme to accomplish the following:</p>
        <ul>
                <li><strong>Further my IT career</strong>- This opportunity will allow me to grow my IT career and further my experience
                     to many other areas.</li>
          <li><strong>Further my IT knowledge</strong>- The graduate programme will teach me new methods and techniques used in the industry.</li>
          <li><strong>Show my dedication and worthiness</strong>- I will be presented the opportunity to show SovTech my hardworking work ethic
                    and dedication to completing each and every task that I am presented. I want to show SovTech that I will do WHATEVER it
                    takes to accomplish the penultimate end goal.</li>
          <li><strong>Become a asset of SovTech</strong>- I want my skills and potential to be valued. I want to be seen as a
                    valueable asset of the company and a future leader.  </li>

        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}
