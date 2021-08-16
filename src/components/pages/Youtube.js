import React from 'react';
import Title from '../basics/Title';
import Header from '../layout/Header';
import Layout from '../layout/Layout';

function Youtube(){
    return (
        <>
            <Header />
            <Layout>
                <section id="youtubeCont">
                    <div className="container">
                        <Title text={["Youtube", "site"]}/>
                        <div className="youtube__cont"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Youtube;