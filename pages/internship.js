import Link from 'next/link';
import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import data from '../data';

const Timeline = (props) => {
	const { items } = props;
	const totalItems = items.length;
	const numberOfActiveItems = items.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;
	
	return (
		<div className="timeline">
			<div className="timeline-progress" style={{ width: `${progressBarWidth}%`}}></div>
			<div className="timeline-items">
				{items.map((item, i) => (
					<div key={i} className={"timeline-item" + (item.active ? ' active' : '')}>
						<div className="timeline-content">
                            {item.date} <br/>
							{item.name}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}


function InternshipPage(){
    const { committees } = data;
    const items = [
        {
            date: '00/00',
            name: 'apps open',
            info: 'information about the event',
            active: true,
        },
        {
            date: '00/00',
            name: 'apps due',
            info: 'information about the event',
            active: false,
        },
        {
            date: '00/00',
            name: 'interviews',
            info: 'information about the event',
            active: false,
        },
        {
            date: '00/00',
            name: 'hear back',
            info: 'information about the event',
            active: false,
        },
        {
            date: '00/00',
            name: 'onboarding',
            info: 'information about the event',
            active: false,
        },
    ]
    return(
        <Layout>
            <Banner decorative />
            <div className="content-section text-center">
                <h1>Internships</h1>
                What do you do as an intern? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin
                nibh sit amet commodo nulla. Amet facilisis magna etiam tempor.
            </div>
            <div className="content section logos-line">
                {committees.map(committee =>
                    <div className="logo-diamond" key={committee.name}>
                        <img src={committee.diamond} alt={`${committee.name}'s logo`} />
                    </div>,
                )}
                <div className="logo-diamond">
                    <img src={'/images/logo.png'} id="acm-logo" alt="ACM at UCLA Logo"></img>
                </div>
            </div>
            <div className="committee-internship-info">
                    <img src="" alt="committee logo"/>
                    <h4>What do we do?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lectus nulla at volutpat diam ut. Elementum nisi quis eleifend quam adipiscing vitae.
                    </p>
                    <h4>Time Commitment</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lectus nulla at volutpat diam ut. Elementum nisi quis eleifend quam adipiscing vitae.
                    </p>
                    <h4>Post Internship</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lectus nulla at volutpat diam ut. Elementum nisi quis eleifend quam adipiscing vitae.
                    </p>
            </div>
            <div className="content-section text-center">
                <h1>Applications</h1>
                <Timeline items={items}/>
                <div className="application-information">
                    <div>
                        {items.map((item, i) => (
                        <div key={i} className='application-item'>
                            {item.date} &nbsp;
                            {item.name}
                            <p>{item.info}</p>
                        </div>
                        ))}
                        -- more dates will be added throughout the quarter --
                    </div>
                    <div className='application-info-card'>
                        <h3>Internship Applications Reopen Fall 2021</h3>
                        <div className='application-button'>
                            <Link href="">
                                <a className="button" target="_blank" rel="noreferrer noopener">
                                    Apply Now
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-section text-center">
                <h1>Next steps</h1>
            </div>
            <div className="content-section text-center">
                <h1>Past Intern Testimonials</h1>
            </div>
            <div className="content-section text-center">
                <h1>FAQ</h1>
            </div>


        </Layout>
    );
}

export default InternshipPage;
