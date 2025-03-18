import React, { useState, useEffect, useRef } from "react";
import "./Achievements.sass";  // Импорт стилей
import "../../../index.css"
const Achievements = () => {
    const achievements = [
        { icon: <img src="/img/icons/icon1.png" alt="clock" className="icon" />, number: 11, text: "Лет на рынке" },
        { icon: <img src="/img/icons/icon2.png" alt="project" className="icon" />, number: 100, text: "Успешных проектов в разных отраслях" },
        { icon: <img src="/img/icons/icon3.png" alt="client" className="icon" />, number: 1200, text: "Довольных клиентов по всей республике" },
    ];

    const [hasAnimated, setHasAnimated] = useState(false);
    const achievementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (achievementRef.current) {
            observer.observe(achievementRef.current);
        }

        return () => {
            if (achievementRef.current) {
                observer.unobserve(achievementRef.current);
            }
        };
    }, []);

    const animateNumbers = () => {
        achievements.forEach((ach, index) => {
            let start = 0;
            let end = ach.number;
            let duration = 2000;
            if (index === 2) {
                duration = 1500;
            }
            let stepTime = Math.abs(Math.floor(duration / end));

            const element = document.getElementById(`count-${index}`);

            let timer = setInterval(() => {
                start += 1;
                if (element) {
                    element.innerText = start;
                }
                if (start === end) clearInterval(timer);
            }, stepTime);
        });
    };

    useEffect(() => {
        if (hasAnimated) {
            animateNumbers();
        }
    }, [hasAnimated]);

    return (
        <div className="achievements" ref={achievementRef}>
            {achievements.map((ach, index) => (
                <div key={index} className="achievement">
                    {ach.icon}
                    <h2 id={`count-${index}`}>0</h2>
                    <p className="achievement-text">{ach.text}</p>  {/* Добавлен класс для текста */}
                </div>
            ))}
        </div>
    );
};

export default Achievements;
