import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';
import {fade} from "maath/misc";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p=[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className=" bg-tertiary rounded-[20px]
                    py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title}
                         className="w-16 h-16 object-contain "/>
                    <h3 className=" text-white text=[20px]
                    font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Introduction
                </p>
                <h2 className={styles.sectionHeadText}>
                    Overview
                </h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-17 max-w-3xl leading-[30px]"
            >
                Currently in pre-final year of BTech, highly skilled and motivated professional with a strong background in Python programming, UI/UX design, and Web Development. Proficient in creating visually
                appealing and user-friendly interfaces using React.js, HTML, and CSS. Adept at problem-solving and
                collaborating with cross-functional teams to deliver high-quality projects.
            </motion.p>
            <div className="mt-20 flex-wrap flex gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")