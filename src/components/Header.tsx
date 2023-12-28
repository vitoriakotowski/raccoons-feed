import styles from './Header.module.css';

import raccoonLogo from '../assets/raccoon-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={raccoonLogo} alt='' />
            <strong>Raccoon's Feed</strong>
        </header>
    );
}