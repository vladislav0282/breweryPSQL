/* eslint-disable max-len */
import story1 from '../../../images/story1.jpg'
import story2 from '../../../images/story2.jpg'
import story3 from '../../../images/story3.jpg'
import story4 from '../../../images/story4.jpg'
import production1 from '../../../images/solod.jpg'
import production2 from '../../../images/mash.jpg'
import production3 from '../../../images/fermentation.jpg'
import production4 from '../../../images/finish.jpg'
import team from '../../../images/team.PNG'
import stylesAbout from './About.module.css'

export function About() {
  return (
    <div className={stylesAbout.aboutContainer}>
      <div className={stylesAbout.aboutContant}>
        <div className={stylesAbout.aboutHeader}>
          <h1 className={stylesAbout.aboutHeaderH1}>THIS BIG STORY STARTED WITH SOMETHING VERY SMALL</h1>
        </div>
        <hr className={stylesAbout.hr} />
        <div className={stylesAbout.containerStory1}>
          <div>
            <img
              className={stylesAbout.imgStory1}
              src={story1}
              alt="logo"
            />
          </div>
          <div>
            <h1 className={stylesAbout.headerStory1}>EST.1981</h1>
            <p className={stylesAbout.headerParagraphStory1}>
              The story began in 1981. Four ambitious men have realized their long-standing dream. This year is a report for a great story...
            </p>
          </div>
        </div>
        <div className={stylesAbout.containerStory2}>
          <div>
            <h1 className={stylesAbout.headerStory2}>TECHNOLOGICAL PROGRESS</h1>
            <p className={stylesAbout.headerParagraphStory2}>
              The first bottling line was put into operation in 1985. This allowed us to increase production. MOUNTAIN began to be recognized in many European cities.
            </p>
          </div>
          <div>
            <img
              className={stylesAbout.imgStory1}
              src={story2}
              alt="logo"
            />
          </div>
        </div>
        <div className={stylesAbout.containerStory3_4}>
          <h1 className={stylesAbout.headerStory3_4}>OUR DAYS</h1>
          <div className={stylesAbout.containerImgStory3_4}>
            <img className={stylesAbout.containerImgStory3} src={story3} alt="logo" />
            <img className={stylesAbout.containerImgStory4} src={story4} alt="logo" />
          </div>
          <p className={stylesAbout.containerStoryParagraph3_4}>Today, MOUNTAIN Brewery is known all over the world. Production volumes reach more than 10,000 tons per year. We are present in famous bars in Europe and around the world. We have excellent quality, you have a good mood!</p>
        </div>
        <hr className={stylesAbout.hr} />

        <div className={stylesAbout.containerProductionsAll}>
          <h1 className={stylesAbout.headerProduction}>PRODUCTION PROCESS</h1>
          <div>

            <div className={stylesAbout.containerProduction1}>
              <img
                className={stylesAbout.containerImgProduction1}
                src={production1}
                alt="logo"
              />
              <p className={stylesAbout.containerParagraph1}>Selection of the best ingredients and raw materials</p>
            </div>

            <div className={stylesAbout.containerProduction2}>
              <img
                className={stylesAbout.containerImgProduction2}
                src={production2}
                alt="logo"
              />
              <p className={stylesAbout.containerParagraph2}>The cooking process on modern equipment.</p>
            </div>

            <div className={stylesAbout.containergProduction3}>
              <img
                className={stylesAbout.containerImgProduction3}
                src={production3}
                alt="logo"
              />
              <p className={stylesAbout.containerParagraph3}>The process of fermentation and maturation of your favorite beer.</p>
            </div>

            <div className={stylesAbout.containergProduction4}>
              <img
                className={stylesAbout.containerImgProduction4}
                src={production4}
                alt="logo"
              />
              <p className={stylesAbout.containerParagraph4}>Signature recipes, brewed in compliance with all traditions. With a reference to the past, but keeping up with the times.</p>
            </div>

          </div>

          <hr className={stylesAbout.hr2} />
          <h2 className={stylesAbout.headerTeamBlock}>SINCERELY, YOUR MOUNTAIN TEAM</h2>
          <div className={stylesAbout.teamAbout}>
            <img
              className={stylesAbout.teamImg}
              src={team}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>

  )
}
