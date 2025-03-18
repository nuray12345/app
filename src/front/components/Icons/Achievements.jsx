import React from "react";
import { FaClock, FaBriefcase, FaUser } from "react-icons/fa";
import "./Achievements.sass";

const Achievements = () => {
    const achievements = [
        { icon: <FaClock className="icon" />, number: 11, text: "Лет на рынке" },
        { icon: <FaBriefcase className="icon" />, number: 100, text: "Успешных проектов в разных отраслях" },
        { icon: <FaUser className="icon" />, number: 1200, text: "Довольных клиентов по всей России" },
    ];

    return (
        <div className="achievements">
            {achievements.map((ach, index) => (
                <div key={index} className="achievement">
                    {ach.icon}
                    <h2>{ach.number}</h2>
                    <p>{ach.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Achievements;
