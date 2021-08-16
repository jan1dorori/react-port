import React from 'react';
import Title from '../basics/Title';
import Header from '../layout/Header';
import Layout from '../layout/Layout';

function Reference(){
    return (
        <>
            <Header />
            <Layout>
                <section id="referCont">
                    <div className="container">
                        <Title text={["Reference", "site"]}/>
                        <div className="refer__cont"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Reference;