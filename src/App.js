import styles from './App.module.css';
import Button from './components/Button.js';
import Section from './components/Section.js';
import nefOutline from './images/nef-outline.webp';
import { ReactComponent as BlueLabel } from './svg/blueLabel.svg';
/* import { ReactComponent as BrandsBs } from './svg/brands-bs.svg';
import { ReactComponent as BrandsHilton } from './svg/brands-hilton.svg';
import { ReactComponent as BwfGunzilla } from './svg/bwf-gunzilla.svg'; */
import { ReactComponent as EmojiHappiness } from './svg/emojiHappiness.svg';
// import { ReactComponent as HeadingWork } from './svg/heading-work.svg';
import { ReactComponent as HeadingFlowGradient } from './svg/headingFlowGradient.svg';
import { ReactComponent as IconHandcrafted } from './svg/icon-handcrafted.svg';
// import { ReactComponent as IconLove } from './svg/icon-love.svg';
import { ReactComponent as IconThunder } from './svg/icon-thunder.svg';
import { ReactComponent as IconUnlimited } from './svg/icon-unlimited.svg';
// import { ReactComponent as LinkedInNegative } from './svg/LinkedIn-Negative.svg';
// import { ReactComponent as LogoText } from './svg/logo-text.svg';
import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as RoundInstructor } from './svg/round-instructor.svg';

// import { ReactComponent as Xlogo } from './svg/x-logo.svg';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.logoWrapper}>
          <Logo className={styles.iconBwf} />
          <a href="/">BuildWithFlowTM</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Perks</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className={styles.top}>
        <HeadingFlowGradient />

        <h1>
          Bringing delightful webflow sites to your
          <br />
          customers
        </h1>
        <hgroup>
          <Button>Explore the Perks</Button>
          <p className={styles.subline}>
            Happiness <EmojiHappiness /> Guaranteed.
          </p>
        </hgroup>
      </div>

      <main>
        <div className={styles.container}>
          <Section lightBgColor thin flexDirectionRow>
            <div>design</div>
            <div>build</div>
            <div>animation</div>
            <div>launch</div>
          </Section>
          <Section large lightBgColor>
            <IconUnlimited />
            <h2>Unlimited Creativity</h2>
            <p>
              Every website is tailored with our creative superpowers.
              Custom-built and exclusive to your business.
            </p>
          </Section>
          <Section lightBgColor>
            <IconHandcrafted />
            <h2>Premium Quality</h2>
            <p>
              Creative power that goes way beyond Webflow templates. Every pixel
              is carefully designed.
            </p>
          </Section>
          <Section lightBgColor>
            <IconThunder />
            <h2>Reliable & Fast</h2>
            <p>
              Get your website in less than 4 weeks, guaranteed! We have truly
              mastered Webflow.
            </p>
          </Section>

          <Section large darkBgColor flexDirectionRow expert>
            <RoundInstructor className={styles.iconInstruction} />
            <hgroup>
              <h2>Webflow Expert</h2>

              <p>
                Creative power that goes way beyond Webflow templates. Every
                pixel is carefully designed.
              </p>
              <BlueLabel />
            </hgroup>
            <img
              src={nefOutline}
              alt="Neftali Outline"
              className={styles.expertImg}
            />
          </Section>
        </div>
      </main>

      {/* } <footer>
        <LinkedInNegative />
        <Xlogo />
        <LogoText />
        <div>© 2024 BuildWithFlow™️</div>
        <div>
          Proudly built with Webflow <span>webflow</span>
        </div>
      </footer> */}
    </>
  );
}
