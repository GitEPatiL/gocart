import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BestSelling from '@/components/BestSelling'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import OurSpecs from '@/components/OurSpec'
import LatestProducts from '@/components/LatestProducts'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    useGSAP(() => {
        const elements = gsap.utils.toArray('.gsap-fade-up');
        elements.forEach((el) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 40 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }, []);

    return (
        <div>
            <div className="gsap-fade-up"><Hero /></div>
            <div className="gsap-fade-up"><LatestProducts /></div>
            <div className="gsap-fade-up"><BestSelling /></div>
            <div className="gsap-fade-up"><OurSpecs /></div>
            <div className="gsap-fade-up"><Newsletter /></div>
        </div>
    )
}
