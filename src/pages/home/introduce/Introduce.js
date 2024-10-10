import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/avatar.png';
import ImageBox from '../../../components/image-box/ImageBox';
import styles from './Introduce.module.scss';

function Introduce() {
  return (
    <div className={styles.intro}>
      <div className={styles.avatar}>
        <ImageBox src={avatar} />
      </div>
      <ul className={styles.info}>
        <li>문희연</li>
        <li>1991. 11. 14.</li>
        <li>010-7557-0533</li>
        <li>yeon7513@gmail.com</li>
        <li>대전시 대덕구 송촌동</li>
        <li>
          <div className={styles.links}>
            <Link to="https://github.com/yeon7513" target="_blank">
              <FaGithub />
              GITHUB
            </Link>
            <Link
              to="https://yeon7513.notion.site/115a2ad7a3e6803b99b2f6bf80013b3b?pvs=4"
              target="_blank"
            >
              <IoDocumentText />
              RESUME
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Introduce;
