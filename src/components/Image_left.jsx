import React from 'react'
import Image from 'next/image'


function Image_left(props) {
  return (
    <div>
      <div className="d-flex justify-content-center hidden-up-down">
            <div className="container-1200">
                <div className="row g-0">
                    <div className="col-md-6">
                        <Image src={props.image} alt="" className={`box-images ${props.object_position}`}/>
                    </div>
                    <div className="col-md-6 right-image-about ">
                        <div className=" align-content-center box-image-about-mobile">
                            <h4 className="mb-3 box-image-h4">{props.image_heading}</h4>
                            <p className="m-0 box-image-p">{props.image_about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Image_left
