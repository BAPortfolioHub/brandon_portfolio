import React, {useState, useEffect} from 'react';
import { ModalProfile } from './ModalProfile';
import { brandonProfile } from '../constants/data';
import '../styles/aboutSection.css'

interface AboutSectionProps {
    name: string;
    isExpanded: boolean;
    
}

const AboutSection: React.FC<AboutSectionProps> = ({name, isExpanded}) => {
    const [visibleName, setVisibleName] = useState<string>('');

    useEffect(() => {
        setVisibleName('')
        const typingAnimation = () => {
            for(let i = 0; i <= name.length; i++) {
                setTimeout(() => {
                    setVisibleName(name.substring(0, i));
                }, i * 100);
            }
        }
        const delay = setTimeout(typingAnimation, 1000);

        return () => clearTimeout(delay);
    },[name]);

    return (
        <div>
            <div>
                <h1 className='name'>{visibleName}</h1>
            </div>
            <ModalProfile bio={brandonProfile} isExpanded={isExpanded} />
        </div>
    )
}

export default AboutSection;