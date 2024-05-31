import React from "react";
import Card1 from "../../Assets/images/clients_card_1.jpg";
import { clientsCardArr } from "../../JsonData/ClientsCard";

const ClientsCard = () => {
  console.log(clientsCardArr);

  return (
    <>
      <section className="clients-card-sec">
        <div
          className="clients-card-container" style={{width:"95%", margin:"0 auto"}}
        
        >
          <div className="clients-card-row row">
            {clientsCardArr?.map((item, index) => {
              return (
                <>
                  <div className="clients-card-col col-lg-3 col-md-6 col-xs-12 my-3">
                    <div className="clients-card-box ">
                      <div className="clients-card">
                        <h5>{item.title}</h5>
                        <img className="w-100" style={{height:"300px"}} src={item.thumbnailImg} />
                        <p style={{color:"#007185", fontSize:"14px", marginTop:"10px"}}>Explore now</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsCard;
