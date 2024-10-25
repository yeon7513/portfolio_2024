import React from 'react';
import IDPicture from '../../../assets/img/id_picture.jpg';
import ImageBox from '../../../components/image-box/ImageBox';
import { profileData } from '../../../lib/aboutData';
import { changeIcons } from '../../../utils/changeIcons';
import styles from './Profile.module.scss';

function Profile() {
  return (
    <div className={styles.profile}>
      <ImageBox className={styles.idPic} src={IDPicture} />
      <ul className={styles.info}>
        {profileData.map((data, idx) => (
          <li key={idx}>
            <span className={styles.icon}>{changeIcons(data.label)}</span>
            <span className={styles.label}>{data.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
