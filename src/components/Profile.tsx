import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/felipecotto.png" alt="Felipe Oliveira"/>
            <div>
                <strong>Felipe Oliveira</strong>
                <p><img src="icons/level.svg" alt="Level"/> Level </p>
            </div>
        </div>
    );
}