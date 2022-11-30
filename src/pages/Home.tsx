import { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

const Home: FC = () => {

  const { t, i18n } = useTranslation();
  return <h1>
    {Object.keys(lngs).map((lng) => (
      <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
        type='submit'
        onClick={() => i18n.changeLanguage(lng)}>
        {lngs[lng as keyof object]['nativeName' as keyof object]}
      </button>
    ))}
    <Trans i18nKey='description.part1'>
      Edit <p>src/App.js</p> and save to reload.
    </Trans>
    <a
      className='App-link'
      href='https://reactjs.org'
      target='_blank'
      rel='noopener noreferrer'
    >
      {t('description.part2')}
    </a>
  </h1>
}

export default Home
