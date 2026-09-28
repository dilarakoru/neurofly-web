import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export default function DroneGSAP() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1 });
      gsap.to(ref.current, { y: 20, rotation: 3, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div className="gsap-drone-container" ref={ref} aria-hidden="true"><img src={`${import.meta.env.BASE_URL}drone.svg`} alt="" style={{width:'min(48vw, 560px)'}} /></div>;
}
