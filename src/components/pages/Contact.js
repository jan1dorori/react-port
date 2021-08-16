import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';

function Contact(){
    return (
        <>
            <Header />
            <Layout>
                <section id="contactCont">
                    <div className="container">
                        <div className="contact__cont"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Contact;