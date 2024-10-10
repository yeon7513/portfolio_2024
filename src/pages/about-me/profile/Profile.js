import React from 'react';
import IDPicture from '../../../assets/id_picture.jpg';
import { profileData } from '../../../lib/aboutData';
import { changeIcons } from '../../../utils/changeIcons';
import styles from './Profile.module.scss';

function Profile() {
  return (
    <div className={styles.profile}>
      <img className={styles.idPic} src={IDPicture} alt="" />
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
