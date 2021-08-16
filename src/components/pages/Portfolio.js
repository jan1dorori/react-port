import axios from 'axios';
import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';


function PortInfo({link, image, title, category}){
    return (
        <div className="port__item">
            <figure className="port__item__img">
                <a href={link}>
                    <img src={image} alt={title} />
                </a>
            </figure>
            <div className="port__item__txt">
                <h2>{title}</h2>
                <p>{category}</p>
            </div>
        </div>
    )
}

class Portfolio extends React.Component {
    state = {
        isLoading : true,
        ports : [] // 포트폴리오 내용을 저장할 곳
    }

    getPorts = async () => {
        const {
            data : {
                data : { ports },
            }
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        this.setState({ isLoading : false, ports })
    }

    componentDidMount(){
        setTimeout(() => {
            this.getPorts();
        }, 3000)
    }

    render() {
        const { isLoading, ports } = this.state;
        return (
            <div>
                {isLoading ? (
                    <div>로딩중입니다...</div>
                ) : (
                    <>
                        <Header />
                        <Layout>
                            <section id="portCont">
                                <div className="container">
                                    <Title text={["portfolio", "site"]} />
                                    <div className="port__cont">
                                        {ports.map((port) => (
                                            <PortInfo
                                                link={port.link}
                                                image={port.image}
                                                title={port.title}
                                                category={port.category}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </Layout>
                    </>
                )}
            </div>
        )
    }
}

export default Portfolio;