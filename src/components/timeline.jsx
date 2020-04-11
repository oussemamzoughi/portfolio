import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Juniper <span>2019-present</span></h2>
                        <p>Lorem ipsum dolor sit amet, odio dapibus cras tortor amet, in non odio mi. Litora odio suspendisse ligula vel, ut vel aliquam vulputate augue magnis in, ut purus nulla convallis ullamcorper proin, cursus mauris risus. Mauris proin, erat mauris elit, placerat blandit vestibulum sem. Elementum consequat eget justo mollis, ut tincidunt, libero lobortis ornare luctus, pharetra varius donec porta quam elit donec. Mauris exercitationem tristique cras.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at DAIICT<span>2015-2019</span></h2>
                        <p>Lorem ipsum dolor sit amet, odio dapibus cras tortor amet, in non odio mi. Litora odio suspendisse ligula vel, ut vel aliquam vulputate augue magnis in, ut purus nulla convallis ullamcorper proin, cursus mauris risus. Mauris proin, erat mauris elit, placerat blandit vestibulum sem. Elementum consequat eget justo mollis, ut tincidunt, libero lobortis ornare luctus, pharetra varius donec porta quam elit donec. Mauris exercitationem tristique cras.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>Lorem ipsum dolor sit amet, odio dapibus cras tortor amet, in non odio mi. Litora odio suspendisse ligula vel, ut vel aliquam vulputate augue magnis in, ut purus nulla convallis ullamcorper proin, cursus mauris risus. Mauris proin, erat mauris elit, placerat blandit vestibulum sem. Elementum consequat eget justo mollis, ut tincidunt, libero lobortis ornare luctus, pharetra varius donec porta quam elit donec. Mauris exercitationem tristique cras.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
