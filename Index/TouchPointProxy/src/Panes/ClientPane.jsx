import * as React from "react";
import { PROXY_HOSTNAME } from "../Main/Constant";
 

export const Client = (props) => {

    const [clients, setClients] = React.useState({})
    const [clientCards, setClientCards] = React.useState([])

    React.useEffect(() => {
        const url = `${PROXY_HOSTNAME}/clients`
        const clients = async () => fetch(url)
        clients()
            .then(res => res.json())
            .then(data => {
                setClients(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    React.useEffect(() => {
        const clientcards = []
        for (const c in clients){

            clientcards.push(OneClient(c, clients[c].image))
        }
        setClientCards(clientcards)
    }, [clients])
    
    const OneClient = (id, image) => {
        return (
            <div key={id} className="item" style={{margin:2}}>
                <img src={image} alt="" />
            </div>
        )
    }


    return (
        <section id="clients" className="construct">
            <div className="container">
                <div className="section-title">
                    <h1>we worked wityh awesome clients</h1>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="owl-carousel owl-theme">
                            {clientCards}
                        </div>
                    </div>
                    {/* 
                            
                            <div className="owl-carousel owl-theme">
                            
                            <div className="item">
                                <img src="img/clients/2.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="img/clients/3.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="img/clients/4.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="img/clients/5.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="img/clients/3.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="img/clients/4.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="img/clients/5.png" alt="" />
                            </div> 
                        </div> 
                    </div>*/}
                </div>
            </div>
        </section>
    );

}
