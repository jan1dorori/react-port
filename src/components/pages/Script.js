import React from 'react';
import Title from '../basics/Title';
import Header from '../layout/Header';
import Layout from '../layout/Layout';

function Script(){
    return (
        <>
            <Header />
            <Layout>
                <section id="scriptCont">
                    <div className="container">
                        <Title text={["Script", "site"]}/>
                        <div className="script__cont"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Script;