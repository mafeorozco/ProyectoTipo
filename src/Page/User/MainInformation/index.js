import React,{useState,useEffect} from 'react'
import { api, resources } from "../../../Utils/sdk";
import { Carousel } from "react-bootstrap";
import { IconoMouse,Card,Button } from '../../../Components';
import parse from "html-react-parser";
import { CardStyle } from '../../../Style';

const MainInformation = () => {
    const [mainCarrousel, setMainCarrousel] = useState([]);
    const [miniCarousel, setMiniCarousel] = useState([]);
    const [video, setVideo] = useState([]);
    const [information, setInformation] = useState([]);
    const [active, setActive] = useState(true);
    const [activeFilter,setActiveFilter]=useState(10);
    let slider = [];

    const getMainCarousel = async () => {
        const response = await api.get(
          `${resources.article}?category=1&tags=7&state=1`
        );
        setMainCarrousel(response.data);
      };

    
    const getMiniCarousel = async () => {
        const response = await api.get(
        `${resources.article}?category=5&tags=7&state=1`
        );
        getListMiniCarousel(response.data);
        console.log(response.data);
    };

    const getListMiniCarousel = (imgMiniCarousel) => {
        if (imgMiniCarousel.length != 0) {
          for (let i = 0; i < imgMiniCarousel.length; i += 4) {
            const grupoDeTres = imgMiniCarousel.slice(i, i + 4);
            setMiniCarousel(miniCarousel => [...miniCarousel, grupoDeTres]);
          }
        } 
        setActive(!active)
      }

      const getVideo = async () => {
        const response = await api.get(`${resources.article}?category=1&tags=8&state=1`);
        setVideo(response.data);
      };

      const getNewsEvents = async (filter) => {
        if(filter===undefined){
          setActiveFilter(10)
          const response = await api.get(
            `${resources.article}?category=6&tags=10&state=1`
          );
          setInformation(response.data);
        }else{
          setActiveFilter(filter)
          const response = await api.get(
            `${resources.article}?category=6&tags=${filter}&state=1`
          );
          setInformation(response.data);
        }
      };
    
      useEffect(() => {
        if(miniCarousel.length===0){
          getMiniCarousel()
          console.log("vacio")
        }
          getNewsEvents();
          getMainCarousel();
          getVideo();
      }, [active]);
    
    return ( 
        <div>
            <div className="carousel-container">
                <Carousel style={{ width: "100%", height: "100vh" }}>
                {mainCarrousel.map((item, index) => (
                    <Carousel.Item key={index}>{parse(item.html)}</Carousel.Item>
                ))}
                </Carousel>
                <Button className="button-green btn-carousel" >
                Guia turistica
                </Button>
                <IconoMouse />
            </div>
            <div className="content-below">
        <h1 className="title">Contenido</h1>
        <div className="video" id="content">
          {video.map((item, index) => (
            <div key={index} className="body-video">{parse(item.html)}</div>
          ))}
        </div>
        <p>Mira un poco acerca del municipio</p>
        <div className="mini-carousel">
          <Carousel className="body-mini-carousel">
            {miniCarousel.map((item, index) => (
              <Carousel.Item key={index}>
                <Carousel.Caption>
                  <div className="row">
                    {miniCarousel[index].map((item1, index) => (
                      <div
                        key={index}
                        className="col-lg-3 col-md-3 col-sm-12 slider-mini-carousel"
                      >
                        <div className="image-mini-carousel">
                          <div className="title-mini-carousel">
                            <p>{item1.name}</p>
                          </div>
                          <div className="img-mini-carousel">
                            {parse(item1.html)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="news-events">
          <p>Información</p>
          <div className="filter-users">
            <button
              onClick={() => getNewsEvents(10)}
              className={activeFilter===10 ? 'btn-filter-user-active':'btn-filter-user'}
            >
              Noticias
            </button>
            <button
              onClick={() => getNewsEvents(9)}
              className={activeFilter===9 ? 'btn-filter-user-active':'btn-filter-user'}
            >
              Eventos
            </button>
          </div>
          <div className="row container-cards">
            {information.map((item, index) => (
              <Card>{parse(item.html)}</Card>
            ))}
          </div>
        </div>
      </div>
        </div>
     );
}
 
export default MainInformation;