import React, { useEffect, useState } from "react";
import { api, resources } from "../../../Utils/sdk";
import { IconoMouse,Card,Button } from '../../../Components';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import parse from "html-react-parser";

const RoutesUser = () => {
    const [data, setData] = React.useState([]);
  const [article, setArticle] = useState([]);
  const [search, setSearch] = useState(true);
  const [values, setValues] = useState([]);
  const [filter, setFilter] = useState("?tags=4");
  const [mainCarrousel,setMainCarrousel]=useState([])

  const initialState = {
    Naturaleza: false,
    Aventura: false,
    Cultura: false,
  };
  
  const getMainCarousel=async()=>{
    const response= await api.get(`${resources.article}?category=2&tags=7`)
    setMainCarrousel(response.data)
  }  

  const [buttonHovered, setButtonHovered] = useState(initialState);

  const getArticle = async () => {
    let response;
    response = await api.get(`${resources.article}${filter}&state=1`);
    setArticle(response.data);
    console.log(article);
    setSearch(false);
  };

  useEffect(() => {
    getMainCarousel();
    getArticle();
  }, [search, values, filter]);

  const handleButtonHover = (buttonName, isHovered) => {
    setButtonHovered((prev) => ({
      ...initialState,
      [buttonName]: isHovered,
    }));
  };
    return ( 
        <div className="content-user">
      <div className="carousel-container">
      <Carousel style={{ width: '100%', height: '100vh' }}>
          {mainCarrousel.map((item,index)=>(
            <Carousel.Item key={index}>
            {parse(item.html)}
          </Carousel.Item>
          ))}          
        </Carousel>
        <Button className="button-orange btn-carousel carousel-routes">Ver rutas</Button>
        <IconoMouse />
      </div>
      <div id="content" className="content-below">
        <h1 className="title">Rutas</h1>
        <div className="category-card row" id="content">
          <div className="col">
            <button
              className={`category-tags ${
                buttonHovered.Naturaleza ? "hovered" : ""
              }`}
              onMouseOver={() => handleButtonHover("Naturaleza", true)}
              onMouseOut={() => handleButtonHover("Naturaleza", false)}
              type="submit"
              onClick={() => {
                let filtro = "?tags=4";
                setFilter(filtro);
              }}
            >
              Naturaleza
            </button>
          </div>
          <div className="col">
            <button
              className={`category-tags ${
                buttonHovered.Aventura ? "hovered" : ""
              }`}
              onMouseOver={() => handleButtonHover("Aventura", true)}
              onMouseOut={() => handleButtonHover("Aventura", false)}
              type="submit"
              onClick={() => {
                let filtro = "?tags=5";
                setFilter(filtro);
              }}
            >
              Aventura
            </button>
          </div>
          <div className="col">
            <button
              className={`category-tags ${
                buttonHovered.Cultura ? "hovered" : ""
              }`}
              onMouseOver={() => handleButtonHover("Cultura", true)}
              onMouseOut={() => handleButtonHover("Cultura", false)}
              type="submit"
              onClick={() => {
                let filtro = "?tags=6";
                setFilter(filtro);
              }}
            >
              Cultura
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <div className="row container-cards">
        {article.length > 0 ? (
            article.map((item, index) => (
              <Card styles="col-lg-5 col-md-5 col-sm-12 card-html" buttonStyles="btn-card" textButton="Ver mas informacion" info={parse(item.html)} isSale={false}>{parse(item.html)}</Card>
              ))
          ) : (
            <h1>No hay artículos</h1>
            )}
        </div>
      </div>
    </div>
     );
}
 
export default RoutesUser;