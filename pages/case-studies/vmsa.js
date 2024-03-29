import Header from '../components/Header'
import Footer from '../components/Footer'

import { HeaderSpacer } from '../../styles/components/header'
import {
  ImageSection,
  Section,
  CaseStudySection,
  List,
  Button,
  CaseStudyTab,
  TabSpacer
} from '../../styles/base'

export default () => {
  return (
    <div>
      <Header fixed tab />
      <HeaderSpacer />
      <div>
        <CaseStudyTab vmsa>
          <div>
            <span>
              <small>Case Study 1</small>
            </span>
          </div>
        </CaseStudyTab>

        <TabSpacer />

        <CaseStudySection vmsa>
          <h1>The Violin Making School of America</h1>
          <h4>WEBSITE REDESIGN AND MARKETING FOCUS</h4>
        </CaseStudySection>

        <Section>
          <h3 className='sub-head'>OVERVIEW</h3>
          <h1>
            The foremost school of violin-making in the US should have a
            waiting list, not empty chairs.
          </h1>
          <p>
            The Violin Making School of America was the first of its kind in
            the United States. Since its creation, two other schools of violin
            making have opened in Chicago and Boston. Enrollment is consistently
            less than the school has room to accommodate, which means losing up
            to $140,000 a year of tuition and fees.
          </p>
        </Section>

        <ImageSection>
          <div><img src='/static/vmsa/screenshot1.png' alt='David Stoker UX' /></div>
          <div><img src='/static/vmsa/screenshot2.png' alt='David Stoker UX' /></div>
          <p className='sub-text'>
            Current site: Too much information, with no visual priority. Need
            to keep in mind who’s viewing the site and what’s useful and engaging
            to them.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>THE PROBLEM</h3>
          <h1>
            You were going to be a world-famous luthier, but couldn’t stay awake.
          </h1>
          <p>
            The current site was throwing out too much information, and in a
            way that was hard to browse and even harder to stay engaged. The
            resulting long-winded style didn’t encourage potential enrollees to
            keep learning about the school and get excited about their future
            career.
          </p>
          <h1>
            “Where are we?!”
          </h1>
          <p>
            Bird on a Wire, (anyone?). Redundant navigation can be a good thing.
            But confusing, inconsistent navigation — bad. Current site had
            different navigations on different pages, and users often scrolled
            to the footer to find usable navigation.
          </p>
        </Section>

        <ImageSection>
          <div><img src='/static/vmsa/nav1.png' alt='David Stoker UX' /></div>
          <div style={{flexBasis: '430px'}}><img src='/static/vmsa/nav2.png' alt='David Stoker UX' /></div>
          <div><img src='/static/vmsa/nav3.png' alt='David Stoker UX' /></div>
          <p className='sub-text'>
            Different pages with different navigation leads to confusion.
            And confusion leads to the dark side.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head no-padding'>PERSONAS</h3>
        </Section>

        <ImageSection white small>
          <div><img src='/static/vmsa/persona-hannah.png' alt='David Stoker UX' /></div>
          <div><img src='/static/vmsa/persona-ken.png' alt='David Stoker UX' /></div>
          <div><img src='/static/vmsa/persona-louis.png' alt='David Stoker UX' /></div>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>MY ROLE</h3>
          <p className='no-padding-top'>
            I gathered initial research after interviews with students, staff
            and researching competitors. I devised objectives to improve design
            and marketing focus of the site, and proposed how they could be
            achieved. Next moved into design work creating personas, testing
            the current site, wireframing and testing prototypes of the new design.
            <br />
            <br />
            Also produced photography for the new site. Wrote, directed and
            edited a video piece for the school as well.
          </p>

          <h1 className='border-header'>
            Something as beautiful and rich as violin making should have a
            website that reflects the same aesthetic.
          </h1>
        </Section>

        <ImageSection noPaddingBottomDesktop>
          <div style={{flexBasis: '120px', maxWidth: '300px', paddingBottom: '0'}}>
            <img className='img-desktop' src='/static/vmsa/wireframe-long.png' alt='David Stoker UX' />
            <img className='img-mobile' src='/static/vmsa/wireframe-long-mobile.png' alt='David Stoker UX' />
          </div>
          <div style={{flexBasis: '200px'}}>
            <img className='img-desktop' src='/static/vmsa/wireframe-desktop.png' alt='David Stoker UX' />
            <img className='img-mobile' src='/static/vmsa/wireframe-mobile.png' alt='David Stoker UX' />
            <p className='sub-text no-padding left bottom'>
              Wireframes:<br />
              New Home page designed with scrolling to show off quick history
              and credibility of school.<br />
              New ‘Graduate Success’ page aimed at telling stories that
              applicants can be inspired by and personalize.<br />
            </p>
          </div>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>
            DESIGN PROCESS
          </h3>
          <h1>So what’s a world-famous luthier school to do?</h1>
          <p className='border-bottom'>
            To start, I interviewed staff and students, and then some
            competitor analysis. After that I defined content and design
            improvements. Then some wireframes, hi-fi prototype testing, a photo
            shoot, a video shoot, and did a lot of writing and re-writing content
            for improved flow, better marketing focus and simplification.
          </p>

          <h2 className='small-header'>Here's what I proposed</h2>
          <List className='border-bottom'>
            <li>
              Don't shy away from being bold, the site is meant to excite and
              attract new student
            </li>
            <li>
              Use homepage to give strong overview of school
            </li>
            <li>
              Edit content to be more easily digested and more succinct
            </li>
            <li>
              Improve site design and imagery to be more clean and sophisticated
            </li>
            <li>
              Highlight a few graduate successes more clearly and prominently
            </li>
            <li>
              Video piece with short student stories to help build emotional
              connection and appeal to applicant's hope for industry success
            </li>
            <li>Simplify navigation</li>
          </List>
        </Section>

        <Section center>
          <a href='https://invis.io/F3DJK0HQJ#/253798375_Home' target='_blank'>
            <Button style={{marginBottom: '80px'}}>VIEW  THE PROTOTYPE</Button>
          </a>
        </Section>

        <ImageSection large noPaddingBottom>
          <div className='img-desktop no-padding-bottom'>
            <img src='/static/vmsa/home-desktop.png' alt='David Stoker UX' />
          </div>
          <div className='img-mobile no-padding-bottom'>
            <img src='/static/vmsa/home-mobile.png' alt='David Stoker UX' />
          </div>
        </ImageSection>

        <ImageSection white smallPaddingMobile>
          <iframe
            src='https://player.vimeo.com/video/196616055?color=ffffff&title=0&byline=0&portrait=0'
            width='1000' />

          <p className='sub-text'>
            Video piece I shot, directed and edited for the new site.
          </p>
        </ImageSection>

        <Section>
          <h3 className='sub-head'>CONSTRAINTS</h3>
          <h1>I'll believe it when I see it.</h1>
          <p>
            With a tight budget, the school leadership was reluctant to commit
            resources to something that was unseen and unproven. The current
            site was in hand and comfortable to them. I needed to show user
            testing of the current site and the new design to get them on board.
            Some nice photos and a video helped turn the tide as well.
          </p>

          <h3 className='sub-head no-padding'>THE RESULTS - SO FAR</h3>
          <p>
            While at this point the new site is still being developed, early
            returns from the video piece I created have increased student
            applications by 12%. So far so good!
          </p>

          <h3 className='sub-head'>WHAT I LEARNED</h3>
          <h1>You eat first with your eyes.</h1>
          <p>
            Even an academic institution can use a little flare. After
            researching, testing and all that jazz, it still goes a long way
            just to make it pretty. A website that’s more open, clean and
            digestible tells the user that this company is professional, sharp
            and can be taken seriously.
          </p>
        </Section>

        <Section center>
          <a href='https://invis.io/F3DJK0HQJ#/253798375_Home' target='_blank'>
            <Button style={{marginBottom: '80px'}}>SEE THE PROTOTYPE</Button>
          </a>
        </Section>
      </div>
      <Footer case-study vmsa />
    </div>
  )
}
