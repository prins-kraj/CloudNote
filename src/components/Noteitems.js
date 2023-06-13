import React from "react";

const Noteitems = (props) => {
  const { notes } = props;
  return (
    <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{notes.title}</h5>
                <p className="card-text">{notes.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae nostrum maiores repellendus exercitationem reiciendis reprehenderit similique praesentium asperiores laborum enim molestiae aspernatur placeat, esse nulla minima repudiandae eligendi itaque?</p>
            </div>
        </div>
    </div>
  )
};

export default Noteitems;
