import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Market.css';
export default function Market() {
  const { i18n } = useTranslation(); const tr = i18n.language === 'tr';
  const items = tr ? ['Eğitim drone platformu', 'Kontrol ve bağlantı', 'Python ile programlama'] : ['Educational drone platform', 'Control and connection', 'Programming with Python'];
  return <main className="container" style={{paddingTop:140,paddingBottom:80,minHeight:'75vh'}}><h1>{tr?'Öğrenme kataloğu':'Learning catalog'}</h1><p style={{margin:'20px 0 36px',color:'var(--text-muted)'}}>{tr?'Bu prototip, eğitim modüllerini sunar. Satış veya ödeme işlemi içermez.':'Explore the educational modules in this prototype. No purchases or payments are processed.'}</p><div className="products-grid">{items.map((title,i)=><article className="product-card" key={title}><img src={`${import.meta.env.BASE_URL}drone.svg`} alt="" style={{height:190,width:'100%',padding:20}}/><div className="product-info"><small>0{i+1} / NEUROFLY</small><h2>{title}</h2><Link to={i===2?'/software':'/wiki'} className="btn btn-primary" style={{marginTop:24}}>{tr?'Modülü incele':'Explore module'}</Link></div></article>)}</div></main>;
}
