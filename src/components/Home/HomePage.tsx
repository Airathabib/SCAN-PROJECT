import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../Layout/Layout';
import BenefitSlider from '../UI/BenefitSlider/BenefitSlider';
import Tariffs from './Tariffs/Tariffs';

import { useAppSelector } from '@/redux/hooks';

import styles from './HomePage.module.scss';

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();
  const isAuthorized = useAppSelector((state) => state.user.isAuthorized);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Layout>
      <div className="container">
        <section className={styles.welcomeBlock}>
          <div className={styles.leftBlock}>
            <h1 className={styles.heading}>
              Cервис по поиску <br /> публикаций <br /> о компании <br /> по его ИНН
            </h1>
            <p className={styles.text}>
              Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
            </p>
            {isAuthorized && (
              <button className={styles.searchBtn} onClick={() => handleNavigation('/search')}>
                Запросить данные
              </button>
            )}
          </div>
          <div className={styles.rightBlock}>
            <img src="./welcomeImg.svg" alt="The human with the coffee runs the programs" />
          </div>
        </section>
        <BenefitSlider />
        <div className={styles.dividerWrap}>
          <img src="./dividerImg.svg" alt="" className={styles.dividerImg} />
        </div>
        <Tariffs />
      </div>
    </Layout>
  );
};

export default HomePage;
