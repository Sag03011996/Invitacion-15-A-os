import React, { useEffect, useRef, useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Carousel, Button } from 'react-bootstrap';  
import { FaMapMarkerAlt } from 'react-icons/fa';   
import 'font-awesome/css/font-awesome.min.css';  
import './BirthdayInvitation.css';  

const BirthdayInvitation = () => {  
  const eventDate = new Date('2025-03-29');  
  const [daysLeft, setDaysLeft] = useState(Math.ceil((eventDate - new Date()) / (1000 * 60 * 60 * 24)));  
  const audioRef = useRef(null); // Referencia al audio  

  useEffect(() => {  
    const interval = setInterval(() => {  
      const now = new Date();  
      const difference = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24));  
      setDaysLeft(difference >= 0 ? difference : 0);  
    }, 1000);  

    return () => clearInterval(interval);  
  }, [eventDate]);  

  useEffect(() => {  
    if (audioRef.current) {  
      audioRef.current.currentTime = 15; // Empieza a los 15 segundos  
    }  
  }, []);  

  const copyToClipboard = (text) => {  
    navigator.clipboard.writeText(text);  
    alert(`Alias copiado: ${text}`);  
  };  

  return (  
    <div className="container mt-2">  
      <div className="card text-center" id="birthday-invitation">  
        <div className="position-relative">  
          <img  
            src="src/img/d5ad3d0c-7f12-459d-a1f6-ad8c195b207e.jpeg"  
            className="card-img-top"  
            alt="Invitación"  
            style={{ height: '50vh', objectFit: 'cover' }}  
          />  
          <div className="overlay-text"  
            style={{  
              position: 'relative',  
              bottom: '120px', // Puedes ajustar este valor según sea necesario  
              left: '50%',  
              transform: 'translateX(-50%)',  
              color: 'white',  
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',  
              width: '100%',  
              textAlign: 'center',  
              fontFamily: 'Playwrite Italia Moderna',  
              padding: '10px',  
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo semitransparente  
              borderRadius: '5px'  
            }}>  
            Mis Quince Años <br /> Mariana  
          </div>  
          {/* Reproductor de música */}  
          <audio  
            ref={audioRef}  
            controls  
            autoPlay  
            className="mt-2"  
            style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}  
          >  
            <source  
              src="src/music/christina perri a thousand years official music video [rtOvBOTyX00].mp3"  
              type="audio/mpeg"  
            />  
            Tu navegador no soporta el elemento de audio.  
          </audio>   
        </div>  

        <div className="card-body">  
        <h5 className="card-title">  
  Hay momentos inolvidables que se atesoran en el corazón para siempre, por esa razón quiero que compartas conmigo este día tan especial.  
</h5>  

          {/* Espaciado para el texto de días restantes */}  
          <p className="my-4">  
            <strong className='preparate'>Prepárate... Faltan {daysLeft} días para el gran día!</strong>  
          </p>  

          <p>  
            <strong className='esperamos'>Te esperamos el día Sábado 29 de Marzo a las 22 HS en Salón Castellum (Tafi Viejo-Tucumán)</strong>  
          </p>  

          {/* Botón de ubicación */}  
          <Button  
            variant="outline-secondary"  
            className="m-3"  
            href="https://maps.app.goo.gl/LpsaYuMnfqXgW9oJ7"  
            target="_blank"  
            rel="noopener noreferrer"  
          >  
            <FaMapMarkerAlt className="me-2" /> Ubicación  
          </Button>  

          {/* Carrusel de fotos */}  
          <Carousel>  
            <Carousel.Item>  
              <img className="d-block w-100" src="src/img/c8a6297d-cfc8-4ba5-9783-48cf01f06f1f.jpeg" alt="Foto 1" />  
            </Carousel.Item>  
            <Carousel.Item>  
              <img className="d-block w-100" src="src/img/2343b524-58a7-4d6a-88b9-0b28d7bbf700.jpeg" alt="Foto 2" />  
            </Carousel.Item>  
            <Carousel.Item>  
              <img className="d-block w-100" src="src/img/c943e4b5-59e9-41af-9b6e-018be5e478c5.jpeg" alt="Foto 3" />  
            </Carousel.Item>  
          </Carousel>  

          {/* Título de confirmación de asistencia con fondo de color */}  
          <h2 className="mt-4" style={{ backgroundColor: '#ffc107', padding: '15px', borderRadius: '5px', color: 'white' }}>  
            Confirmar Asistencia  
          </h2>  
          <p className='asist'>Me llenaría de mucha alegría que pudieras acompañarme en este día. Haz clic en el siguiente botón y confirma tu asistencia indicando tu Nombre y Apellido <br />(confirmar hasta el 18 de marzo)</p>  

          {/* Botones para WhatsApp */}  
          <div className="mt-3">  
            <Button   
              variant="outline-primary"  
              className="me-2"  
              onClick={() => window.open('https://wa.me/3816714749?text=Hola,%20solamente%20quería%20confirmar%20que%20estaré%20presente%20en%20su%20noche,%20mi%20nombre%20es:%20Elisa', '_blank')}  
            >  
              Elisa  
            </Button>  
            <Button   
              variant="outline-primary"  
              onClick={() => window.open('https://wa.me/3816636830?text=Hola,%20solamente%20quería%20confirmar%20que%20estaré%20presente%20en%20su%20noche,%20mi%20nombre%20es:%20Mariana', '_blank')}  
            >  
              Mariana  
            </Button>  
          </div>  

          <div className="dress-code mt-3 mx-auto text-center"  
            style={{ backgroundColor: '#ffc107', padding: '10px', borderRadius: '5px', maxWidth: '200px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>  
            <strong className='dress'>Dress Code:</strong>  
            <span className='span'>Elegante (Colores Oscuros)</span>  
            <div className="mt-2">   
              <img src="src/img/dress-code-icon-27.jpg" alt="Dress Code" style={{ width: '120px', marginTop: '10px' }} />  
            </div>  
          </div>  

        </div>  
        <div className="mt-3" style={{ marginBottom: '20px' }}>  
          <p className='tranf'>Tu presencia en este día tan especial es lo más importante, pero si deseas dejarme algún presente estará mi mesa de regalos. Puedes transferirme a mi cuenta o en el salón habrá una urna, mi prioridad es que te diviertas y la pases bien.</p>  
          {/* Sección de alias */}  
          <div className="mt-3">  
            <p>Alias:</p>  
            <Button variant="outline-info" onClick={() => copyToClipboard("mariana.870.barro.mp")}>  
              mariana.870.barro.mp  
            </Button>  
          </div>  
        </div>  

        {/* Foto de despedida con mensaje */}  
        <div className="position-relative">  
          <img  
            src="src/img/1a31c2ee-77e2-41ad-b8d6-137a8857ab18.jpeg"  
            className="card-img-bottom"  
            alt="Despedida"  
            style={{ width: '100%', objectFit: 'cover' }}  
          />  
          <div className="thank-you-overlay" style={{  
            position: 'absolute',  
            bottom: '20px',  
            left: '50%',  
            transform: 'translateX(-50%)',  
            color: 'white',  
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',  
            padding: '10px 15px',  
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  
            borderRadius: '5px'  
          }}>  
            ¡Gracias por formar parte de mi vida! <br /> Te esperamos!  
          </div>  
        </div>  

        {/* Footer */}  
        <footer className="mt-4 text-center">  
          <p>© 2025 Sebastian Garcia. Todos los derechos reservados.</p>  
          <div className="social-icons">  
            <a href="https://www.facebook.com/sebastian.a.garcia.90" target="_blank" rel="noopener noreferrer">  
              <i className="fab fa-facebook-square me-2" style={{ fontSize: '24px', color: '#3b5998' }}></i>  
            </a>  
            <a href="https://www.instagram.com/sebassgarcia14/" target="_blank" rel="noopener noreferrer">  
              <i className="fab fa-instagram me-2" style={{ fontSize: '24px', color: '#C13584' }}></i>  
            </a>  
          </div>  
        </footer>  
      </div>  
    </div>  
  );  
};  

export default BirthdayInvitation;  