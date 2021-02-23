import '../styles/global.css';

export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span> 0 XP</span>
            <div>
                <div style={{ width: '60%'}} />
                <span className="current-experience" style={{ left: '60%'}}> 300 XP</span>
            </div>
            <span>690 XP</span>
        </header>
    )
}